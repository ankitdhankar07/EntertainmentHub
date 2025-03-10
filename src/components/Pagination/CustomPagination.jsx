import { Pagination } from "@mui/material";
import React from "react";

function CustomPagination({ setPage , numOfPages = 10}) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <Pagination
        count={numOfPages}
        color="primary"
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
}

export default CustomPagination;
