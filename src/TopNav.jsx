import { NavLink } from "react-router-dom";


function TopNav() {
  return (
    <>
      <nav className="navbar bg-dark text-white navbar-dark navbar-expand fixed-top">
        <NavLink to="/" className="navbar-brand">
          Bright Stars
        </NavLink>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/hook" className="nav-link">
              Hook Test
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Customers" className="nav-link">
              customers
            </NavLink>
          </li>

         
        </ul>
      </nav>
    </>
  );
}
export default TopNav;
