import './Navbar.css';

function Navbar ({ isReversed }) {

  return (
    <nav className="navbar">
      {isReversed ? (
        <>
          <div className="navbar-search">
            <button className="navbar-button">Search</button>
            <input type="text" className="navbar-input" placeholder="Search" />
          </div>
          <div className="navbar-left">
            <div className="navbar-links">
              <a href="#" className="navbar-link active">Home</a>
              <a href="#" className="navbar-link">Features</a>
              <a href="#" className="navbar-link">Pricing</a>
              <a href="#" className="navbar-link">About</a>
            </div>
            <div className="navbar-brand">Navbar</div>
          </div>
        </>
      ) : (
        <>
          <div className='navbar-left'>
            <div className="navbar-brand">Navbar</div>
            <div className="navbar-links">
              <a href="#" className="navbar-link active">Home</a>
              <a href="#" className="navbar-link">Features</a>
              <a href="#" className="navbar-link">Pricing</a>
              <a href="#" className="navbar-link">About</a>
            </div>
          </div>
          <div className="navbar-search">
            <input type="text" className="navbar-input" placeholder="Search" />
            <button className="navbar-button">Search</button>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
