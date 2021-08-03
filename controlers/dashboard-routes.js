const router = require('express').Router();
const{ Post, Comment } = require('express').Router();

router.get('/posts', async (req, res) =>{
    try{
        const getAllPosts = await Post.findAll({
            includes: {
                //comments
            }
        });

        
    }catch(error){
        res.status(500).json(error);
    }
})