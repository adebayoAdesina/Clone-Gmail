const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./Routes/User')
const authRoute = require('./Routes/auth')

dotenv.config();

const port = process.env.PORT

mongoose.connect(
    process.env.MONGO_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    ()=> {
    console.log("connected to mongo")
});


//middleware
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)


app.listen(port, () => console.log(`Backend server is running on port ${port}!`))