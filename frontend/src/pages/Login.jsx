import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] =  useState("");
  async function sendValue() {
    try{
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: { "Content-Type": "application/json" }//metadata about request
    })

    const data = await response.json();
    console.log(data);
    localStorage.setItem('token', data.token)
    navigate('/');
    }catch(error){
      console.log("Error", error);
    }
  }
  return (
    <div>
      <p>Enter Email: </p>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <p>Enter Password: </p>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={sendValue}>Submit</button>
    </div>
  )
}

export default Login