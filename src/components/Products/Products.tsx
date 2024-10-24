import { useEffect, useState } from "react";
import Product from "../Product/Product";
import classes from "./Products.module.css";
import Button from "../Button/Button";

// Definindo a interface para os produtos
interface Product {
  id: number;
  name: string;
  description: string;
  image_link: string;
  discount: string;
  price: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: Product[]) => {
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
          <Product
            key={product.id}
            imageLink={product.image_link}
            title={product.name}
            description={product.description}
            discount={product.discount}
            price={product.price}
          />
        ))}
      </div>
      <Button />
    </>
  );
}

export default Products;
