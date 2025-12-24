const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-purple-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-blue-50',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;


