const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')
const Post = require('../models/Post')


router.get('/posts', async (req, res) => {
  try {
    const post = await Post.find()
    return res.status(200).json({
      post
    })
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({
      message: "Can't fetch the posts"
    });
  }
})

router.post('/posts',authMiddleware, async(req, res)=> {
  try{
    const {title, content } = req.body;
    const author = req.user.id;
    const post = new Post({
      title,
      content,
      author
    })
    await post.save();
    res.status(201).json({
      post
    })
  }catch(error){
    console.log("Error", error);
    res.status(500).json({
      message:"Error"
    })
  }
})

router.delete('/posts/:id', authMiddleware, async(req, res) => {
  try{
    const post =await Post.findById(req.params.id)
    if(!post){
      res.status(404).json({
        message: "Post not found"
      })
       }
    await Post.findByIdAndDelete(req.params.id)
    return res.status(200).json({
      message:"Post deleted"
    })

   

  }catch(error){
    console.log("Error", error)
    return res.status(404).json({
      message: "Error occured"
    })
  }
})

module.exports = router;