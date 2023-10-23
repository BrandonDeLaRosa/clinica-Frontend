import axios from "axios";
import React, { useEffect, useState } from "react";
import img from "../assets/usuario.png";
import { Link, NavLink } from "react-router-dom";
import { Table } from "react-bootstrap";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/v1/patients")
      .then((res) => setPatients(res.data));
  }, []);

  console.log(patients);

  return (
    <div className="d-flex flex-column p-7 justify-content-center align-items-center">
      <h1>Lista de pacientes.</h1>

      <main className="main-content-wrapper">
        <div className="container">
          <div className="row mb-8">
            <div className="col-md-12">
              <div className="d-md-flex justify-content-between align-items-center">
                <div>
                  <h2>Pacientes</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#" className="text-inherit">
                          Inicio
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Pacientes
                      </li>
                    </ol>
                  </nav>
                </div>
                <div>
                  <a
                    href="add-product.html"
                    className="btn"
                    style={{ background: "#d6338463", color: "white" }}
                  >
                    Agregar paciente
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-xl-12 col-12 mb-5">
              <div className="card h-100 card-lg">
                <div
                  className="px-6 py-6 "
                  style={{ background: "rgba(214, 51, 132, 0.39)" }}
                >
                  <div className="row justify-content-between">
                    <div className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
                      <form className="d-flex" role="search">
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Buscar paciente"
                          aria-label="Buscar"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <Table className="Table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                      <thead className="bg-light">
                        <tr>
                          <th>
                            <div className="form-check">
                              {/* <input className="form-check-input" type="checkbox" value="" id="checkAll" /> */}
                              <label
                                className="form-check-label"
                                htmlFor="checkAll"
                              ></label>
                            </div>
                          </th>
                          <th>Id</th>
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
                        {patients.map((p) => (
                          <tr key={p.id} >
                              <td>
                                <div className="form-check">
                                  <label
                                    htmlFor="productOne"
                                  ></label>
                                </div>
                              </td>
                              <td>{p.id}</td>
                              <td>

                              <i className="fa-regular fa-circle-user fs-3"
                              style={{color:"pink"}}></i>

                                {/* <img
                                  style={{ width: "40px", height: "40px" }}
                                  src={img}
                                  alt=""
                                /> */}

                              </td>
                              
                              <td>
                                <NavLink
                                 to={`/patient-detail/${p.id}`}
                                 style={{textDecoration:"none",
                                        color:"black"
                                 }}
                                 >
                                  <p className="patientName mt-3">
                                    {p.name} {p.lastname}
                                  </p> 
                                  </NavLink>
                              </td>

                              <td>{p.email}</td>
                              <td>{p.phone}</td>
                              <td>{p.location}</td>
                              <td>
                                
                              </td>                         
                            </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientsList;
