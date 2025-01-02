const userServices = require('../Service/userService');


// const createUser = async (req, res) => {
//     try {
//         console.log("User Controller request body:", req.body);
//         await userServices.SignUp(req, res); // No need to return anything here, response is sent in SignUp
//     } catch (err) {
//         console.error('Error in createUser:', err.message); // Log the error
//         res.status(500).json({ error: 'Server error' });
//     }
// };
const createUser = async (req, res) => {
    try {
        let profilePic = null;
        if (req.file) {
            profilePic = req.file.filename; // Multer saves the file and adds `file` object to `req`
        }
        const { name, email, password } = req.body;
        console.log("User Controller request body:", req.body);
        const newUser = await userServices.SignUp(name, email, password, profilePic);

        // Send the created user as a response
        res.status(201).json(newUser);


    } catch (err) {
        console.error('Error in createUser:', err.message); // Log the error
        res.status(500).json({ error: 'Server error' });
    }
};


const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userServices.authenticateUser(email, password);
        res.status(200).json(token);
    } catch (err) {
        console.error(err.message);
        res.status(401).json({ error: err.message });
    }
};
const changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const { userId } = req.user;

    try {
        const user = await userServices.changePass(userId, oldPassword, newPassword);
        res.status(200).json(user);
    } catch (err) {
        console.error('Error changing password:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};
const deactiveAccount = async (req, res) => {
    const { userId } = req.user;

    try {
        const user = await userServices.deactiveAccount(userId);
        res.status(200).json(user);
    } catch (err) {
        console.error('Error deleting user:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};
const activeAccount = async (req, res) => {
    // const { userId } = req.user;
    const { email, password } = req.body;


    try {
        const user = await userServices.activeAccount(email, password);
        res.status(200).json(user);
    } catch (err) {
        console.error('Error enabling user:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const editProfileInfo = async (req, res) => {
    try {
        const { name, email } = req.body; // Extract name and email from the request body
        const { userId } = req.user; // Extract userId from authenticated user

        // Handle profile picture upload (if Multer is set up as middleware for file uploads)
        let profilePic = null;
        if (req.file) {
            profilePic = req.file.filename; // Multer saves the file and adds `file` object to `req`
        }

        console.log("REQ USER:", req.user);
        console.log("REQ BODY:", req.body);

        // Call the service to update the user info, passing in the fields
        const updatedUser = await userServices.EditProfileInfo(userId, name, email, profilePic);

        res.status(200).json(updatedUser); // Send back the updated user object as a response
    } catch (err) {
        console.error('Error in editProfileInfo:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};


const getUserInfo = async(req,res) => {
    try{
        const {userId} = req.user;
      res.status(200).json(await userServices.getUser(userId));
    }
    catch(err){
        console.error('Error in getUserInfo:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    createUser,
    signin,
    changePassword,
    deactiveAccount,
    activeAccount,
    editProfileInfo,
    getUserInfo,
};
