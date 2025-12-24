import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { mockPosts } from '../../data/mockPosts';
import { getFromStorage, saveToStorage } from '../../utils/storage';
import { Heart, MessageCircle, Plus } from 'lucide-react';
import Button from '../shared/Button';
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const { user, isAuthenticated } = useUser();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/?login=true');
      return;
    }

    const stored = getFromStorage('communityPosts', mockPosts);
    setPosts(stored);
  }, [isAuthenticated, navigate]);

  const handleLike = (postId) => {
    const updated = posts.map(post => {
      if (post.id === postId) {
        const wasLiked = post.liked;
        return {
          ...post,
          liked: !wasLiked,
          likes: wasLiked ? post.likes - 1 : post.likes + 1,
        };
      }
      return post;
    });
    setPosts(updated);
    saveToStorage('communityPosts', updated);
  };

  const handleCreatePost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: `post_${Date.now()}`,
      userId: user.id,
      userName: user.name,
      avatar: user.name?.charAt(0) || '👤',
      content: newPost,
      timestamp: new Date().toISOString(),
      likes: 0,
      liked: false,
    };

    const updated = [post, ...posts];
    setPosts(updated);
    saveToStorage('communityPosts', updated);
    setNewPost('');
    setShowCreateModal(false);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Community
          </h1>
          <Button
            onClick={() => setShowCreateModal(true)}
            variant="primary"
            className="flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Share Achievement</span>
          </Button>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-gray-800">{post.userName}</h3>
                    <span className="text-sm text-gray-500">·</span>
                    <span className="text-sm text-gray-500">{formatTime(post.timestamp)}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 transition ${
                        post.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
                      <span>{post.likes}</span>
                    </button>
                    <button
                      onClick={() => navigate('/messages')}
                      className="flex items-center space-x-2 text-gray-500 hover:text-primary transition"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Share Your Achievement</h2>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What did you accomplish today?"
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent mb-4"
            />
            <div className="flex space-x-3">
              <Button
                onClick={handleCreatePost}
                variant="primary"
                className="flex-1"
              >
                Post
              </Button>
              <Button
                onClick={() => {
                  setShowCreateModal(false);
                  setNewPost('');
                }}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;


