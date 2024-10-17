import classes from "./Details.module.css";
import seta from "../../assets/seta.png";
import outdoorSofaMini from "../../assets/outdoorSofaMini.png";
import outdoorSofaMini2 from "../../assets/outdoorSofaMini2.png";
import outdoorSofaMini3 from "../../assets/outdoorSofaMini3.png";
import outdoorSofaMini4 from "../../assets/outdoorSofaMini4.png";
import sofaGrande from "../../assets/sofaGrande.png";

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
      <div className={classes["details-product-container"]}>
        <div className={classes["mini-photos"]}>
          <a href="#">
            <div className={classes["mini-photos-container"]}>
              <img src={outdoorSofaMini} className={classes["mini-img"]} />
            </div>
          </a>
          <a href="#">
            <div className={classes["mini-photos-container"]}>
              <img src={outdoorSofaMini2} className={classes["mini-img"]} />
            </div>
          </a>
          <a href="#">
            <div className={classes["mini-photos-container"]}>
              <img src={outdoorSofaMini3} className={classes["mini-img"]} />
            </div>
          </a>
          <a href="#">
            <div className={classes["mini-photos-container"]}>
              <img src={outdoorSofaMini4} className={classes["mini-img"]} />
            </div>
          </a>
        </div>
        <div className={classes["big-photo-container"]}>
          <a href="#">
            <div className={classes["big-photo-sofa"]}>
              <img src={sofaGrande} className={classes["big-couch"]} />
            </div>
          </a>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Details;
