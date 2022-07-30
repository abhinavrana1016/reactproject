const express = require('express')
const app = express()
require('dotenv').config()
const api = require('./routes/routes');
const cors = require('cors')
const bodyParser = require('body-parser');


const connectDb = require('./config/db')
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server start at port ${port}`)
})
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// TODO: Cofigure CORS, only accept the same origin
app.use(cors());
app.use('/api/', api);
app.get('*', (req, res) => {
    res.status(404).json({
      msg: 'Sorry, This route is not found on this server',
    });
  });
  