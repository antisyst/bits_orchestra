import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-start justify-start p-7 gap-10">
      <Link to="/" className="hover:underline">
        Product List
      </Link>
      <Link to="/reviews" className="hover:underline">
        Reviews
      </Link>
    </nav>
  );
};

export default Navbar;
