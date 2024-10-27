import { Link } from "react-router-dom";
import classes from "./Pagination.module.css";

interface PaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
}

function getPageLink(url: URL, page: number, pageSize: number) {
  const newOffset = (page - 1) * pageSize;

  url.searchParams.set("offset", newOffset.toString());

  return url.pathname + url.search;
}

function Pagination(props: PaginationProps) {
  const url = new URL(window.location.href);
  const lastPage = Math.round(props.total / props.pageSize);

  const pageDelta =
    props.currentPage === 1 || props.currentPage === lastPage ? 2 : 1;
  const lowRange = props.currentPage - pageDelta;
  const middlePages = Array.from(
    { length: 1 + 2 * pageDelta },
    (_, i) => lowRange + i
  ).filter((page) => page >= 1 && page <= lastPage);

  return (
    <div className={classes["pages"]}>
      {props.currentPage !== 1 && (
        <Link
          to={getPageLink(url, props.currentPage - 1, props.pageSize)}
          className={`${classes["page"]} ${classes["wide"]}`}
        >
          Prev
        </Link>
      )}
      {middlePages.map((page) => (
        <Link
          key={page}
          to={getPageLink(url, page, props.pageSize)}
          className={`${classes["page"]} ${
            props.currentPage === page ? classes["current-page"] : ""
          }`}
        >
          {page}
        </Link>
      ))}
      {props.currentPage !== lastPage && (
        <Link
          to={getPageLink(url, props.currentPage + 1, props.pageSize)}
          className={`${classes["page"]} ${classes["wide"]}`}
        >
          Next
        </Link>
      )}
    </div>
  );
}

export default Pagination;
