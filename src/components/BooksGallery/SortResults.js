import React from 'react';
import './style.css';

function SortDropdown({ handleSort }) {
    const handleChange = (e) => {
        handleSort(e.target.value);
    };

    return (
        <div className="sort-dropdown">
            <label htmlFor="sort">Sort by: </label>
            <select id="sort" display='start' onChange={handleChange}>
                <option value="">Sort</option>
                <option value="title">Title</option>
                <option value="position">category</option>
                <option value="authors">Authors</option>
                <option value="authors">Year</option>
            </select>
        </div>
    );
}

export default SortDropdown;
