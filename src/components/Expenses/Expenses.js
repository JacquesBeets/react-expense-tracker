import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [expenses, setExpensesState] = useState(props.expenses);
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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;
