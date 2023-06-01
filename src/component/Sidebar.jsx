import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import { Link} from 'react-router-dom';
import './Sidebar.css'

function Sidebar () {
    return (
        <div className="position-fixed fluid">
            <div className='row'>
                <div className='col-auto col-sm-2 bg-white d-flex flex-column justify-content-between min-vh-100'>
                    <div className='mt-3'>
                        <a className='text-decoration-none ms-4 d-flex align-items-center text-black d-none d-sm-inline' role='button'>
                            <span className='f5-4'>Rudhil</span>
                        </a>
                        <hr className='text-black d-none d-sm-block'></hr>
                        <ul class="nav nav-pills flex-column mt-2 mt-sm-0 fnt" id='parentM'>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <Link to='/CustomerEntry' class="nav-link text-black text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-people'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Insurance</span>
                                </Link>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <Link to='/CustomerInsured' class="nav-link  text-black text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-grid'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Insured</span>
                                </Link>
                                {/* <ul className="nav collapse ms-2 flex-column" id='submenu' data-bs-parent="#parentM">
                                    <li class="nav-item">
                                        <a class="nav-link text-black" href="#" aria-current="page">
                                            <span className='d-none d-sm-inline'>Name</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-black" href="#">
                                            <span className='d-none d-sm-inline'>ID</span>
                                        </a>
                                    </li>
                                    
                                </ul> */}
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <Link to='/coverage' class="nav-link text-black text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-table'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Coverage</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown open">
                        <a class="btn border-none text-black dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                    <i className='bi bi-person f5-4'></i> 
                                    <span className='fs-5 ms-3 d-none d-sm-inline'>Dropdown</span>
                                </a>
                        <div class="dropdown-menu" aria-labelledby="triggerId">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Disabled action</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar