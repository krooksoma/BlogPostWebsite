const router = require('express').Router();
const { Post, Comment, User } = require('../../models')

router.get('/', async (req, res) =>{
    try{
        const getAllPost = await Post.findAll({
            include: [
                {
                    model: Comment
                }
            ]
        })
        res.status(200).json(getAllPost);
    }catch(error){
        res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const getById = await Post.findByPk(req.params.id);

        res.status(200).json(getById);
    }catch(error){
        res.status(500).json(error);
    }
})

router.post('/', async (req,res) => {
    try{
        const post = await Post.Create({
            include: [
                {
                    model: User
                }
            ]
        })
        res.status(201).json(post);
    }catch(error){
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    try{
        const updatePost = await Post.update((req.body), {
            where: {
                id: req.params.id
            }
        })
        res.status(202).json(updatePost);
    }catch(error){
        res.status(500).json(error);
    }
})

router.delete('/:id', async (req, res) =>{
    try{
        const deletePost = await Post.destroy(req.body.id)

        res.status(204).json(deletePost);
    }catch(error){
        res.status(500).json(error);
    }
    
})

module.exports = router;