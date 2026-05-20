const express = require('express')
const app = express();
var cors = require('cors')
const connectDB = require('./db.js')

const port = 3000;

connectDB();


app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api', require('./routes/posts'))

app.get('/', (req, res) => {
  res.send("Hello world");
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
