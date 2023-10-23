import { Table } from "react-bootstrap";
import { format } from 'date-fns';
import { useState } from "react";
import NutritionPlanModal from "./NutritionPlanModal";

const NutritionPlan = ({ data }) => {
  const [show, setShow] = useState(false);
  const [planSelected , setPlanSelected] = useState(null) 
  // console.log(show);
  console.log(planSelected);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Plan nutricional</th>
          </tr>
        </thead>
        <tbody>
          {
            data.NutritionPlans?.map((p, index) => (
              <tr key={index} style={{ cursor: "pointer" }} onClick={() => {
                setShow(true);
                setPlanSelected(p, index);
              }}>
                <td>{index + 1}</td>
                <td>{format(new Date(p.createdAt), 'dd/MM/yyyy HH:mm:ss')}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <NutritionPlanModal show={show} setShow={setShow} plan={planSelected}/>
    </div>
  );
};

export default NutritionPlan;

