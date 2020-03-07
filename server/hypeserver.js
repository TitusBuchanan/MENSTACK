require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const app = express()
const cors = require('cors')


mongoose.connect(process.env.hype, { useNewUrlParser: true ,useUnifiedTopology: true})
    .then(() =>console.log("Teezus is connected to MongoDB"))
    .catch((err) => console.log('You habe made an error'));
   

app.use(express.json())
app.use(express.static(`../public`));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const hypebeastRouter = require('./routes/hypebeasts')
app.use('/streetwear',hypebeastRouter)

app.listen(3000, () => console.log('Titus is on the hypebeast server'));