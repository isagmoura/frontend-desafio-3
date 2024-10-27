import classes from "./Details.module.css";
import seta from "../../assets/seta.png";
import stars from "../../assets/stars.png";
import colorPurple from "../../assets/colorPurple.png";
import colorBlack from "../../assets/colorBlack.png";
import colorBeige from "../../assets/colorBeige.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import Product from "../../components/Product/Product";
import Button from "../../components/Button/Button";
import { ProductEntity } from "../../components/Products/Products";
import { useEffect, useState } from "react";
import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { CategoryEntity } from "../Home/Home";

export function detailsLoader({ params }: LoaderFunctionArgs) {
  return fetch(`/api/products/${params.id}`).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json() as Promise<
      ProductEntity & { category: CategoryEntity }
    >;
  });
}

function Details() {
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSize, setSelectedSize] = useState<string>("L");
  const product = useLoaderData() as Awaited<ReturnType<typeof detailsLoader>>;
  const [isShowingMore, setIsShowingMore] = useState(false);
  const navigate = useNavigate();
  const miniPhotoLinks = [
    product.image_link,
    ...(product.other_images_link?.split(";") ?? []),
  ];
  const [selectedMiniPhoto, setSelectedMiniPhoto] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    fetch(`/api/products?categories=${product.category.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: { items: ProductEntity[] }) => {
        setProducts(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setSelectedMiniPhoto(0);
  }, [pathname]);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };
  const handleShowMoreClick = () => {
    if (!isShowingMore && products.length > 4) {
      setIsShowingMore(true);
      return;
    }

    navigate(`/shop?categories=${product.category.id}`);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <div className={classes["previous-pages"]}>
        <div>
          <Link to={"/"} className={classes["link-home"]}>
            Home
          </Link>
          <img src={seta} />
          <Link to={"/shop"} className={classes["link-shop"]}>
            Shop
          </Link>
          <img src={seta} className={classes["seta"]} />
        </div>
        <div className={classes["current-page"]}>
          <p className={classes["current"]}>{product.name}</p>
        </div>
      </div>
      <div className={classes["details-product-container"]}>
        <div className={classes["mini-photos"]}>
          {miniPhotoLinks.map((link, i) => (
            <div
              className={classes["mini-photos-container"]}
              onClick={() => setSelectedMiniPhoto(i)}
            >
              <img src={link} className={classes["mini-img"]} />
            </div>
          ))}
        </div>
        <div className={classes["big-photo-container"]}>
          <img
            src={miniPhotoLinks[selectedMiniPhoto] ?? product.image_link}
            className={classes["big-couch"]}
          />
        </div>

        <div className={classes["details-product"]}>
          <div>
            <h2 className={classes["title-product"]}>{product.name}</h2>
            <p className={classes["cost-product"]}>
              {Number(product.discount_price || product.price).toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )}
            </p>
            <div className={classes["product-evaluation"]}>
              <img src={stars} className={classes["stars"]} />
              <div className={classes["review"]}>
                <p className={classes["review-p"]}>5 Customer Review</p>
              </div>
            </div>
            <p className={classes["large-description"]}>
              {product.large_description}
            </p>

            <div className={classes["sizes"]}>
              <p className={classes["size-title"]}>Size</p>
              <div className={classes["three-sizes"]}>
                <div
                  onClick={() => handleSizeClick("L")}
                  className={`${classes["size"]} ${
                    selectedSize === "L" ? classes.selectedSize : ""
                  }`}
                >
                  <p>L</p>
                </div>

                <div
                  onClick={() => handleSizeClick("XL")}
                  className={`${classes["size"]} ${
                    selectedSize === "XL" ? classes.selectedSize : ""
                  }`}
                >
                  <p>XL</p>
                </div>

                <div
                  onClick={() => handleSizeClick("XS")}
                  className={`${classes["size"]} ${
                    selectedSize === "XS" ? classes.selectedSize : ""
                  }`}
                >
                  <p>XS</p>
                </div>
              </div>
            </div>
            <div className={classes["colours"]}>
              <p className={classes["color-title"]}>Color</p>
              <div className={classes["color-container"]}>
                <div className={classes["color-choice"]}>
                  <img src={colorPurple} />
                </div>
                <div className={classes["color-choice"]}>
                  <img src={colorBlack} />
                </div>
                <div className={classes["color-choice"]}>
                  <img src={colorBeige} />
                </div>
              </div>
            </div>
            <div className={classes["actions-buy"]}>
              <div className={classes["add-one"]}>
                <div>
                  <p className={classes["minus"]}>-</p>
                </div>

                <div>
                  <p className={classes["quantity"]}>1</p>
                </div>

                <div>
                  <p className={classes["plus"]}>+</p>
                </div>
              </div>

              <div className={classes["add-cart"]}>
                <p className={classes["add-to-cart"]}>Add To Cart</p>
              </div>

              <div className={classes["compare"]}>
                <div>
                  <p className={classes["plus-p"]}>+</p>
                </div>
                <div>
                  <p className={classes["compare-p"]}>Compare</p>
                </div>
              </div>
            </div>
            <div className={classes["categories"]}>
              <div className={classes["id"]}>
                <p className={classes["categories-p1"]}>SKU</p>
                <p className={classes["two-dots"]}>:</p>
                <p className={classes["categories-p-second"]}>{product.sku}</p>
              </div>
              <div className={classes["id"]}>
                <p className={classes["categories-p2"]}>Category</p>
                <p className={classes["two-dots"]}>:</p>
                <p className={classes["categories-p-second"]}>
                  {product.category.name}
                </p>
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
                  <div className={classes["social-media"]}>
                    <img src={facebook} />
                  </div>

                  <div className={classes["social-media"]}>
                    <img src={linkedin} />
                  </div>

                  <div className={classes["social-media"]}>
                    <img src={twitter} />
                  </div>
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
          {products

            .filter((p) => p.id !== product.id)
            .slice(0, isShowingMore ? 8 : 4)
            .map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
        <Button onClick={handleShowMoreClick} />
      </div>
    </>
  );
}

export default Details;
