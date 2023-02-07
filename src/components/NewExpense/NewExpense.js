import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseBool] = useState(false);

  const showExpenseHandler = () => {
    setShowExpenseBool(true);
  };

  const hideExpenseHandler = () => {
    setShowExpenseBool(false);
  };

  const saveExpenseDataHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(data);
    hideExpenseHandler();
  };

  let addExpenseButton = (
    <button onClick={showExpenseHandler} type="submit">
      Add New Expense
    </button>
  );

  return (
    <div className="new-expense">
      {!showExpenseForm && addExpenseButton}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpenseData={hideExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
