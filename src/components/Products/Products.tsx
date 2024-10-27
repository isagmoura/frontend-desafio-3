import { useEffect, useState } from "react";
import Product from "../Product/Product";
import classes from "./Products.module.css";
import Button from "../Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface ProductEntity {
  id: number;
  name: string;
  description: string;
  large_description: string;
  image_link: string | null;
  other_images_link: string | null;
  discount_price: string | null;
  discount_percent: number | null;
  created_date: string | null;
  updated_dated: string | null;
  price: string;
  is_new: boolean | null;
}

function Products() {
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios<{ items: ProductEntity[] }>("/api/products", {
      params: { limit: 8, hasDiscount: true },
    })
      .then((res) => {
        setProducts(res.data.items);
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
      <Button onClick={() => navigate("/shop")} />
    </>
  );
}

export default Products;
