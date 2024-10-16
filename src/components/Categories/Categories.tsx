import dining from "../../assets/dining.png";
import living from "../../assets/living.png";
import bedroom from "../../assets/bedroom.png";
import classes from "./Categories.module.css";

function Categories() {
  return (
    <>
      <div className={classes["title-categories-container"]}>
        <h2 className={classes["title-categories"]}>Browse The Range</h2>
      </div>

      <div className={classes["cards-categories"]}>
        <div className={classes["categories"]}>
          <a href="#">
            <img src={dining} />
            <p className={classes["title-link"]}>Dining</p>
          </a>
        </div>
        <div className={classes["categories"]}>
          <a href="#">
            <img src={living} />
            <p className={classes["title-link"]}>Living</p>
          </a>
        </div>
        <div className={classes["categories"]}>
          <a href="#">
            <img src={bedroom} />
            <p className={classes["title-link"]}>Bedroom</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Categories;
