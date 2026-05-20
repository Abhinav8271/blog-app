const mongoose = require('mongoose')
const {Schema} = mongoose;

const post = new Schema ({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

Post = mongoose.model("Post", post)
module.exports = Post;