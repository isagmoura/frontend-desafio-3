import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes["plant-image"]}>
      <div className={classes["text-banner"]}>
        <p className={classes["description-banner"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
    </div>
  );
}

export default Hero;
