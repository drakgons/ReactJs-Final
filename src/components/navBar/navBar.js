import { Link, NavLink } from "react-router-dom";
import "./navBar.css";
import CartWidget from "../cartWidget/cartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img
          className="imge"
          src="https://shoppingparis.com.py/wp-content/uploads/2022/03/LOGOS1_21.png"
          alt="Company logo"
        />
      </Link>
      <NavLink to="/category/iphone" activeclassname="active">
        IPHONE
      </NavLink>
      <NavLink to="/category/samsung" activeclassname="active">
        SAMSUNG
      </NavLink>
      <NavLink to="/category/xiaomi" activeclassname="active">
        XIAOMI
      </NavLink>
      <NavLink to="/category/Varios" activeclassname="active">
        OTRAS MARCAS
      </NavLink>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
