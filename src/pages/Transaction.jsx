import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Transaction = () => {
  const [transactionDate, setTransactionDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const handleTransactionDateChange = (date) => {
    setTransactionDate(date);
  };

  const handleDueDateChange = (date) => {
    setDueDate(date);
  };

  return (
    <div className="container-fluid mt-3 px-3 border border-dark border-2 py-2" style={{ backgroundColor: "rgb(228, 228, 215)" }}>
      <div className="row">
        <div className="col-sm-3">
          Level 1: .col-sm-3
        </div>
        <div className="col-sm-9">
          <div className="row border">
            <div className="col-8 col-sm-6 border border-dark border-2">
              <form style={{ borderRadius: "1rem", maxWidth: "800px" }}>
                <div className="mb-2 input-group-sm w-100 mt-2">
                  <input className="lg form-control" id="name" placeholder="Policy #" type="text" />
                </div>
                <div className="input-group mb-2">
                  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Insurance</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="input-group mb-2">
                  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Insured</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form-control mb-2">
                  <DatePicker
                    className="form-control btn btn-light"
                    selected={transactionDate}
                    placeholderText="Transaction date"
                    id="transactionDate"
                    onChange={handleTransactionDateChange}
                  />
                </div>
                <div className="form-control">
                  <DatePicker
                    className="form-control btn btn-light"
                    selected={dueDate}
                    placeholderText="Due date"
                    id="dueDate"
                    onChange={handleDueDateChange}
                  />
                </div>
                <button className="btna lg mx-2 px-2 text-light" style={{ width: "90px" }} type="submit">
                  Save
                </button>
              </form>
              Level 2: .col-8 .col-sm-6
            </div>
            <div className="col-4 col-sm-6 border border-dark border-2">
              <form style={{ borderRadius: "1rem", maxWidth: "800px" }}>
                <div className="mb-2 input-group-sm w-100 mt-2">
                  <input className="lg form-control" id="name" placeholder="Policy #" type="text" />
                </div>
                <div className="input-group mb-2">
                  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Insurance</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="input-group">
                  <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Insured</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <button className="btna lg mx-2 px-2 text-light" style={{ width: "90px" }} type="submit">
                  Save
                </button>
              </form>
              Level 2: .col-4 .col-sm-6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
