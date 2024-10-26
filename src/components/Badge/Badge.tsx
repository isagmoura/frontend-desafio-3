import classes from "./Badge.module.css";

function Badge(
  props: { type: "new" } | { type: "discount"; discount: number }
) {
  const label = props.type === "new" ? "New" : `-${props.discount}%`;

  return (
    <div
      className={`${classes["circle"]} ${
        props.type === "discount" ? classes["discount"] : classes["new"]
      }`}
    >
      <p className={classes["discount-or-new"]}>{label}</p>
    </div>
  );
}

export default Badge;
