import classes from "./Details.module.css";
import seta from "../../assets/seta.png";

function Details() {
  return (
    <>
      <div className={classes["previous-pages"]}>
        <div>
          <a href="#" className={classes["link-home"]}>
            Home
          </a>
          <img src={seta} />
          <a href="#" className={classes["link-shop"]}>
            Shop
          </a>
          <img src={seta} className={classes["seta"]} />
        </div>
        <div className={classes["current-page"]}>
          <p className={classes["current"]}>Asgaard sofa</p>
        </div>
      </div>
    </>
  );
}

export default Details;
