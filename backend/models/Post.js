const mongoose = require('mongoose')
const {Schema} = mongoose;

const post = new Schema ({
  title: String,
  content: String,
  author: String
})

Post = mongoose.model("Post", post)
module.exports = Post;