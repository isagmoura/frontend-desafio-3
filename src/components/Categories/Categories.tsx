import dining from "../../assets/dining.png";
import living from "../../assets/living.png";
import bedroom from "../../assets/bedroom.png";
import classes from "./Categories.module.css";
import { Link } from "react-router-dom";

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
        {categories.map((category) => (
          <div key={category.id} className={classes["categories"]}>
            <Link to="/shop">
              <img src={category.image_link} alt={category.name} />
              <p className={classes["title-link"]}>{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
