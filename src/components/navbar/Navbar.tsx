import "./Navbar.css";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
     <nav className="navbar">
      <h1 className="navbar-title">{title}</h1>

      <ul className="navbar-menu">
        <li>Home</li>
        <li>About</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;