import React from "react";

const ProdPagination = props => {
  const { start, numberOfPages, changePageByOne, shiftAndUpdatePage } = props;
  const second = start + 1;
  const third = start + 2;
  console.log(start);
  return (
    <div>
      {start > 1 ? (
        <span onClick={() => changePageByOne("back")}>Previous</span>
      ) : null}
      <button>{start}</button>
      {second < numberOfPages ? (
        <button onClick={() => shiftAndUpdatePage(second)}>{second}</button>
      ) : null}
      {third < numberOfPages ? (
        <button onClick={() => shiftAndUpdatePage(third)}>{third}</button>
      ) : null}
      {numberOfPages > 3 && start !== numberOfPages ? (
        <span>
          <span>...</span>
          <button onclick={() => shiftAndUpdatePage(numberOfPages)}>
            Last
          </button>
        </span>
      ) : null}
      {start < numberOfPages ? (
        <span onClick={() => changePageByOne("forward")}>Next</span>
      ) : null}
    </div>
  );
};

export default ProdPagination;
