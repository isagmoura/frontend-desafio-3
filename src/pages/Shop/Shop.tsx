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
import { ProductEntity } from "../../components/Products/Products";
import { useEffect, useState } from "react";

function Shop() {
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ProductEntity[]) => {
        console.log("Products fetched:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

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
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        {/* Placeholder - todo remove */}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
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
