// import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './theme.min.css'
import PatientsList from './pages/PatientsList'
import SingUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import PatientDetail from './pages/PacientDetail'
import Header from './Component/Header'


function App() {

  return (
    <HashRouter>
      <div className="App">
          <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signUp' element={<SingUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/patients' element={<PatientsList/>}/>
          <Route path='/patient-detail/:id' element={<PatientDetail/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
