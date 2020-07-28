import React, { useState, useEffect } from "react";
import { Container, Jumbotron } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../src/components/Form";
import List from "../src/components/List";
import { Categories } from "./util.js";
function App() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const handleName = (event) => {
    console.log("Name ", event.target.value);
    setName(event.target.value);
  };
  useEffect(() => {
    
  }, [expenses]);
  const handleAmount = (event) => {
    console.log("Amount ", event.target.value);
    setAmount(event.target.value);
  };

  const [cattype, setCat] = useState("");
  const [subselct, setsubSelect] = useState("");

  const categories = Object.keys(Categories);
  const Add = categories.map((Add) => Add);

  const handleAddrTypeChange = (e) => {
    setCat(categories[e.target.value]);
    setsubCat(Categories[categories[e.target.value]]);
    setsubSelect("Select");
  };
  const handleSubAddrTypeChange = (e) => {
    // setCat(categories[e.target.value])
    setsubSelect(Categories[cattype][e.target.value]);
  };
  const [catsubtype, setsubCat] = useState([]);
  console.log("new cat", Categories[cattype]);
  // if (Categories[cattype]) {
  const SubAdd =
    typeof catsubtype !== "string" && catsubtype.map((SubAdd) => SubAdd);
  console.log("sub cat", catsubtype);
  // }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    //check whether the name is not empty and the amount is not negative
    if (name !== "" && amount > 0) {
      // single expense object
      const expense = { name, amount };
      // do not override previous values in the array
      // use spread operator to access previous values
      setExpenses([...expenses, expense]);

      // clean input fields
      setName("");
      setAmount("");
    } else {
      console.log("Invalid expense name or the amount");
    }
  };
  return (
    <Container>
      <Jumbotron fluid>
        <h3 className="display-6" className="text-center">
          Expense Tracker React App
          {/* <img src={Logo} style={{ width: 50, height: 50 }} alt='react-logo' /> */}
        </h3>
        <div className="text-center">
          <p>
            Total Expense:{" "}
            <span className="text-success">
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount));
              }, 0)}
            </span>
          </p>
        </div>

        {console.log("add", cattype)}

        <Form
          name={name}
          amount={amount}
          handleName={handleName}
          handleAmount={handleAmount}
          handleSubmitForm={handleSubmitForm}
          Add={Add}
          SubAdd={SubAdd}
          handleSubAddrTypeChange={handleSubAddrTypeChange}
          handleAddrTypeChange={handleAddrTypeChange}
        />
        <List expenses={expenses} />
      </Jumbotron>
    </Container>
  );
}

export default App;
