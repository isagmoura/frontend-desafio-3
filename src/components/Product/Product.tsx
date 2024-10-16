import product from "../../assets/product.png";
import share from "../../assets/share.png";
import compare from "../../assets/compare.png";
import heart from "../../assets/heart.png";
import classes from "./Product.module.css";

function Product() {
  return (
    <>
      <div className={classes["cards-products"]}>
        <div className={classes["products"]}>
          <a href="#">
            <img src={product} />
            <div className={classes["information-products"]}>
              <p className={classes["title-product"]}>Syltherine</p>
              <p className={classes["description-product"]}>
                Stylish cafe chair
              </p>
              <div className={classes["prices-container"]}>
                <p className={classes["discount-price"]}>Rp 2.500.000</p>
                <p className={classes["old-price"]}>Rp 3.500.000</p>
              </div>
            </div>
            <div className={classes["product-hover"]}></div>

            {/* Adicionando as ações que aparecem no hover */}
            <div className={classes["product-actions"]}>
              {/* Botão "See Details" */}
              <div className={classes["action-item"]}>
                <div className={classes["see-details-button"]}>See Details</div>
              </div>

              {/* Ações: Share, Compare e Like */}
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
          </a>
        </div>
      </div>
    </>
  );
}

export default Product;
