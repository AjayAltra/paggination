import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { setCurrentPage } from '../redux/actions/userActions';

const PaginationComponent = () => {
    const { pageCount } = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();

    const handlePageClick = (data) => {
        let newPage = data.selected + 1;
        console.log(newPage);
        dispatch(setCurrentPage(newPage));
    }


    return (
        <>
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </>
    );
}

export default PaginationComponent;