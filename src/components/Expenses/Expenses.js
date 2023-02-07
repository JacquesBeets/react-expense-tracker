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

  const fileredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No Expenses Found</p>;

  if (fileredExpenses.length > 0) {
    expensesContent = fileredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id + '-expenseItem'}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        onFilterYearChange={updateFilterYear}
        filterByYear={filterYear}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
