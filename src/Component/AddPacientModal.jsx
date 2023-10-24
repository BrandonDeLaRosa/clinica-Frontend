import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddPacientModal = ({ modalShow, setModalShow }) => {
    return (
        <div>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Agregar nuevo paciente
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <main>
                        <section class="my-lg-2 my-1">
                            <div class="container">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-13 ">
                                        <form>
                                            <div class="row g-3">

                                                <div class="col-12 d-flex flex-column gap-2">
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="name" required="" />
                                                    <input type="password" id="fakePassword" placeholder="lastname" class="form-control" required="" />
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="email" required="" />
                                                    <input type="password" id="fakePassword" placeholder="phone" class="form-control" required="" />
                                                    <input type="password" id="fakePassword" placeholder="location" class="form-control" required="" />
                                                    <textarea
                                                    id='textarea'
                                                    placeholder='descripcion'
                                                    rows={5} cols={40}>

                                                    </textarea>
                                                </div>
                                                
                                                <div class="d-flex justify-content-between">
                                                </div>
                                                <div class="col-12 d-grid"> <button type="submit" className="btn" style={{ background: "#d6338463", color: "white" }}>Agregar</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </main>
                </Modal.Body>
            </Modal>
        </div >
    );
};

export default AddPacientModal;