import { useEffect, useState } from "react";
import Benefits from "../../components/Benefits/Benefits";
import Categories from "../../components/Categories/Categories";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";

// Definindo a interface para as categorias
interface Category {
  id: number;
  name: string;
  image_link: string;
}

// fetch("/api/categories")
//   .then((res) => res.json())

function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data: Category[]) => {
        console.log("Categories fetched:", data);
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Hero />
      <Categories categories={categories} />
      <Products />
      <Benefits />
    </>
  );
}

export default Home;
