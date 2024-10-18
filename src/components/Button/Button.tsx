import classes from "./Button.module.css";

function Button() {
  return (
    <>
      <div className={classes["button-show-more"]}>
        <div className={classes["show-more"]}>
          <a href="#" className={classes["show-more-link"]}>
            Show More
          </a>
        </div>
      </div>
    </>
  );
}

export default Button;
