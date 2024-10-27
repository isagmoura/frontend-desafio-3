import { Link } from "react-router-dom";
import classes from "./Categories.module.css";

interface Category {
  id: number;
  name: string;
  image_link: string;
}

interface CategoriesProps {
  categories: Category[];
}

function Categories({ categories }: CategoriesProps) {
  return (
    <>
      <div className={classes["title-categories-container"]}>
        <h2 className={classes["title-categories"]}>Browse The Range</h2>
      </div>

      <div className={classes["cards-categories"]}>
        {categories.map((category) => {
          const params = new URLSearchParams();

          params.set("categories", category.id.toString());

          return (
            <div key={category.id} className={classes["categories"]}>
              <Link to={`/shop?${params.toString()}`}>
                <img src={category.image_link} alt={category.name} />
                <p className={classes["title-link"]}>{category.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
