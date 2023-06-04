import React, { useState, useEffect, useCallback } from "react";
import ProdList from "./ProdList";
import "./customer.css";
import axios from "axios";

const CustomerEntry = () => {
  const [Name, setName] = useState("");
  const [customers, setCustomers] = useState([]);

  const updateTable = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/customer_entry");
      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    updateTable();
  }, [updateTable]);

  const sendCustomer = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/customer_entry/add", { Name });
      updateTable(); // Call the updateTable function to update the table
      setName(""); // Clear the input field after adding a customer
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fluid bckgrnd">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div
            className="bg-white text-black my-2"
            style={{
              borderRadius: "1rem",
              maxWidth: "980px",
              marginLeft: "330px",
              padding: "30px",
              alignItems: "center",
            }}
          >
            <div className="p-1 d-flex flex-column align-items-right">
              <h5 className="fw-bold mb-4 text-uppercase">Customer</h5>
              <form
                onSubmit={sendCustomer}
                style={{ borderRadius: "1rem", maxWidth: "800px" }}
              >
                <div className="mb-4 input-group-sm w-100">
                  <input
                    className="lg form-control"
                    id="name"
                    placeholder="Lastname, Firstname, Middlename"
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <button className="btna lg mx-2 px-2 text-light" style={{width: "90px"}} type="submit">
                  Add +
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ProdList customers={customers} updateTable={updateTable} />
    </div>
  );
};

export default CustomerEntry;
