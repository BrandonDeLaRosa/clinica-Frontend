import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const NutritionPlan = () => {
    const {id} = useParams;
    const [nutritionPlan, setNutritionPlan] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9000/api/v1/patient/1`)
        // axios.get(`http://localhost:9000/api/v1/patient-detail/1`)
        .then((res) => setNutritionPlan(res.data))
    },[])
    console.log(nutritionPlan);

    return (
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </div>
    );
};

export default NutritionPlan;