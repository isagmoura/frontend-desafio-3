import trophy from "../../assets/trophy.png";
import guarantee from "../../assets/guarantee.png";
import shipping from "../../assets/shipping.png";
import support from "../../assets/support.png";
import classes from "./Benefits.module.css";

function Benefits() {
  return (
    <>
      <div className={classes["cards"]}>
        <div className={classes["cards-benefits"]}>
          <img src={trophy} className={classes["img-benefits"]} />
          <div className={classes["descriptions"]}>
            <p className={classes["descriptive-title"]}>High Quality</p>
            <p className={classes["description-benefits"]}>
              crafted from top materials
            </p>
          </div>
        </div>
        <div className={classes["cards-benefits"]}>
          <img src={guarantee} className={classes["img-benefits"]} />
          <div className={classes["descriptions"]}>
            <p className={classes["descriptive-title"]}>Warranty Protection</p>
            <p className={classes["description-benefits"]}>Over 2 years</p>
          </div>
        </div>
        <div className={classes["cards-benefits"]}>
          <img src={shipping} className={classes["img-benefits"]} />
          <div className={classes["descriptions"]}>
            <p className={classes["descriptive-title"]}>Free Shipping</p>
            <p className={classes["description-benefits"]}>Order over 150 $</p>
          </div>
        </div>
        <div className={classes["cards-benefits"]}>
          <img src={support} className={classes["img-benefits"]} />
          <div className={classes["descriptions"]}>
            <p className={classes["descriptive-title"]}>24 / 7 Support</p>
            <p className={classes["description-benefits"]}>Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
