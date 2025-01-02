
const userModel = require('../Model/userModel');
const postModel = require('../Model/postModel');


const createPost = async (req) => {
    try {
        const { userId } = req.user;

        if (!userId) {
            throw new Error('User ID not found in token');
        }

        const post = new postModel({
            ...req.body,
            author: userId
        });

        console.log(post);

        await post.save(); // Save the post to the database

        return post; // Return the created post object
    } catch (err) {
        console.error('Error creating post:', err);
        throw new Error('Server error'); // Throw an error to be handled by the controller
    }
};
const getPosts = async () => {
    try {

        const posts = await postModel.find();
        return posts;
    } catch (err) {
        console.error('Error getting posts:', err);
        throw new Error('Server error');
    }
};

const updatePost = async ({ postId, title, content, author }) => {
    try {
        // Find the post by its ID and update its fields
        const updatedPost = await postModel.findByIdAndUpdate(
            postId, 
            { title, content, author, updatedAt: Date.now() }, 
            { new: true } 
        );

        if (!updatedPost) {
            throw new Error('Post not found');
        }

        return updatedPost;
    } catch (err) {
        console.error('Error updating post:', err);
        throw new Error('Server error');
    }
};

const checkAuthor = async (postId, userId) => {
    try {
        // Find the post by its ID
        const post = await postModel.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }

        // console.log("postId",postId);
        // console.log("userId",userId);
        // console.log("post.author",post);

        // Check if the logged-in user is the author of the post
        if (post.author.toString() !== userId.toString()) {
            return false; // User is not the author
        }

        return true; // User is the author
    } catch (err) {
        console.error('Error checking author:', err);
        throw new Error('Server error');
    }
};

const deletePost = async (postId, userId) => {
    try {
        // Check if the logged-in user is the author of the post
        const isAuthor = await checkAuthor(postId, userId);
        if (!isAuthor) {
            throw new Error('You are not authorized to delete this post');
        }

        // Find the post by its ID and delete it
        const deletedPost = await postModel.findByIdAndDelete(postId);
        if (!deletedPost) {
            throw new Error('Post not found');
        }

        return deletedPost;
    } catch (err) {
        console.error('Error deleting post:', err);
        throw new Error('Server error');
    }
};

const searchPost = async (search) => {
    try {
        // find where titile is like search
        const posts = await postModel.find({title: new RegExp(search, 'i')});
       // const posts = await postModel.find({search});
        return posts;
    }
    catch (err) {
        console.error('Error searching post:', err);
        throw new Error('Server error');
    }
};




module.exports = {
    createPost,
    getPosts,
    updatePost,
    checkAuthor,
    deletePost,
    searchPost,
};