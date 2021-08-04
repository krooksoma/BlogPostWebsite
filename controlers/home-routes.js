// makes router available to use for queries to the db and output to front-end
const router = require('express').Router();
// require models from models folder to make queries
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//route to get and render all posts in the homepage
router.get('/', async (req, res) => {
    try{ 
        const displayAll = await Post.findAll({
            include: [User]
        });

        
        const posts = displayAll.map((posts) => posts.get({ plain : true }));
        //checking for output
        
        // console.log("This is Display all" , displayAll);
        // get sent to handlebars
        // name of the view goes as first parameter. file type not required. MUST MATCH VIEW NAME
        res.render(`home`, {
            posts, 
            logged_in: req.session.logged_in
        });

    }catch(error){
        res.status(500).json(error);
    }
})

router.get('/post/:id', async (req, res) => {
    try{
        // console.log("Inside the single post query");
        const getPost = await Post.findByPk(req.params.id ,{
            include: [User]
        });
        // const displayPost = getPost.map((post) => post.get({ plain: true}))
        const displayPost = getPost.get({ plain : true });
        console.log(displayPost);
        // it does not work when I add logged in info
        // I want to add the dashboard option on the nav bar
        res.render('post', displayPost);

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