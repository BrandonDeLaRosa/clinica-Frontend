import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import 'animate.css';

const NutritionPlanModal = ({ show, setShow, plan }) => {
    // console.log(plan?.Messures[0]);
    console.log(plan.Messures.map(item => item));
    return (
        <div>
            <Modal show={show} size='xl'  onHide={() => setShow(false)} className='animate__animated animate__backInDown'>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del plan nutricional.</Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                {/* <th>Id</th> */}
                                <th>Altura <small>(metros)</small></th>
                                <th>Peso <small>(Kilogramos)</small></th>
                                <th>Objetivgos semanales</th>
                                <th>Comentarios</th>
                                <th>Siguiente cita</th>
                                {/* <th>Medidas</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{plan?.id}</td>
                                <td>{plan?.height}</td>
                                <td>{plan?.weight}</td>
                                <td>{plan?.weeklyObjectives} 
                                Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Dignissimos temporibus 
                                cupiditate odio placeat veritatis quis iusto blanditiis recusandae, ex itaque eos ul
                                lam obcaecati quibusdam in eligendi, nesciunt molestiae enim amet.</td>
                                <td>{plan?.comments} 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                                 cum nam non in qui nobis recusandae autem accusantium maxime
                                 . Aspernatur tempore eligendi, cupiditate accusamus doloremque fugit 
                                 quidem maiores porro magni. Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Sint impedit perspiciatis, iure repellat quo ea 
                                  rerum, tempora illum hic tempore ipsum repudiandae fugiat nostrum i
                                  n voluptatibus voluptas obcaecati pariatur! Exercitationem obcaecati p
                                  ossimus porro recusandae voluptatem enim repellat autem ea consequuntur
                                   officiis error, eos harum neque nihil atque totam quisquam fugit digni
                                   ssimos nostrum facere dolore quasi? Repellat, earum aut, tenetur quisq
                                   uam aspernatur quaerat, asperiores quam voluptate quidem modi perferen
                                   dis! Consequuntur suscipit facilis, alias obcaecati ratione corrupti m
                                   axime a, ipsam enim ullam corporis? Ullam et delectus provident autem 
                                   assumenda reprehenderit eveniet inventore excepturi quaerat, laudantiu
                                   m dolorum necessitatibus minima voluptatum facere enim natus!</td>

                                <td>{plan?.nextAppointment}</td>
                            </tr>
                          
                        </tbody>
                    </Table>
                    {/* <Button onClick={}>Medidas</Button> */}
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default NutritionPlanModal;