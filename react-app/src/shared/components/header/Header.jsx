import './Header.css';


export default function Header() {
  return (
    <nav className="navbar header-container">
      <div className="container-fluid">
        <a href="/"
           className="logo">LOGO</a>
        <div className="right-panel">
          <form className="d-flex"
                role="search">
            <div className="input-wrapper">
              <input className="search-input form-control"
                     type="search"
                     placeholder="Search"
                     aria-label="Search"/>
              <span className="icon">
              <i className="fa fa-search"
                 aria-hidden="true"></i>
            </span>
            </div>
          </form>
          <span className="menu-icon">
            <i className="fa fa-bell-o"
               aria-hidden="true"></i>
          </span>
          <span className="menu-icon">
            <i className="fa fa-user-o"
               aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </nav>
  );
}
