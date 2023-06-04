import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Coverage = () => {
  const [customerEntryData, setCustomerEntryData] = useState([]);
  const [customerInsuredData, setCustomerInsuredData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  const fetchData = async (apiEndpoint, setData) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/${apiEndpoint}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async function (id, apiEndpoint, setData) {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      try {
        const { data } = await axios.delete(`http://localhost:3000/api/${apiEndpoint}/delete/${id}`);
        console.log(data);
        fetchData(apiEndpoint, setData);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleButton1Click = () => {
    if (activeSection === 'insurance') {
      setActiveSection(null);
    } else {
      setActiveSection('insurance');
      fetchData('customer_entry', setCustomerEntryData);
    }
  };

  const handleButton2Click = () => {
    if (activeSection === 'insured') {
      setActiveSection(null);
    } else {
      setActiveSection('insured');
      fetchData('customer_insured', setCustomerInsuredData);
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (activeSection === 'insurance') {
      searchRecords('customer_entry', search);
    } else if (activeSection === 'insured') {
      searchRecords('customer_insured', search);
    } else {
      searchRecords('customer_entry', search); // Default to searching in the "customer_entry" table
    }
  };
  
  const searchRecords = async (apiEndpoint, name) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/${apiEndpoint}/search/${name}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  
useEffect(() => {
  setActiveSection('insurance');
  fetchData('customer_entry', setCustomerEntryData);
}, []);

  const displayData =
    searchResults.length > 0 ? searchResults :
    activeSection === 'insurance' ? customerEntryData :
    activeSection === 'insured' ? customerInsuredData :
    [];

  return (
    <div className="fluid" style={{backgroundColor: "rgb(228, 228, 215)"}}>
    <div className="position-relevant container-md mt-3">
      <div className="d-flex justify-content-center" style={{ marginLeft: '330px', marginRight: '35px' }}>
        <button
          className={`btn btn-outline-success mx-2 m-3 ${activeSection === 'insurance' ? 'active' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseInsurance"
          aria-expanded={activeSection === 'insurance' ? 'true' : 'false'}
          aria-controls="collapseExample"
          onClick={handleButton1Click}
        >
          Insurance
        </button>
        <button
          className={`btn btn-outline-success mx-2 m-3  ${activeSection === 'insured' ? 'active' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseInsured"
          aria-expanded={activeSection === 'insured' ? 'true' : 'false'}
          aria-controls="collapseExample"
          onClick={handleButton2Click}
        >
          Insured
        </button>
        <form className="d-grid gap-2 d-flex justify-content-md-end" onSubmit={handleSearchSubmit}>
  <div className="input-group mb-3">
    <input
      className="form-control"
      type="search"
      placeholder="Search name..."
      aria-label="Search"
      value={search}
      onChange={handleSearchChange}
      style={{ width: "300px", marginTop: "15px" }}
    />
    <button className="btn btn-outline-success " style={{ width: "100px", marginTop: "15px" }} type="submit">
      Search
    </button>
  </div>
</form>
      </div>
      <div className={`collapse ${activeSection === 'insurance' ? 'show' : ''}`} id="collapseInsurance" style={{ marginLeft: '270px' }}>
        <h3>Insurance </h3>
        <table className="table table-light table-striped table-bordered border-secondary">
          <thead className="table-dark">
            <tr>
              <th scope="row">Customer_Id</th>
              <td>Name</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, index) => (
              <tr key={index}>
                <th scope="row">{row.id}</th>
                <td className="text-wrap">{row.Name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning m-2"
                    style={{ width: '40px', height: '2rem', alignItems: 'center', justifySelf: 'center' }}
                  >
                    <Link to={`/prodUpdate/${row.id}`} className="text-decoration-none text-white justify-content-center">
                        <i className='text-dark fa fa-edit'></i>
                    </Link>
                   
                  </button>
                  |
                  <button
                    type="button"
                    onClick={() => handleDelete(row.id, 'customer_entry', setCustomerEntryData)}
                    className="btn btn-danger m-2"
                    style={{ width: '40px', height: '2rem', alignItems: 'center' }}
                  >
                    <i className='fa fa-trash'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`collapse ${activeSection === 'insured' ? 'show' : ''}`} id="collapseInsured" style={{ marginLeft: '270px' }}>
        <h3>Insured Customer</h3>
        <table className="table table-light table-striped table-bordered border-secondary">
          <thead className="table-dark">
            <tr>
              <th scope="row">Customer_Id</th>
              <td>Name</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, index) => (
              <tr key={index}>
                <th scope="row">{row.id}</th>
                <td className="text-wrap">{row.Name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning m-2"
                    style={{ width: '40px', height: '2rem', alignItems: 'center', justifySelf: 'center' }}
                  >
                    <Link to={`/prodUpdate/${row.id}`} className="text-decoration-none text-white justify-content-center">
                    <i className='text-dark fa fa-edit m-0' data-bs-toggle="tooltip" data-bs-placement="left"></i>
                    </Link>
                  </button>
                  |
                  <button
                    type="button"
                    onClick={() => handleDelete(row.id, 'customer_insured', setCustomerInsuredData)}
                    className="btn btn-danger m-2"
                    style={{ width: '40px', height: '2rem', alignItems: 'center' }}
                  >
                    <i className='fa fa-trash'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Coverage;
