import LeftArrow from "@mui/icons-material/KeyboardDoubleArrowLeft";
import RightArrow from "@mui/icons-material/KeyboardDoubleArrowRight";
import { TUIPaginationProps } from "./types";

import "./TUIPagination.css";

const TUIPagination: React.FC<TUIPaginationProps> = (props) => {
  const {
    pageNo,
    totalPage,
    hasPrevNextLevel = true,
    pageLevel,
    onPageChange,
  } = props || {};
  const prevPageLevel = hasPrevNextLevel ? pageLevel?.prev || "Prev" : "";
  const nextPageLevel = hasPrevNextLevel ? pageLevel?.next || "Next" : "";
  if (!pageNo || !totalPage) return <></>;
  return (
    <section className="TUIPagination_root">
      {pageNo > 1 && (
        <button
          className="TUIPagination_btn"
          onClick={() => onPageChange(pageNo - 1)}
        >
          <LeftArrow />
          &nbsp;{prevPageLevel}
        </button>
      )}
      <span>
        Page {pageNo} of {totalPage}
      </span>
      {pageNo < totalPage && (
        <button
          className="TUIPagination_btn"
          onClick={() => onPageChange(pageNo + 1)}
        >
          {nextPageLevel}&nbsp;
          <RightArrow />
        </button>
      )}
    </section>
  );
};

export default TUIPagination;
