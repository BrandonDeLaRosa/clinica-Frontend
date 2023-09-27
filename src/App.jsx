// import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './theme.min.css'
import Header from './Component/Header'
import PatientsList from './Component/PatientsList'
import SingUp from './Component/SignUp'
import Login from './Component/Login'
import Home from './Component/Home'


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
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
