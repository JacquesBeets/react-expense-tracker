import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020');

  const updateFilterYear = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">

      <ExpenseFilter
        onFilterYearChange={updateFilterYear}
        filterByYear={filterYear}
      />

      {/* Return Expense Items */}
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id+"-expenseItem"}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
       
    </Card>
  );
}

export default Expenses;
