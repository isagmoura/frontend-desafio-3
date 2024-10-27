import logo from "../../assets/logo.png";
import profileUser from "../../assets/profileUser.png";
import search from "../../assets/search.png";
import heartLike from "../../assets/heartLike.png";
import shoppingCart from "../../assets/shoppingCart.png";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className={classes["logo"]}>
        <img src={logo} />
      </div>
      <nav>
        <ul className={classes["menu-header"]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className={classes["icons-header"]}>
        <ul className={classes["icons-header-list"]}>
          <li>
            <img src={profileUser} />
          </li>
          <li>
            <img src={search} />
          </li>
          <li>
            <img src={heartLike} />
          </li>
          <li>
            <img src={shoppingCart} />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
