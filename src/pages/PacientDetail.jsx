import { React } from "react"
import { Tab, Tabs } from "react-bootstrap";
import NutritionPlan from "../Component/NutritionPlan";

const PatientDetail = () => {


    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Detalles del paciente</h1>

            <div className="mt-5" style={{width:"85%"}}>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="Plan de nutricion" title="Plan de nutricion">
                        <NutritionPlan/>
                    </Tab>
                    <Tab eventKey="profile" title="Medidas">
                        Tab content for Profile
                    </Tab>
                    <Tab eventKey="longer-tab" title="Documentos">
                        Tab content for Loooonger Tab
                    </Tab>

                </Tabs>
            </div>
        </div>
    )
}

export default PatientDetail;