import share from "../../assets/share.png";
import compare from "../../assets/compare.png";
import heart from "../../assets/heart.png";
import classes from "./Product.module.css";
import { ProductEntity } from "../Products/Products";
import { Link } from "react-router-dom";

function Product(props: { product: ProductEntity }) {
  if (!props.product.image_link) {
    return null;
  }

  // if (!props.product.discount) {
  //   return "";
  // }

  return (
    <>
      <div className={classes["cards-products"]}>
        <div className={classes["products"]}>
          <img src={props.product.image_link} />
          <div className={classes["circle"]}>
            <p className={classes["discount-or-new"]}>-30%</p>
          </div>
          <div className={classes["information-products"]}>
            <p className={classes["title-product"]}> {props.product.name}</p>
            <p className={classes["description-product"]}>
              {props.product.description}
            </p>
            <div className={classes["prices-container"]}>
              <p className={classes["discount-price"]}>
                Rp {props.product.price}
              </p>
              <p className={classes["old-price"]}>
                Rp {props.product.discount_price}
              </p>
            </div>
          </div>
          <div className={classes["product-hover"]}></div>
          {/* if discount_price  */}
          <div className={classes["product-actions"]}>
            {/* Botão "See Details" */}
            <div className={classes["action-item"]}>
              <Link to={`/details/${props.product.id}`}>
                <div className={classes["see-details-button"]}>See Details</div>
              </Link>
            </div>

            <div className={classes["share-compare-like"]}>
              <div className={classes["share-item"]}>
                <img src={share} />
                Share
              </div>
              <div className={classes["compare-item"]}>
                <img src={compare} />
                Compare
              </div>
              <div className={classes["like-item"]}>
                <img src={heart} />
                Like
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
