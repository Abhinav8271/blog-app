const express = require('express')
const router = express.Router();
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


router.post('/register', async(req, res) => {
  try{
  const {name, email, password} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User ({
    name,
    email,
    password: hashedPassword
  }
)
await newUser.save();

return res.status(201).json({
  message: "Account registered",
})
}catch(error){
  console.log("Error");
  return res.status(500).json({
    message: "Internal Message Error"

  })
}

})


router.post('/login', async(req, res) => {
  try{
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if (!user){
    return  res.status(404).json({
      message: "User not found"
    })
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch){
    return res.status(401).json({
      message:"Invalid credentials"
    })
  }
  const token = jwt.sign({
    id: user._id,
  }, process.env.JWT_SECRET,
  {expiresIn: '1d'}
)

return res.status(201).json({
  message: "Sucessfully logged in",
  token
})
}catch(error){
  console.log("Error");
  return res.status(500).json({
    message: "Internal Message Error"

  })
}

})

module.exports = router;