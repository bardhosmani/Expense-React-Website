import React from 'react';
import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
        console.log("event.target.value",event.target.value)
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value={undefined}>All</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    {/* <option defaultValue={undefined}>No Filter</option> */}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;