import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'

const Header = () => {
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center p-5'>

                <Link className='linksInd' to="/"><img style={{ height: "44px", width: "131px" }} src={logo} alt="" /></Link>
                <div style={{
                    width: "26%",
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <Link className='linksInd' to="/signUp">Registrarme</Link>
                    <Link className='linksInd' to="/login">Iniciar sesión</Link>
                    <Link className='linksInd' to="/patients">Pacientes</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;