import { Pagination } from '@mui/material';
import React from 'react';

function CustomPagination({setPage}) {
    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
    }
  return (
    <div>
        <Pagination count={10} onChange={(e)=>handlePageChange(e.target.textContent)}/>
    </div>
  )
}

export default CustomPagination