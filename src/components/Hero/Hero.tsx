import plant from "../../assets/plant.png";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <>
      <div>
        <img src={plant} className={classes["plant-image"]} />
      </div>
      <div src={plant} className={classes["text-banner"]}>
        <p className={classes["description-banner"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
    </>
  );
}

export default Hero;
