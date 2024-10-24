import Product from "../../components/Product/Product";
import Benefits from "../../components/Benefits/Benefits";
import product from "../../assets/product.png";
import chair from "../../assets/chair.png";
import whitesofa from "../../assets/whitesofa.png";
import bartable from "../../assets/bartable.png";
import grifo from "../../assets/grifo.png";
import muggo from "../../assets/muggo.png";
import pingky from "../../assets/pingky.png";
import potty from "../../assets/potty.png";
import classes from "./Shop.module.css";
import seta from "../../assets/seta.png";
import filterIcon from "../../assets/filterIcon.png";
import fourballsicon from "../../assets/fourballsicon.png";
import caixinha from "../../assets/caixinha.png";

function Shop() {
  return (
    <>
      <div className={classes["banner"]}>
        <h2 className={classes["title-banner"]}>Shop</h2>
        <div className={classes["home-shop"]}>
          <a href="#" className={classes["link-home"]}>
            Home
          </a>
          <img src={seta} className={classes["seta"]} />
          <p className={classes["second-shop"]}>Shop</p>
        </div>
      </div>

      <div className={classes["container-filter"]}>
        <div className={classes["filter-icons"]}>
          <img src={filterIcon} />
          <p className={classes["filter-p"]}>Filter</p>
          <img src={fourballsicon} className={classes["fourballsicon"]} />
          <img src={caixinha} className={classes["caixinha"]} />
          <div className={classes["showing"]}>
            <p className={classes["showing-results"]}>
              Showing 1-16 of 32 results
            </p>
          </div>
        </div>

        <div className={classes["range-results"]}>
          <p>Show</p>
          <select name="number" id="number">
            <option value="valor1">16</option>
          </select>
          <p>Short by</p>
          <select name="string" id="string">
            Default
          </select>
        </div>
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
      <div className={classes["pages"]}>
        <a href="#" className={classes["number-page1"]}>
          <div className={classes["page1"]}>1</div>
        </a>
        <a href="#" className={classes["number-page"]}>
          <div className={classes["page"]}>2</div>
        </a>
        <a href="#" className={classes["number-page"]}>
          <div className={classes["page"]}>3</div>
        </a>
        <a href="#" className={classes["next"]}>
          <div className={classes["next-page"]}>Next</div>
        </a>
      </div>
      <Benefits />
    </>
  );
}

export default Shop;
