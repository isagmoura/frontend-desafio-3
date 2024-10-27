import classes from "./Button.module.css";

function Button(props: { onClick?: React.MouseEventHandler<HTMLDivElement> }) {
  return (
    <div className={classes["button-show-more"]}>
      <div className={classes["show-more"]} onClick={props.onClick}>
        <button className={classes["show-more-link"]}>Show More</button>
      </div>
    </div>
  );
}

export default Button;
