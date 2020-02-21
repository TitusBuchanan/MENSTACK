require("dotenv").config();
const express = require("express");
const app = express()
const mongoose = require("mongoose")

const port = 3000

 mongoose.connect(process.env.DATABASE_TEEZUS,{ useUnifiedTopology: true, useNewUrlParser: true  })
    .then(() => console.log("Teezus is connected to MongoDB"))
    .catch((err) => console.log("You have made an error"));
    
 app.use("/", express.static("public"))
 
 app.use(express.json());

 const graduatesRouter = require("./routes/graduates");
 app.use('/api/graduates',graduatesRouter);



app.listen(port, () => console.log (`Teezus on ${port}`) )
