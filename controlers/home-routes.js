// makes router available to use for queries to the db and output to front-end
const router = require('express').Router();
// require models from models folder to make queries
const { Post } = require('../models');

// First trying to make it work on the back end to later implement the front end
router.get('/', async (req, res) => {
    try{ 
        const displayAll = await Post.findAll();
// later change it to res.render()
        res.status(200).json(displayAll);

    }catch(error){
        res.status(500).json(error);
    }
}
)

// get the selected post to display
router.get('/:id', async (req, res) =>{
    try{
        const request = await Post.findByPk(req.params.id)
        // later change to res.render()
        // add timestamp to it on the views
        res.status(200).json(request);

    }catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;