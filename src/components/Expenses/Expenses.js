import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState();

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensesChart = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filteredExpensesList = props.items.filter((expense) => {
    if (!filteredYear || filteredYear === 'All') {
        return expense
    } else {
        return expense.date.getFullYear().toString() === filteredYear;
    }
});

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpensesList} />
        <ExpensesList items={filteredExpensesList} />
      </Card>
    </div>
  );
};

export default Expenses;