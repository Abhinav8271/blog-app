import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function sendValue() {
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: { "Content-type": "application/json" ,
          "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
      });

      const data = await  response.json();
      console.log(data)
      navigate('/');

    }catch(error){
      console.log("Error", error);
    }

  }
  return (
    <div>
      <p>Enter Text :</p>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <p>Enter Content:</p>
      <input type="text" onChange={(e) => setContent(e.target.value)} />
      <button onClick={sendValue}>Submit</button>
    </div>
  )
}

export default CreatePost