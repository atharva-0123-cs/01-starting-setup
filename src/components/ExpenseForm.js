import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // 1)
  const [changeTitle, setChangeTitle] = useState("");
  const [changeAnount, setChangeAmount] = useState("");
  const [changeDate, setChangeDate] = useState("");
  // 2)
  // const [userInput, setUserInput] = useState({
  //     entertedTitle : '',
  //     entertedAmount : '',
  //     entertedDate : '',
  // })

  const titleChangeHandler = (event) => {
    // 1)
    setChangeTitle(event.target.value);
    // 2)
    // setUserInput({
    //     ...userInput,
    //     entertedTitle : event.target.value,
    // });
    // 3)
    // setUserInput((prevInput) => {
    //    return {...prevInput, entertedTitle : event.target.value,}
    // });
    // console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // 1)
    setChangeAmount(event.target.value);
    // 2)
    // setUserInput({
    //     ...userInput,
    //     entertedAmount : event.target.value,
    // });
    // 3)
    // setUserInput((prevInput) => {
    //    return {...prevInput, entertedAmount : event.target.value,}
    // });
  };
  const dateChangeHandler = (event) => {
    // 1)
    setChangeDate(event.target.value);
    // 2)
    // setUserInput({
    //     ...userInput,
    //     entertedDate : event.target.value,
    // });
    // 3)
    // setUserInput((prevInput) => {
    //    return {...prevInput, entertedDate: event.target.value,}
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: changeTitle,
      amount: +changeAnount,
      date: new Date(changeDate),
    };

    props.onSaveExpanseData(expenseData);

    // console.log(expenseData);
    setChangeTitle("");
    setChangeAmount("");
    setChangeDate("");
    // setTimeout(()=>{ console.log(expenseData);},1000);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={changeTitle}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={changeAnount}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={changeDate}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancle}>
            Cancle
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
