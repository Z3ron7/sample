import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onHandleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/login", values, { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "Login Successful") {
          localStorage.setItem("token", res.data.token); // Store the token in local storage
          navigate("/customerEntry");
        } else {
          alert(res.data.Error);
        }
      })
      .catch((err) => {
        console.log(err.response);
        alert("An error occurred during login.");
      });
  };

  return (
    <>
      <form className="mx-auto w-25 mt-5 my-5 border px-3 border-dark border-2 " onSubmit={onHandleLogin}>
        <div className="mb-2 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="kayden07@gmail.com"
            aria-describedby="emailHelp"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            id="exampleInputPassword1"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-50 mx-auto mx-2 d-flex justify-content-center mb-3"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
