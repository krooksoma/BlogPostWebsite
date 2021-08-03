const router = require('express').Router();
const { is } = require('sequelize/types/lib/operators');
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) =>{
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

router.update('/', withAuth, async (req, res) =>{
    try{
        const updatePost = await Post.
    }catch(error){
        res.status(500).json(error);
    }
})

router.delete('/:id', withAuth, async (req, res) =>{
    try{
        const postData = await Post.destroy({
            where: {
                id: req.params.id, 
                user_id: req.session.user_id,
            }
        });

        is(!postData) {
            res.status(404).json({message: `No post found with this id!!`})
            return;
        }

    }catch(error){
        res.status(500).json(error);
    }
})
module.exports = router;