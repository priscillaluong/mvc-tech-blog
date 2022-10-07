const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          {
            model: Comment,
          },
        ],
      });
      
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      const post = postData.get({ plain: true });
      console.log(post);
      res.render('comment', {
        post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


/* COMMENTS ROUTES */

router.post('/:id', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
        post_id: req.params.id,
      });
      console.log("--------------------------------");
      console.log(newComment);
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const commentData = await Comment.findAll({
        where: { post_id: req.params.id } 
      });
      console.log(commentData);
      // Serialize data so the template can read it
      const comments = commentData.map((comment) => comment.get({ plain: true }));
      console.log(comments);
      // Pass serialized data and session flag into template
      res.render('comment', { 
        comments, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
