// makes router available to use for queries to the db and output to front-end
const router = require('express').Router();
// require models from models folder to make queries
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

//route to get and render all posts in the homepage
router.get('/', async (req, res) => {
    try{ 
        const displayAll = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });

        const posts = displayAll.map((posts) => posts.get({ plain : true }));
        //checking for output
        res.status(200).json(displayAll);

        res.render(`homepage`, {
            posts, 
            logged_in: req.session.logged_in
        });

    }catch(error){
        res.status(500).json(error);
    }
})

//route to enable user to click and access a specific post
router.get('/post/:id', async (req, res) => {
    try{
        const getById = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User, 
                    attributes: ['name']
                }
            ]
        });

        const postDetail = projectData.get({ plain: true });

        res.status(200).json(postDetail)

        res.render('post', {
            ...postDetail,
            logged_in: req.session.logged_in
        })

    }catch(error){
        res.status(500).json(error)
    }
})

//
router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{ model: Project }],
        });
        
        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user, 
            logged_in: true
        });

    }catch(error){
        res.status(500).json(error)
    }
})



// enables the login option and refresh the page
router.get('/login', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
})



module.exports = router;