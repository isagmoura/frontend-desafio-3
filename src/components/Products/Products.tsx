import product from "../../assets/product.png";
import share from "../../assets/share.png";
import compare from "../../assets/compare.png";
import heart from "../../assets/heart.png";
import classes from "./Products.module.css";
import Product from "../Product/Product";

function Products() {
  return (
    <>
      <div className={classes["title-products-container"]}>
        <h2 className={classes["title-products"]}>Our Products</h2>
      </div>
      <Product />
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

export default Products;
