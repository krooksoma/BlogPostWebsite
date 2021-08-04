const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {    
    try {
        const userData = await Post.findAll({            
            where: {                
                user_id: req.session.user_id
            },include:[User]
        });
        console.log("Here is the Dashboard Data", userData);

        const posts = userData.map((posts) => posts.get({ plain : true }));
        
        res.render(`dashboard`, {
            posts, 
            logged_in: req.session.logged_in
        });

    }catch(error){
        res.status(500).json(error)
    }
})


module.exports = router;