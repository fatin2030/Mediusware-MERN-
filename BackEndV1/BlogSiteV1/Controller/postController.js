const postService = require('../Service/postService');
const Post = require('../Model/postModel');



const createPost = async (req, res) => {
    try {
        // Delegate the creation of the post to the service
        const post = await postService.createPost(req);

        // Send a success response with the created post
        return res.status(201).json({ post });
    } catch (err) {
        console.error(err.message);

        // Send an appropriate error response
        return res.status(500).json({ error: 'Server error' });
    }
};


const updatePost = async (req, res) => {
    const { title, content } = req.body; // Extract title and content from the request body
    const postId = req.params.id; // Extract postId from the URL parameters
    const { userId } = req.user; // Assuming req.user._id contains the logged-in user's ID

    console.log("userId:", userId);
    console.log("postId:", postId);

    try {
        // Check if the logged-in user is the author of the post
        const isAuthor = await postService.checkAuthor(postId, userId);
        if (!isAuthor) {
            return res.status(403).json({ error: 'You are not authorized to update this post' });
        }

        // Update the post
        const updatedPost = await postService.updatePost({ postId, title, content, author: userId });
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json(updatedPost);
    } catch (err) {
        console.error('Error updating post:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};



const getPost = async (req, res) => {

    try {
        const posts = await postService.getPosts();
        res.status(200).json(posts);
    } catch (err) {
        console.error('Error getting posts:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const deletePost = async (req, res) => {

    const postId = req.params.id; 
    const { userId } = req.user;

    try {
        const target = await postService.deletePost(postId, userId);
        res.status(200).json({ message: 'Post deleted successfully' }); 
    }
    catch (err) {
        console.error('Error deleting post:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const searchPost = async (req, res) => {
    const { title } = req.body;
    try {
        const post = await postService.searchPost(title);
        res.status(200).json(post);
    } catch (err) {
        console.error('Error searching post:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};



module.exports = {
    createPost,
    updatePost,
    getPost,
    deletePost,
    searchPost,

};