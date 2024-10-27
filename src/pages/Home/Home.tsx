import { useEffect, useState } from "react";
import Benefits from "../../components/Benefits/Benefits";
import Categories from "../../components/Categories/Categories";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";

export interface CategoryEntity {
  id: number;
  name: string;
  image_link: string;
}

function Home() {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data: CategoryEntity[]) => {
        console.log("Categories fetched:", data);
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
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
