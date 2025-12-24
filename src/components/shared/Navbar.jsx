import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Bell, LogOut, User } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import Button from './Button';
import Notifications from './Notifications';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const NavLink = ({ to, children, className = '' }) => (
    <Link
      to={to}
      className={`
        px-3 py-2 rounded-lg transition-all duration-300 ease-in-out
        ${isActive(to)
          ? 'text-primary font-semibold bg-blue-50 border-b-2 border-primary'
          : 'text-gray-700 hover:text-primary hover:bg-blue-50/50'
        }
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${className}
      `}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SkillBridge
            </span>
          </Link>

          <div className="flex items-center space-x-2">
            {isAuthenticated ? (
              <>
                {user.type === 'student' ? (
                  <>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/roadmap">Roadmap</NavLink>
                    <NavLink to="/jobs">Jobs</NavLink>
                    <NavLink to="/community">Community</NavLink>
                    <NavLink to="/messages">Messages</NavLink>
                    <NavLink to="/leaderboard">Leaderboard</NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/company/dashboard">Dashboard</NavLink>
                    <NavLink to="/company/post-job">Post Job</NavLink>
                    <NavLink to="/company/inbox">Applications</NavLink>
                  </>
                )}
                <Link
                  to="/profile"
                  className={`
                    p-2 rounded-lg transition-all duration-300 ease-in-out
                    ${isActive('/profile')
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-blue-50/50'
                    }
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                  `}
                >
                  <User className="w-5 h-5" />
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className={`
                      relative p-2 rounded-lg transition-all duration-300 ease-in-out
                      text-gray-700 hover:text-primary hover:bg-blue-50/50
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    `}
                  >
                    <Bell className="w-5 h-5" />
                    {user.notifications && user.notifications.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {user.notifications.length}
                      </span>
                    )}
                  </button>
                  {showNotifications && (
                    <Notifications onClose={() => setShowNotifications(false)} />
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-blue-50/50 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <NavLink to="/jobs">Search Jobs</NavLink>
                <NavLink to="/company/post-job">Post a Job</NavLink>
                <Button onClick={() => navigate('/?login=true')} variant="primary">
                  Login
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


