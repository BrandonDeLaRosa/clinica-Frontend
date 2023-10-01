import { React } from "react"
import { useState } from "react";



const PatientDetail = () => {

       
        return (
            <div>
                <h1>Patient Details</h1>
                <>
                    <section className="mt-lg-14 mt-8 ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <TabButtons></TabButtons> */}

                                    {/* Contenido de las pestañas */}
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="product-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="product-tab"
                                            tabIndex="0"
                                        >
                                            <div className="my-8">
                                                <div className="mb-5">
                                                    <h4 className="mb-1">Descripción</h4>
                                                    <p className="mb-0 fs-5">
                                                        Equipo aislado térmicamente que mantiene una temperatura
                                                        de entre 2°C a 8°C. Adecuado para el almacenamiento de
                                                        productos biológicos, vacunas, medicamentos, reactivos y
                                                        más.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div
                                            className="tab-pane fade"
                                            id="details-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="details-tab"
                                            tabIndex="0"
                                        >
                                            <div className="my-8">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h4 className="mb-4">Details</h4>
                                                    </div>
                                                    <div className="col-12 col-lg-6">
                                                        <table className="table table-striped">
                                                            <tbody>
                                                                <tr>
                                                                    <th>Weight</th>
                                                                    <td>1000 Grams</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Ingredient Type</th>
                                                                    <td>Vegetarian</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Brand</th>
                                                                    <td>Dmart</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Item Package Quantity</th>
                                                                    <td>1</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Form</th>
                                                                    <td>Larry the Bird</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Manufacturer</th>
                                                                    <td>Dmart</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Net Quantity</th>
                                                                    <td>340.0 Gram</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Product Dimensions</th>
                                                                    <td>9.6 x 7.49 x 18.49 cm</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div className="col-12 col-lg-6">
                                                        <table className="table table-striped">
                                                            <tbody>
                                                                <tr>
                                                                    <th>ASIN</th>
                                                                    <td>SB0025UJ75W</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Best Sellers Rank</th>
                                                                    <td>#2 in Fruits</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Date First Available</th>
                                                                    <td>30 April 2022</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Item Weight</th>
                                                                    <td>500g</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Generic Name</th>
                                                                    <td>Banana Robusta</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Reviews Tab */}
                                        <div
                                            className="tab-pane fade"
                                            id="reviews-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="reviews-tab"
                                            tabIndex="0"
                                        >
                                            <div className="my-8">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="me-lg-12 mb-6 mb-md-0">
                                                            {/* Resumen de calificaciones */}
                                                            <div className="mb-5">
                                                                <h4 className="mb-3">Reseñas de Clientes</h4>
                                                                <span>
                                                                    <small className="text-warning">
                                                                        {" "}
                                                                        <i className="bi bi-star-fill"></i>
                                                                        <i className="bi bi-star-fill"></i>
                                                                        <i className="bi bi-star-fill"></i>
                                                                        <i className="bi bi-star-fill"></i>
                                                                        <i className="bi bi-star-half"></i>
                                                                    </small>
                                                                    <span className="ms-3">4.1 out of 5</span>
                                                                    <small className="ms-3">
                                                                        11,130 global ratings
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="mb-8">
                                                                <div className="d-flex align-items-center mb-2">
                                                                    <div className="text-nowrap me-3 text-muted">
                                                                        <span className="d-inline-block align-middle text-muted">
                                                                            5
                                                                        </span>
                                                                        <i className="bi bi-star-fill ms-1 small text-warning"></i>
                                                                    </div>
                                                                    <div className="w-100">
                                                                        <div
                                                                            className="progress"
                                                                            style={{ height: "6px" }}
                                                                        >
                                                                            <div
                                                                                className="progress-bar bg-warning"
                                                                                role="progressbar"
                                                                                style={{ width: "60%" }}
                                                                                aria-valuenow="60"
                                                                                aria-valuemin="0"
                                                                                aria-valuemax="100"
                                                                            ></div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="text-muted ms-3">53%</span>
                                                                </div>

                                                                <div className="d-flex align-items-center mb-2">
                                                                    <div className="text-nowrap me-3 text-muted">
                                                                        <span className="d-inline-block align-middle text-muted">
                                                                            4
                                                                        </span>
                                                                        <i className="bi bi-star-fill ms-1 small text-warning"></i>
                                                                    </div>
                                                                    <div className="w-100">
                                                                        <div
                                                                            className="progress"
                                                                            style={{ height: "6px" }}
                                                                        >
                                                                            <div
                                                                                className="progress-bar bg-warning"
                                                                                role="progressbar"
                                                                                style={{ width: "50%" }}
                                                                                aria-valuenow="50"
                                                                                aria-valuemin="0"
                                                                                aria-valuemax="50"
                                                                            ></div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="text-muted ms-3">22%</span>
                                                                </div>

                                                                <div className="d-flex align-items-center mb-2">
                                                                    <div className="text-nowrap me-3 text-muted">
                                                                        <span className="d-inline-block align-middle text-muted">
                                                                            3
                                                                        </span>
                                                                        <i className="bi bi-star-fill ms-1 small text-warning"></i>
                                                                    </div>
                                                                    <div className="w-100">
                                                                        <div
                                                                            className="progress"
                                                                            style={{ height: "6px" }}
                                                                        >
                                                                            <div
                                                                                className="progress-bar bg-warning"
                                                                                role="progressbar"
                                                                                style={{ width: "35%" }}
                                                                                aria-valuenow="35"
                                                                                aria-valuemin="0"
                                                                                aria-valuemax="35"
                                                                            ></div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="text-muted ms-3">14%</span>
                                                                </div>

                                                                <div className="d-flex align-items-center mb-2">
                                                                    <div className="text-nowrap me-3 text-muted">
                                                                        <span className="d-inline-block align-middle text-muted">
                                                                            2
                                                                        </span>
                                                                        <i className="bi bi-star-fill ms-1 small text-warning"></i>
                                                                    </div>
                                                                    <div className="w-100">
                                                                        <div
                                                                            className="progress"
                                                                            style={{ height: "6px" }}
                                                                        >
                                                                            <div
                                                                                className="progress-bar bg-warning"
                                                                                role="progressbar"
                                                                                style={{ width: "22%" }}
                                                                                aria-valuenow="22"
                                                                                aria-valuemin="0"
                                                                                aria-valuemax="22"
                                                                            ></div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="text-muted ms-3">5%</span>
                                                                </div>

                                                                <div className="d-flex align-items-center mb-2">
                                                                    <div className="text-nowrap me-3 text-muted">
                                                                        <span className="d-inline-block align-middle text-muted">
                                                                            1
                                                                        </span>
                                                                        <i className="bi bi-star-fill ms-1 small text-warning"></i>
                                                                    </div>
                                                                    <div className="w-100">
                                                                        <div
                                                                            className="progress"
                                                                            style={{ height: "6px" }}
                                                                        >
                                                                            <div
                                                                                className="progress-bar bg-warning"
                                                                                role="progressbar"
                                                                                style={{ width: "14%" }}
                                                                                aria-valuenow="14"
                                                                                aria-valuemin="0"
                                                                                aria-valuemax="14"
                                                                            ></div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="text-muted ms-3">7%</span>
                                                                </div>
                                                            </div>
                                                            <div className="d-grid">
                                                                <h4>Escribe una reseña sobre este producto</h4>
                                                                <p className="mb-0">
                                                                    Comparte tu opinion con otros clientes
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline-gray-400 mt-4 text-muted"
                                                                >
                                                                    Write the Review
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Reviews Card */}
                                                    <div className="col-md-8">
                                                        <div className="mb-10">
                                                            <div className="d-flex justify-content-between align-items-center mb-8">
                                                                <div>
                                                                    <h4>Reviews</h4>
                                                                </div>

                                                                {/* Boton review */}
                                                                <div>
                                                                    <select className="form-select">
                                                                        <option defaultValue="">Top Review</option>
                                                                        <option defaultValue="1">One</option>
                                                                        <option defaultValue="2">Two</option>
                                                                        <option defaultValue="3">Three</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            {/* Tarjetas de reseñas de los usuarios*/}
                                                            {/* <div>
                                                                <ul className="list-unstyled">
                                                                    {aux.map((index) => (
                                                                        <li key={index.id}>
                                                                            {" "}
                                                                            <ProductReviewCard />{" "}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div> */}

                                                            <div>
                                                                <a
                                                                    className="btn btn-outline-gray-400 text-muted"
                                                                    // onClick={loadMoreReviews}
                                                                >
                                                                    {/* {isReviewsCompleted ? "Ver menos" : "Ver mas"} */}
                                                                </a>
                                                            </div>
                                                        </div>

                                                        {/* Campos de crear una review */}
                                                        <div>
                                                            <h3 className="mb-5">Escribe una reseña </h3>

                                                            <div className="mb-4">
                                                                <h4> ¿Qué te parecio el producto?</h4>
                                                                {/* <StarRatingInput></StarRatingInput> */}
                                                            </div>

                                                            <div className="border-bottom py-4 mb-4">
                                                                <h5>Añade un titulo</h5>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="¿Qué piensas del producto?"
                                                                />
                                                            </div>

                                                            <div className=" py-4 mb-4">
                                                                <h5>¿Qué piensas del producto?</h5>
                                                                <textarea
                                                                    className="form-control"
                                                                    rows="3"
                                                                    placeholder="Da a conocer tu opinion sobre este producto."
                                                                ></textarea>
                                                            </div>

                                                            <div className="d-flex justify-content-end">
                                                                <a href="#" className="btn btn-primary">
                                                                    Enviar Review
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="tab-pane fade"
                                            id="sellerInfo-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="sellerInfo-tab"
                                            tabIndex="0"
                                        >
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </div>
        )
    }

    export default PatientDetail;