import { React, useEffect, useState } from "react"
import { Tab, Tabs } from "react-bootstrap";
import NutritionPlan from "../Component/NutritionPlan";
import { useParams } from "react-router-dom";
import axios from "axios";
import Meassures from "../Component/Meassures";

const PatientDetail = () => {
    const { id } = useParams();
    const [nutritionPlan, setNutritionPlan] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9000/api/v1/patient/${id}`)
            .then((res) => setNutritionPlan(res.data))
    }, [])
    console.log(nutritionPlan);
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Detalles del paciente</h1>

            <div className="mt-5" style={{ width: "85%",background:"pink" }}>
                <Tabs
                    defaultActiveKey="Plan de nutricion"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="Plan de nutricion" title="Plan de nutricion">
                        <NutritionPlan data={nutritionPlan}/>
                    </Tab>
                    {/* <Tab eventKey="profile" title="Medidas">
                        <Meassures data={nutritionPlan}/>
                    </Tab> */}
                    <Tab eventKey="Documentos" title="Documentos">
                    </Tab>

                </Tabs>
            </div>
        </div>
    )
}

export default PatientDetail;