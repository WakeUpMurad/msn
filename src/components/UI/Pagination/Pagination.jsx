import React, {useState} from 'react';
import classes from "./Pagination.module.css";

const Pagination = ({page, changePage, totalItemsCount, limit, portionSize= 10}) => {

    const totalPages = Math.ceil(totalItemsCount / limit)
    let pages = []
    for (let i = 1; i < totalPages; i++) {
        pages.push(i)
    }

    const portionCount = (totalPages / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.pagination}>
            { portionNumber > 1 &&
                <button className={classes.pageDark} onClick={() => {setPortionNumber(portionNumber - 1 )}}>PRE</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p =>
                    <a
                        onClick={() => changePage(p)}
                        key={p}
                        className={page !== p ? classes.pageDark : `${classes.pageDark} ${classes.active}`}>
                        {p}
                    </a>
            )}
            { portionCount > portionNumber &&
                <button className={classes.pageDark} onClick={() => {setPortionNumber(portionNumber + 1 )}}>NEXT</button>}
        </div>
    );
};

export default Pagination;
