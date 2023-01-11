import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const addNewExpenseHandler = () => {
    setAddNewExpense(true);
    console.log("add new expense");
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddNewExpense(false);
  };

  const cancelHandler = () => {
    setAddNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!addNewExpense && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {addNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
