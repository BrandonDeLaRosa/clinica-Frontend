import { Table } from "react-bootstrap";

const Meassures = ({data}) => {
    const medidas = data
    console.log(medidas);
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
          
        </tbody>
      </Table>
        </div>
    )
}

export default Meassures;