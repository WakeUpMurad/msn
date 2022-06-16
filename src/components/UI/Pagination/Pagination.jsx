import React from 'react';
import classes from "./Pagination.module.css";
import {getPagesArray} from "../../../utils/page";

const Pagination = ({totalPages, page, changePage}) => {

    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page !== p ? classes.page : `${classes.page} ${classes.active}`}>
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;