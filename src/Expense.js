import Cart from "./components/Cart";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log(filteredYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Cart className="expense">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* 1) */}
      {/* {filteredExpense.length === 0 ? (
        <h2>No Expense found.</h2>
      ) : (
        filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
      )} */}

      {/* 2) */}
      {/* {expenseContent} */}

      
      <ExpenseChart expenses={filteredExpense}/>
      {/* 3) */}
      <ExpenseList items={filteredExpense} />
    </Cart>
  );
}

export default Expense;
