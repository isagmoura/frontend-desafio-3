import logo from "../../assets/logo.png";
import profileUser from "../../assets/profileUser.png";
import search from "../../assets/search.png";
import heartLike from "../../assets/heartLike.png";
import shoppingCart from "../../assets/shoppingCart.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={classes["logo"]}>
        <img src={logo} />
      </div>
      <nav>
        <ul className={classes["menu-header"]}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className={classes["icons-header"]}>
        <ul className={classes["icons-header-list"]}>
          <li>
            <a href="#">
              <img src={profileUser} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={search} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={heartLike} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={shoppingCart} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
