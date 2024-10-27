import axios from "axios";
import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import caixinha from "../../assets/caixinha.png";
import filterIcon from "../../assets/filterIcon.png";
import fourballsicon from "../../assets/fourballsicon.png";
import seta from "../../assets/seta.png";
import Benefits from "../../components/Benefits/Benefits";
import Product from "../../components/Product/Product";
import { ProductEntity } from "../../components/Products/Products";
import classes from "./Shop.module.css";
import Pagination from "../../components/Pagination/Pagination";
import { useState } from "react";
import { CategoryEntity } from "../Home/Home";

export async function shopLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const productsRequest = await axios<{
    meta: { total: number };
    items: ProductEntity[];
  }>("/api/products", {
    params: Object.fromEntries(url.searchParams.entries()),
  });
  const categoriesRequest = await axios<CategoryEntity[]>("/api/categories");

  return {
    products: productsRequest.data,
    categories: categoriesRequest.data,
  };
}

function Shop() {
  const navigate = useNavigate();
  const { products, categories } = useLoaderData() as Awaited<
    ReturnType<typeof shopLoader>
  >;
  const url = new URL(window.location.href);
  const [isShowingFilters, setIsShowingFilters] = useState(false);
  const productsPerPage = Number(url.searchParams.get("limit") ?? 16);
  const currentPage =
    Number(url.searchParams.get("offset") ?? 0) / productsPerPage + 1;
  const showingLow = (currentPage - 1) * productsPerPage + 1;
  const showingHigh = showingLow + products.items.length - 1;
  const showingTotal = products.meta.total;
  const sorting = url.searchParams.get("orderBy") ?? "";

  const onChangeProductsPerPage: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    url.searchParams.set("limit", event.target.value);
    url.searchParams.delete("offset");
    navigate(url.pathname + url.search);
  };

  const currentFilters = (url.searchParams.get("categories") ?? "").split(",");
  const onChangeFilterCategory: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.target.checked) {
      url.searchParams.set(
        "categories",
        [...currentFilters, event.target.value].filter(Boolean).join(",")
      );
    } else {
      const newFilter = currentFilters
        .filter((c) => c !== event.target.value)
        .join(",");

      newFilter
        ? url.searchParams.set("categories", newFilter)
        : url.searchParams.delete("categories");
    }

    navigate(url.pathname + url.search);
  };
  const onChangeSortOrder: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    if (event.target.value) {
      url.searchParams.set("orderBy", event.target.value);
    } else {
      url.searchParams.delete("orderBy");
    }
    navigate(url.pathname + url.search);
  };

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
          <div>
            <div className={classes["filter-icons"]}>
              <div
                onClick={() =>
                  setIsShowingFilters((currentValue) => !currentValue)
                }
              >
                <img src={filterIcon} />
                <p className={classes["filter-p"]}>Filter</p>
              </div>
              <img src={fourballsicon} className={classes["fourballsicon"]} />
              <img src={caixinha} className={classes["caixinha"]} />
              <div className={classes["showing"]}>
                <p className={classes["showing-results"]}>
                  Showing {showingLow}-{showingHigh} of {showingTotal} results
                </p>
              </div>
            </div>
            {isShowingFilters && (
              <div>
                {categories.map((category) => (
                  <label key={category.id}>
                    <input
                      type="checkbox"
                      onChange={onChangeFilterCategory}
                      value={category.id}
                      checked={currentFilters.includes(category.id.toString())}
                    />
                    {category.name}
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className={classes["range-results"]}>
            <p className={classes["show-number"]}>Show</p>
            <select
              id="pageInput"
              defaultValue={productsPerPage}
              className={classes["input-number"]}
              onChange={onChangeProductsPerPage}
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="24">24</option>
              <option value="32">32</option>
            </select>
            <p className={classes["short-by"]}>Short by</p>
            <select
              name="string"
              id="string"
              className={classes["sort-order"]}
              defaultValue={sorting}
              onChange={onChangeSortOrder}
            >
              <option value="">Default</option>
              <option value="1">Ascending</option>
              <option value="2">Descending</option>
            </select>
          </div>
        </div>
      </div>

      <div className={classes["cards"]}>
        {products.items.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        pageSize={productsPerPage}
        total={products.meta.total}
      />
      <Benefits />
    </>
  );
}

export default Shop;
