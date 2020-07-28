import React from "react";

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";

const Form = ({
  name,
  amount,
  handleName,
  handleAmount,
  handleSubmitForm,
  handleAddrTypeChange,
  handleSubAddrTypeChange,
  Add,
  SubAdd,
}) => {
  return (
    <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
      <FormGroup className="row">
        <Label for="exampleEmail" sm={2}>
          Name of Expense
        </Label>
        <Col sm={4}>
          <Input
            type="text"
            name="name"
            id="expenseName"
            placeholder="Name of expense?"
            value={name}
            onChange={handleName}
          />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label for="exampleEmail" sm={2}>
          Amount
        </Label>
        <Col sm={4}>
          <Input
            type="number"
            name="amount"
            id="expenseAmount"
            placeholder="0"
            value={amount}
            onChange={handleAmount}
          />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label for="exampleEmail" sm={2}>
          Categories
        </Label>
        <Col sm={4}>
          {" "}
          <select
            onChange={(e) => handleAddrTypeChange(e)}
            className="browser-default custom-select"
          >
            <option key={-1} value={"Select"}>
              Select
            </option>
            {Add.map((cat, key) => (
              <option key={key} value={key}>
                {cat}
              </option>
            ))}
          </select>
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label for="exampleEmail" sm={2}>
          Sub Categories
        </Label>
        <Col sm={4}>
          <select
            onChange={(e) => handleSubAddrTypeChange(e)}
            className="browser-default custom-select"
          >
            <option key={-1} value={"Select"}>
              Select Sub Cat
            </option>
            {SubAdd.map((subCat, key) => (
              <option key={key} value={key}>
                {subCat}
              </option>
            ))}
          </select>
        </Col>
      </FormGroup>
      <Button type="submit" color="primary">
        Add
      </Button>
    </BTForm>
  );
};

export default Form;
