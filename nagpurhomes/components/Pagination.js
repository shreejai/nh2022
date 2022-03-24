
import { useState, useEffect } from "react";

const Pagination = ({showPerPage, onPaginationChange}) => {

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
    }, [counter])

    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-primary" onClick={() => setCounter(counter - 1)}>Previous</button>
                <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Next</button>
            </div>
        </>
    )
}

export default Pagination
