import product from "../../assets/product.png";
import chair from "../../assets/chair.png";
import whitesofa from "../../assets/whitesofa.png";
import bartable from "../../assets/bartable.png";
import grifo from "../../assets/grifo.png";
import muggo from "../../assets/muggo.png";
import pingky from "../../assets/pingky.png";
import potty from "../../assets/potty.png";
import Product from "../Product/Product";
import classes from "./Products.module.css";
import Button from "../Button/Button";

function Products() {
  return (
    <>
      <div className={classes["title-products-container"]}>
        <h2 className={classes["title-products"]}>Our Products</h2>
      </div>
      <div className={classes["cards"]}>
        <Product
          imageLink={product}
          title="Syltherine"
          description="Stylish cafe chair"
          discount="Rp 2.500.000"
          price="Rp 3.500.000"
        />
        <Product
          imageLink={chair}
          title="Leviosa"
          description="Stylish cafe chair"
          discount="Rp 2.500.000"
          price=""
        />
        <Product
          imageLink={whitesofa}
          title="Lolito"
          description="Luxury big sofa"
          discount="Rp 7.000.000"
          price="Rp 14.000.000"
        />
        <Product
          imageLink={bartable}
          title="Respira"
          description="Outdoor bar table and stool"
          discount="Rp 500.000"
          price=""
        />
        <Product
          imageLink={grifo}
          title="Grifo"
          description="Night lamp"
          discount="Rp 1.500.000"
          price=""
        />
        <Product
          imageLink={muggo}
          title="Muggo"
          description="Small mug"
          discount="Rp 150.000"
          price=""
        />
        <Product
          imageLink={pingky}
          title="Pingky"
          description="Cute bed set"
          discount="Rp 7.000.000"
          price="Rp 14.000.000"
        />
        <Product
          imageLink={potty}
          title="Potty"
          description="Minimalist flower pot"
          discount="Rp 500.000"
          price=""
        />
      </div>
      <Button />
    </>
  );
}

export default Products;
