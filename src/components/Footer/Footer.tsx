import funiro from "../../assets/funiro.png";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={classes["footer-itens"]}>
        <div className={classes["location"]}>
          <a href="#">
            <img src={funiro} />
          </a>
          <p className={classes["map-location"]}>
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>

        <div className={classes["itens"]}>
          <div>
            <ul className={classes["menu-links"]}>
              <li className={classes["highlights"]}>Links</li>
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
          </div>

          <div className={classes["itens"]}>
            <ul className={classes["footer-links"]}>
              <li className={classes["highlights"]}>Help</li>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>

          <div className={classes["itens"]}>
            <ul className={classes["newsletter"]}>
              <li className={classes["highlights"]}>Newsletter</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className={classes["divider"]} />
      <div className={classes["credits"]}>
        <p className={classes["credits-sentence"]}>
          2023 furino. All rights reverved
        </p>
      </div>
    </>
  );
}

export default Footer;
