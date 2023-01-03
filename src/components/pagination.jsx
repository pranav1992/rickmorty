import React from "react";

const Pagination = ({setPageNumber, pageNumber, info}) => {
    let next = () =>{
        if(pageNumber === info.pages)return;
        setPageNumber((x) => x+1);
    };
    let prev = () =>{
        if(pageNumber === 1) return;
        setPageNumber((x) => x-1);
    };

    return ( <div className="container d-flex justify-content-center gap-5">
            <button className="btn btn-primary" onClick={prev}>
                Prev
            </button>
            <button className="btn btn-primary" onClick={next}>
                Next
            </button>

        </div>
     );
}
 
export default Pagination;