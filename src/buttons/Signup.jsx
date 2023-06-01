import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const onSubmitRegister = async (event) => {
    event.preventDefault();
   
    try {
      await axios.post('http://localhost:3000/register', values)
        .then(function(response) {
          if (response.data.Status === "Success") {  
            navigate('/');
          } else {
            alert("Error");
          }
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="mx-auto w-25 mt-3 px-3 border border-primary border-2">
      <h5 className="text-center mb-4">Signup</h5>
      <form onSubmit={onSubmitRegister}>
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            value={values.name}
            onChange={e => setValues({ ...values, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            value={values.email}
            onChange={e => setValues({ ...values, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={values.password}
            onChange={e => setValues({ ...values, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-50 mx-auto mx-2 d-flex justify-content-center">
          Submit
        </button>
      </form>
      
      <div className="text-center mt-3">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
