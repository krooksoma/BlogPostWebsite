const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) =>{
    console.log("INSIDE QUERY TO FIND POST BY pk");
    try{
        const findPost = await Post.findByPk((req.params.id), {
            // include: [
            //     {
            //         model: Comment,
            //         attributes:['body']
            //     }
            // ]
        })
        res.render('post', {
            findPost,
            logged_in: req.session.logged_in            
        });
    }catch(error){
        res.status(500).json(error);
    }
})


// option to create a new post
router.post('/', withAuth, async (req, res) =>{
    console.log(req.body);
    try{
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        })

        res.status(200).json(newPost);
    }catch(error){
        res.status(500).json(error)
    }
});

// need to finish implementing update option for post
router.put('/', withAuth, async (req, res) =>{
    // try{
    //     const updatePost = await Post.
    // }catch(error){
    //     res.status(500).json(error);
    // }
})

// option to delete a post by its id
router.delete('/:id', withAuth, async (req, res) =>{
    try{
        const postData = await Post.destroy({
            where: {
                id: req.params.id, 
                user_id: req.session.user_id,
            }
        });

        if(!postData) {
            res.status(404).json({message: `No post found with this id!!`})
            return;
        }

    }catch(error){
        res.status(500).json(error);
    }
})
module.exports = router;