import { Route, Routes } from 'react-router-dom'
import Signup from "./pages/signup/Signup"
 import Login from './pages/login/Login'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/signup' element = {<Signup/>}/>
        <Route path ='/login' element = {<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
