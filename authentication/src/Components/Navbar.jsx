
export function Navbar({ activeTab, onTabChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Authentication</div>
      <div className="navbar-buttons">
        <button
          className={`nav-btn ${activeTab === 'register' ? 'active' : ''}`}
          onClick={() => onTabChange('register')}
        >
          Register
        </button>
        <button
          className={`nav-btn ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => onTabChange('login')}
        >
          Login
        </button>
      </div>
    </nav>
  )
}
