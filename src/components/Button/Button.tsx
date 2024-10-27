import classes from "./Button.module.css";

function Button(props: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <div className={classes["button-show-more"]}>
        <div className={classes["show-more"]}>
          <button className={classes["show-more-link"]} onClick={props.onClick}>
            Show More
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
