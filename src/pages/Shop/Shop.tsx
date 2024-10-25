import Product from "../../components/Product/Product";
import Benefits from "../../components/Benefits/Benefits";
import classes from "./Shop.module.css";
import seta from "../../assets/seta.png";
import filterIcon from "../../assets/filterIcon.png";
import fourballsicon from "../../assets/fourballsicon.png";
import caixinha from "../../assets/caixinha.png";
import { ProductEntity } from "../../components/Products/Products";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to={"/"} className={classes["link-home"]}>
            Home
          </Link>
          <img src={seta} className={classes["seta"]} />
          <p className={classes["second-shop"]}>Shop</p>
        </div>
      </div>

      <div className={classes["container-filter"]}>
        <div className={classes["filters-page"]}>
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
            <p className={classes["show-number"]}>Show</p>
            <input
              type="number"
              id="pageInput"
              placeholder="16"
              min="1"
              max="100"
              className={classes["input-number"]}
            />
            <p className={classes["short-by"]}>Short by</p>
            <select name="string" id="string" className={classes["sort-order"]}>
              <option value="">Default</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </div>
      </div>

      <div className={classes["cards"]}>
        {products.slice(0, 8).map((product) => (
          <Product key={product.id} product={product} />
        ))}
        {/* Placeholder - todo remove */}
        {products.slice(0, 8).map((product) => (
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
