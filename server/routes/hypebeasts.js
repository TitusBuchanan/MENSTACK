const express = require('express');
const router = express.Router()
const Hypebeast = require('../models/hypebeast')



//Getting All
router.get('/', async (req,res) => {
    try {
        const hype = await Hypebeast.find()
        res.json(hype)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

//Getting One
router.get('/:id', getHypebeasts,(req, res) =>{
    res.json(res.hypebeast);
})



//Creating One
router.post('/', async (req,res) => {
   const sneakerhead = new Hypebeast({
       name: req.body.name,
       garment:req.body.garment,
       designer:req.body.designer
   })

   try{
    const newSneakerhead = await sneakerhead.save()
    res.status(201).json(newSneakerhead);
   } catch(err){
    res.status(400).json({message:err.message});
   }
})

//Updating one
router.patch('/:id',getHypebeasts, async (req,res) => {
    if(req.body.name != null){
        res.hypebeast.name = req.body.name
    }
    if(req.body.garment != null){
        res.hypebeast.garment = req.body.garment
    }
    if(req.body.designer != null){
        res.hypebeast.designer = req.body.designer
    }
    try {
        const updatedHypebeast = await res.hypebeast.save()
        res.json(updatedHypebeast)

    } catch(err){
        res.status(400).json({message: err.message})
    }
})

// Deleting one 
    router.delete('/:id', getHypebeasts, async(req,res) => {
        try{
            await res.hypebeast.remove()
            res.json({ message:'Deleted Hype'})
        } catch(err){
            res.status(500).json({message: err.message})
        }
    })

    async function getHypebeasts(req,res,next){
        let hypebeast
        try{
            hypebeast = await Hypebeast.findById(req.params.id);
            if(hypebeast == null){
                return res.status(404).json({message: 'cannot find hype'})
            }
        } catch (err){
            return res.status(500).json({ message:err.message })
        }
        res.hypebeast = hypebeast
        next()

    }




module.exports = router