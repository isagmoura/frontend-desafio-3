import dining from "../../assets/dining.png";
import living from "../../assets/living.png";
import bedroom from "../../assets/bedroom.png";
import classes from "./Categories.module.css";

function Categories() {
  return (
    <>
      <h2>Browse The Range</h2>
      <div className={classes["cards-categories"]}>
        <div className={classes["categories"]}>
          <img src={dining} />
          Dining
        </div>
        <div className={classes["categories"]}>
          <img src={living} />
          Living
        </div>
        <div className={classes["categories"]}>
          <img src={bedroom} />
          Bedroom
        </div>
      </div>
    </>
  );
}

export default Categories;
