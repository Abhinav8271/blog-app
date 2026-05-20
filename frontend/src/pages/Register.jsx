import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function sendValue() {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, password, email }),
        headers: { "Content-Type": "application/json" } //It converts the object into a JSON-formatted string (plain text).
      }
      )
      const data = await response.json();
      console.log(data);
      navigate('/login')
    } catch (error) {
      console.log("Error", error)
    }

  }
  return (
    <div>
      <p>Enter name:</p>
      <input type="text" onChange={(e) => { setName(e.target.value) }} />
      <p>Enter email:</p>
      <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
      <p>Enter Password:</p>
      <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
      <button onClick={sendValue}>Submit</button>
    </div>
  )
}

export default Register