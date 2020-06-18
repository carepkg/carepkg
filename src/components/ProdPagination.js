import React from "react";

const ProdPagination = props => {
  const { start, numberOfPages, changePageByOne, shiftAndUpdatePage } = props;
  const second = start + 1;
  const third = start + 2;
  console.log(start);
  return (
    <div className="prod-pagination-box">
      <div className="page-dir-arrow-box">
        {start > 1 ? (
          <span
            onClick={() => changePageByOne("back")}
            className="page-dir-arrow"
          >
            &#171;
          </span>
        ) : null}
      </div>
      <div className="page-box">
        <button className="page-box-btn page-num-selected">{start}</button>
        {second < numberOfPages ? (
          <button
            className="page-box-btn"
            onClick={() => shiftAndUpdatePage(second)}
          >
            <span className="">{second}</span>
          </button>
        ) : null}
        {third < numberOfPages ? (
          <button
            className="page-box-btn"
            onClick={() => shiftAndUpdatePage(third)}
          >
            {third}
          </button>
        ) : null}
        {numberOfPages > 3 && start !== numberOfPages ? (
          <span>
            <span className="page-box-ell">...</span>
            <button
              className="page-box-btn"
              onclick={() => shiftAndUpdatePage(numberOfPages)}
            >
              Last
            </button>
          </span>
        ) : null}
      </div>
      <div className="page-dir-arrow-box">
        {start < numberOfPages ? (
          <span
            onClick={() => changePageByOne("forward")}
            className="page-dir-arrow"
          >
            &#187;
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default ProdPagination;
