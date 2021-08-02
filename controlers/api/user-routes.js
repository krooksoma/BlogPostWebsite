const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try{
        const getAllUsers = await User.findAll()

        res.status(200).json(getAllUsers);
   }catch(error){
       res.status(500).json(error);
   }
});

