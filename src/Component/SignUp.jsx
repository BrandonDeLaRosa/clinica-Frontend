import React from 'react';
import img from '../assets/formImg.avif'

const SingUp = () => {
    return (
        <div >
            <main>

                <section class="my-lg-14 my-8">
                    <div class="container">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                <img src={img} alt="" class="img-fluid" />
                            </div>
                            <div class="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                                <div class="mb-lg-9 mb-5">
                                    <h1 class="mb-1 h2 fw-bold">¡Bienvenida doctora!</h1>
                                    <p>Llene los campos correspondientes.</p>
                                </div>
                                <form>
                                    <div class="row g-3">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Nombre" aria-label="First name" required="" />
                                        </div>
                                        <div class="col"><input type="text" class="form-control" placeholder="Apellido" aria-label="Last name" required="" />
                                        </div>
                                        <div class="col-12">
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Correo" required="" />
                                        </div>
                                        <div class="col-12">

                                            <div class="password-field position-relative">
                                                <input type="password" id="fakePassword" placeholder="Contraseña" class="form-control" required="" />
                                                <span><i id="passwordToggler" class="bi bi-eye-slash"></i></span>
                                            </div>
                                        </div>
                                        <div class="col-12 d-grid"> <button type="Enviar" class="btn" style={{background:"#d6338463", color:"white"}}>Register</button>
                                        </div>
                                        <p><small>Al continuar esta aceptando los terminos de servicio.<a href="#!"> Terminos de servicio</a> & <a href="#!">Politica de privacidad.</a></small></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>
            </main>

        </div>
    );
};

export default SingUp;