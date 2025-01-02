const express = require('express');
const router = express.Router();
const postController = require('../Controller/postController');

const authMiddleware = require('../MiddleWare/authMiddleware');




// router.get('/', (req, res) => {
//     res.send();
//   })
// POST /users - Route to create a new user
router.post('/post/create', authMiddleware,postController.createPost);
//router.get('/post/getAll', postController.getAllPost);
router.patch('/post/update/:id', authMiddleware,postController.updatePost);
router.get('/post/getPost',postController.getPost);
router.delete('/post/delete/:id', authMiddleware,postController.deletePost);
router.get('/post/search', postController.searchPost);


module.exports = router;
