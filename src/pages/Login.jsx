import React from 'react';
import img from '../assets/loginImg.avif'

const Login = () => {
    return (
        <div>
            <main>
                <section class="my-lg-14 my-8">
                    <div class="container">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                <img src={img} alt="" class="img-fluid" />
                            </div>
                            <div class="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                                <div class="mb-lg-9 mb-5">
                                    <h1 class="mb-1 h2 fw-bold">Bienvenida doctora</h1>
                                    <p>Bienvenida a NutriApp, ingresa tus datos para iniciar sesión.</p>
                                </div>

                                <form>
                                    <div class="row g-3">

                                        <div class="col-12">
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Correo" required="" />
                                        </div>
                                        <div class="col-12">
                                            <div class="password-field position-relative">
                                                <input type="password" id="fakePassword" placeholder="Contraseña" class="form-control"
                                                    required="" />
                                                <span><i id="passwordToggler" class="bi bi-eye-slash"></i></span>
                                            </div>

                                        </div>
                                        <div class="d-flex justify-content-between">
                                            {/* <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Recuerdame
                                                </label>
                                            </div> */}
                                            <div> ¿Olvidaste tu contraseña? <a href="forgot-password.html">Restaurar contraseña</a></div>
                                        </div>
                                        <div class="col-12 d-grid"> <button type="submit" className="btn" style={{background:"#d6338463", color:"white"}}>Inciar sesión</button>
                                        </div>
                                        <div>¿No tienes cuenta? <a href="signup.html"> Registrate</a></div>
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

export default Login;