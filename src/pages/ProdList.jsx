import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './prodlist.css';

const ProdList = () => {
  const [data, setData] = useState([]);

  const handleData = async function () {
    try {
      const { data } = await axios.get('http://localhost:3000/api/customer_entry');
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async function (id) {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:3001/api/customer_entry/delete/${id}`);
        handleData();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <section className='content-main'>
      <div className='product-display' style={{ marginLeft: '330px', marginRight: '35px' }}>
        <table className='table table-light table-striped'>
          <thead className='table-dark'>
            <tr>
              <th scope='row'>Customer_Id</th>
              <td>Name</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope='row'>{item.id}</th>
                <td className='text-wrap'>{item.Name}</td>
                <td>
                  <button type='button' className='btn btn-primary m-2' style={{ width: '70px', height: '2rem', alignItems: 'center', justifySelf: 'center' }}>
                    <Link to={`/prodUpdate/${item.id}`} className='text-decoration-none text-white justify-content-center'>
                      Update
                    </Link>
                  </button>
                  <button
                    type='button'
                    onClick={() => handleDelete(item.id)}
                    className='btn btn-danger m-2'
                    style={{ width: '70px', height: '2rem', alignItems: 'center' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProdList;
