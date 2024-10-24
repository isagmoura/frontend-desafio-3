import { useEffect, useState } from "react";
import Product from "../Product/Product";
import classes from "./Products.module.css";
import Button from "../Button/Button";

export interface ProductEntity {
  id: number;
  name: string;
  description: string;
  large_description: string;
  image_link: string | null;
  other_images_link: string | null;
  discount: string;
  discount_price: string | null;
  discount_percent: string | null;
  created_date: string | null;
  updated_dated: string | null;
  price: string;
  is_new: boolean | null;
  category: any;
}

function Products() {
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
      <div className={classes["title-products-container"]}>
        <h2 className={classes["title-products"]}>Our Products</h2>
      </div>
      <div className={classes["cards"]}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Button />
    </>
  );
}

export default Products;
