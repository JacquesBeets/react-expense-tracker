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
    return expense.date.getFullYear().toString() === filterYear
   })

  return (
    <Card className="expenses">
      <ExpenseFilter
        onFilterYearChange={updateFilterYear}
        filterByYear={filterYear}
      />

      {/* Return Expense Items */}
      {fileredExpenses.map((expense) => {
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
