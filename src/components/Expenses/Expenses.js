import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2020");
  const expenses = props.expensesArray;

  const filterHandler = (selectedFilterData) => {
    // const filterData = selectedFilterData;
    // console.log(filterData);
    setSelectedFilter(selectedFilterData);
  };

  // const filteredExpenses = expenses.filter(
  //   (expense) => expense.date.getFullYear() == selectedFilter
  // );

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  // method 3
  <ExpensesList />;
  return (
    <div>
      <Card className="expenses">
        {/* method 3 */}
        <ExpensesFilter selected={selectedFilter} onFilter={filterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* method 2 */}
        {/* <ExpensesFilter selected={selectedFilter} onFilter={filterHandler} />
        {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* method 1 */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
}

export default Expenses;
