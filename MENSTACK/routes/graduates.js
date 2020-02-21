const express = require("express")
const router = express.Router()
const Graduate = require("../models/graduate")

//Get All Graduates
router.get("/",async(req,res) => {
    try{
        const graduates = await Graduate.find()
        res.json(graduates);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


//creat new graduate

router.post("/",async (req,res) => {
    const {firstName,lastName,email} = req.body;

    const graduate = new Graduate({
        firstName,
        lastName,
        email
    })
    try{
        const newGraduate = await graduate.save();
        res.status(201).json(newGraduate);
    } catch(err) {
        res.status(400).json({ message:err.message })

    }
})


module.exports = router;