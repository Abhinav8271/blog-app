
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/create" element={<CreatePost/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
