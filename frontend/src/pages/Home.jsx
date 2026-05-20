import { useEffect, useState } from "react"

const Home = () => {

  const [posts, setPosts] = useState([]);

  async function getValue() {
    try {
      const response = await fetch('http://localhost:3000/api/posts', {
        method: "GET"
      })
      const data = await response.json();
      setPosts(data.post);


    } catch (error) {
      console.log("Error", error);
    }
  }

  async function deletePost(id) {
    await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",
      headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}
    })
    console.log(id);
    getValue();
  }



  useEffect(() => {
    getValue()
  }, [])


  return (
    <div>
      {
        posts.map((post) => (
          <div key={post._id}>
            <p>{post.title} {post.content} {post.author.name}</p>
            <button onClick={() => deletePost(post._id)}>Delete</button>
          </div>
        ))
      }

    </div>
  )
}

export default Home