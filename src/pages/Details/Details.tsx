import classes from "./Details.module.css";
import seta from "../../assets/seta.png";
import outdoorSofaMini from "../../assets/outdoorSofaMini.png";
import outdoorSofaMini2 from "../../assets/outdoorSofaMini2.png";
import outdoorSofaMini3 from "../../assets/outdoorSofaMini3.png";
import outdoorSofaMini4 from "../../assets/outdoorSofaMini4.png";
import stars from "../../assets/stars.png";
import colorPurple from "../../assets/colorPurple.png";
import colorBlack from "../../assets/colorBlack.png";
import colorBeige from "../../assets/colorBeige.png";
import sofaGrande from "../../assets/sofaGrande.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import Product from "../../components/Product/Product";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";

function Details() {
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSize, setSelectedSize] = useState<string>("L");

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

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <div className={classes["previous-pages"]}>
        <div>
          <a href="#" className={classes["link-home"]}>
            Home
          </a>
          <img src={seta} />
          <a href="#" className={classes["link-shop"]}>
            Shop
          </a>
          <img src={seta} className={classes["seta"]} />
        </div>
        <div className={classes["current-page"]}>
          <p className={classes["current"]}>Asgaard sofa</p>
        </div>
      </div>
      <div className={classes["details-product-container"]}>
        <div className={classes["mini-photos"]}>
          <a href="#">
            <div className={classes["mini-photos-container"]}>
              <img src={outdoorSofaMini} className={classes["mini-img"]} />
            </div>
          </a>
          <a href="#">
            <div className={classes["mini-photos-container"]}>
              <img src={outdoorSofaMini2} className={classes["mini-img"]} />
            </div>
          </a>
          <a href="#">
            <div className={classes["mini-photos-container"]}>
              <img src={outdoorSofaMini3} className={classes["mini-img"]} />
            </div>
          </a>
          <a href="#">
            <div className={classes["mini-photos-container"]}>
              <img src={outdoorSofaMini4} className={classes["mini-img"]} />
            </div>
          </a>
        </div>
        <div className={classes["big-photo-container"]}>
          <a href="#">
            <div className={classes["big-photo-sofa"]}>
              <img src={sofaGrande} className={classes["big-couch"]} />
            </div>
          </a>
        </div>

        <div className={classes["details-product"]}>
          <div>
            <h2 className={classes["title-product"]}>Asgaard sofa</h2>
            <p className={classes["cost-product"]}>Rs. 250,000.00</p>
            <div className={classes["product-evaluation"]}>
              <img src={stars} className={classes["stars"]} />
              <div className={classes["review"]}>
                <p className={classes["review-p"]}>5 Customer Review</p>
              </div>
            </div>
            <p>
              Setting the bar as one of the loudest speakers in its class, the
              <br />
              Kilburn is a compact, stout-hearted hero with a well-balanced
              <br />
              audio which boasts a clear midrange and extended highs for a
              <br />
              sound.
            </p>
            <div className={classes["sizes"]}>
              <p className={classes["size-title"]}>Size</p>
              <div className={classes["three-sizes"]}>
                <a
                  href="#"
                  className={classes["size-link"]}
                  onClick={() => handleSizeClick("L")}
                >
                  <div
                    className={`${classes["size1"]} ${
                      selectedSize === "L" ? classes.selectedSize : ""
                    }`}
                  >
                    <p className={classes["letter-size1"]}>L</p>
                  </div>
                </a>

                <a
                  href="#"
                  className={classes["size-link"]}
                  onClick={() => handleSizeClick("XL")}
                >
                  <div
                    className={`${classes["size2"]} ${
                      selectedSize === "XL" ? classes.selectedSize : ""
                    }`}
                  >
                    <p className={classes["letter-size2"]}>XL</p>
                  </div>
                </a>
                <a
                  href="#"
                  className={classes["size-link"]}
                  onClick={() => handleSizeClick("XS")}
                >
                  <div
                    className={`${classes["size3"]} ${
                      selectedSize === "XS" ? classes.selectedSize : ""
                    }`}
                  >
                    <p className={classes["letter-size3"]}>XS</p>
                  </div>
                </a>
              </div>
            </div>
            <div className={classes["colours"]}>
              <p className={classes["color-title"]}>Color</p>
              <div className={classes["color-container"]}>
                <div>
                  <a href="#">
                    <img src={colorPurple} />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src={colorBlack} />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img src={colorBeige} />
                  </a>
                </div>
              </div>
            </div>
            <div className={classes["actions-buy"]}>
              <div className={classes["add-one"]}>
                <a href="#" className={classes["add"]}>
                  <div>
                    <p className={classes["minus"]}>-</p>
                  </div>
                </a>
                <a href="#" className={classes["add"]}>
                  <div>
                    <p className={classes["quantity"]}>1</p>
                  </div>
                </a>
                <a href="#" className={classes["add"]}>
                  <div>
                    <p className={classes["plus"]}>+</p>
                  </div>
                </a>
              </div>
              <a href="#" className={classes["link-cart"]}>
                <div className={classes["add-cart"]}>
                  <p className={classes["add-to-cart"]}>Add To Cart</p>
                </div>
              </a>
              <a href="#" className={classes["link-compare"]}>
                <div className={classes["compare"]}>
                  <div>
                    <p className={classes["plus-p"]}>+</p>
                  </div>
                  <div>
                    <p className={classes["compare-p"]}>Compare</p>
                  </div>
                </div>
              </a>
            </div>
            <div className={classes["categories"]}>
              <div className={classes["id"]}>
                <p className={classes["categories-p1"]}>SKU</p>
                <p className={classes["two-dots"]}>:</p>
                <p className={classes["categories-p-second"]}>SS001</p>
              </div>
              <div className={classes["id"]}>
                <p className={classes["categories-p2"]}>Category</p>
                <p className={classes["two-dots"]}>:</p>
                <p className={classes["categories-p-second"]}>Sofas</p>
              </div>
              <div className={classes["id"]}>
                <p className={classes["categories-p3"]}>Tags</p>
                <p className={classes["two-dots"]}>:</p>
                <p className={classes["categories-p-second"]}>
                  Sofa, Chair, Home, Shop
                </p>
              </div>
              <div className={classes["id"]}>
                <p className={classes["categories-p4"]}>Share</p>
                <p className={classes["two-dots"]}>:</p>
                <div className={classes["id-social-media"]}>
                  <a href="#">
                    <div className={classes["social-media"]}>
                      <img src={facebook} />
                    </div>
                  </a>
                  <a href="#">
                    <div className={classes["social-media"]}>
                      <img src={linkedin} />
                    </div>
                  </a>
                  <a href="#">
                    <div className={classes["social-media"]}>
                      <img src={twitter} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["description-container"]}>
        <div className={classes["titles-description"]}>
          <h2 className={classes["title-description"]}>Description</h2>
          <h2 className={classes["title-information"]}>
            Additional Information
          </h2>
        </div>

        <div className={classes["text-information"]}>
          <div className={classes["text-information-container"]}>
            <p className={classes["text-information-p"]}>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
          </div>
          <div className={classes["text-information-container"]}>
            <p className={classes["text-information-p"]}>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        </div>
      </div>

      <div className={classes["related-products-container"]}>
        <h2 className={classes["title-related-products"]}>Related Products</h2>
        <div className={classes["cards"]}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Button />
      </div>
    </>
  );
}

export default Details;
