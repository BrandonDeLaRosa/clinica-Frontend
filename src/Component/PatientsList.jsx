import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img from '../assets/usuario.png'

const PatientsList = () => {

  const [patients, setPatients] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/api/v1/patients')
      .then(res => setPatients(res.data))
  }, [])

  console.log(patients);

  return (
    <div className='d-flex flex-column p-7 justify-content-center align-items-center'>
      <h1>Lista de pacientes.</h1>
      {/* 
            <div className='d-flex justify-content-center align-items center mt-7'>
                <div className="list-group" style={{width:"90%"}}>
                    <button type="button" className="list-group-item list-group-item-action active">
                        Cras justo odio
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste magni quisquam omnis labore tempore quibusdam.</button>
                    <button type="button" className="list-group-item list-group-item-action">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste magni quisquam omnis labore tempore quibusdam.</button>
                    <button type="button" className="list-group-item list-group-item-action">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste magni quisquam omnis labore tempore quibusdam.</button>
                    <button type="button" className="list-group-item list-group-item-action">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste magni quisquam omnis labore tempore quibusdam.</button>
                </div>
            </div> */}

      <main className="main-content-wrapper">
        <div className="container">
          <div className="row mb-8">
            <div className="col-md-12">
              <div className="d-md-flex justify-content-between align-items-center">
                <div>
                  <h2>Pacientes</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item"><a href="#" className="text-inherit">Inicio</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Pacientes</li>
                    </ol>
                  </nav>
                </div>
                <div>
                  <a href="add-product.html" className="btn" style={{ background: "#d6338463", color: "white" }}>Agregar paciente</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-xl-12 col-12 mb-5">
              <div className="card h-100 card-lg">
                <div className="px-6 py-6 " style={{background:"rgba(214, 51, 132, 0.39)"}}>
                  <div className="row justify-content-between">
                    <div className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
                      <form className="d-flex" role="search">
                        <input className="form-control" type="search" placeholder="Buscar paciente" aria-label="Buscar" />
                      </form>
                    </div>
                    <div className="col-lg-2 col-md-4 col-12">
                      <select className="form-select">
                        <option value="">Status</option>
                        <option value="1">Active</option>
                        <option value="2">Deactive</option>
                        <option value="3">Draft</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                      <thead className="bg-light">
                        <tr>
                          <th>
                            <div className="form-check">
                              {/* <input className="form-check-input" type="checkbox" value="" id="checkAll" /> */}
                              <label className="form-check-label" htmlFor="checkAll">

                              </label>
                            </div>
                          </th>
                          <th >Id</th >
                          <th>Foto</th>
                          <th>Nombre</th>
                          <th>Correo</th>
                          <th>Telefono</th>
                          <th>Direccion</th>
                          {/* <th>Create at</th> */}
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          patients.map(p => (
                            <tr key={p.id} className='PatientListRow'>

                              <td>
                                <div className="form-check">
                                  <label className="form-check-label" htmlFor="productOne">
                                  </label>
                                </div>
                              </td>
                              <td>{p.id}</td>
                              <td>
                                <img style={{width:"40px", height:"40px"}} src={img} alt="" />
                              </td>
                              <td>{p.name} {p.lastname}</td>

                              <td>{p.email }</td>
                              <td>{p.phone }</td>
                              <td>{p.location}</td>
                              <td>
                                <div className="dropdown">
                                  <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="feather-icon icon-more-vertical fs-5"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-3"></i>Delete</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square me-3 "></i>Edit</a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>

                          ))
                        }


                      </tbody>
                    </table>

                  </div>
                </div>
                {/* <div className=" border-top d-md-flex justify-content-between align-items-center px-6 py-6">
                  <span>Showing 1 to 8 of 12 entries</span>
                  <nav className="mt-2 mt-md-0">
                    <ul className="pagination mb-0 ">
                      <li className="page-item disabled"><a className="page-link " href="#!">Previous</a></li>
                      <li className="page-item"><a className="page-link active" href="#!">1</a></li>
                      <li className="page-item"><a className="page-link" href="#!">2</a></li>
                      <li className="page-item"><a className="page-link" href="#!">3</a></li>
                      <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                    </ul>
                  </nav>
                </div> */}
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientsList;