import React, { useState } from 'react';
import ExpenseFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020');

  const updateFilterYear = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const fileredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onFilterYearChange={updateFilterYear}
        filterByYear={filterYear}
      />
      <ExpensesList items={fileredExpenses}/>
      
    </Card>
  );
}

export default Expenses;
