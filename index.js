require('dotenv').config()
const express = require('express')

const saleRouter = require('./routes/sale')
const cors = require('cors')


const app = express()

app.use(cors({
  origin: "http://localhost:5000"
}))

app.use(express.json())
app.use('/api/sale', saleRouter)

app.listen(5000, () => console.log(`server started on port 5000`))