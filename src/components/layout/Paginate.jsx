import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductImg from '../../assets/product.png'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const lastElement = items.length + 1;
console.log(lastElement);


function Items({ currentItems }) {
  return (
<div className=' flex flex-wrap gap-2'>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <div className=" bg-amber-200 border-[0.5px] border-gray-200 rounded-xl hover:shadow-xl duration-300 overflow-hidden cursor-pointer group">
              <div className="h-[240px] overflow-hidden relative">
                <img
                  className="group-hover:scale-125 duration-500" src={ProductImg} alt="" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default function Paginate({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  console.log(items.length);

  const handlePageClick = (event) => {
    // console.log(event.selected,'eeeeeeee');
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      
      <Items currentItems={currentItems} />
      <div className=' flex items-center justify-between'>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        
        previousLabel={itemOffset === 0 ? "" : "< previous"}
        pageClassName="page-item"
        pageLinkClassName="page-link inline-block border border-[#F0F0F0] px-2 py-1 "
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item "
        breakLinkClassName="page-link "
        containerClassName="flex gap-2.5 items-center py-4"
        activeClassName="active bg-[#262626] text-white"
        renderOnZeroPageCount={null} />
      
      {items.length == +1 ? (
        <p>Products from {itemOffset} to {endOffset} of {items.length}</p>
      ) : (
        <p>Products from {itemOffset} to {items.length}</p>
      )}
      
      </div>
        <div>
          
        </div>
    </>
  );
}


// import React from 'react'

// export default function Paginate() {
//   return (
//     <div>Paginate</div>
//   )
// }