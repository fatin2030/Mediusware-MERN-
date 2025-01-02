const user = require('../Model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const upload = require('../MiddleWare/upload');
const { get } = require('mongoose');


const JWT_SECRET = require('../MiddleWare/JWT_Secrets').JWT_SECRET;

// const SignUp = async (req, res) => {

//     const { name, email, password } = req.body;
//     console.log("name:", name);

//     console.log("name:", email);


//     try {
//         // Use the `upload` middleware to handle profile picture upload
//         upload(req, res, async (err) => {
//             if (err) {
//                 // If there was an error during the file upload, return a 400 error response
//                 console.error('File upload error:', err.message); // Log the error
//                 return res.status(400).json({ error: err.message });
//             }

//             const { name, email, password } = req.body;
//             console.log("name:", name);
//             const checkUser = await user.findOne({ email: req.body.email });
//             console.log("checkUser:", checkUser);
//             if (checkUser) {
//                 return res.status(400).json({ error: 'User already exists' });
//             }
//             const profilePic = req.file ? req.file.filename : null; // Check if a profile picture was uploaded



//             try {
//                 // Hash the password
//                 const salt = await bcrypt.genSalt(10);
//                 const hashedPassword = await bcrypt.hash(password, salt);

//                 // Create a new user, with or without the profile picture
//                 const newUser = new user({
//                     name,
//                     email,
//                     password: hashedPassword,
//                     profilePic, // This will be null if no file was uploaded
//                     joiningDate: Date.now(),
//                 });

//                 // Save the new user to the database
//                 await newUser.save();

//                 // Return the created user in the response
//                 return res.status(201).json(newUser);
//             } catch (err) {
//                 console.error('Error saving user:', err.message); // Log any errors during user creation
//                 return res.status(500).json({ error: 'Server error while saving user' });
//             }
//         });
//     } catch (err) {
//         // This will catch any unexpected errors
//         console.error('Unexpected error:', err.message);
//         return res.status(500).json({ error: 'Server error' });
//     }
// };
// 

const SignUp = async (name, email, password,profilePic) => {

   

    const checkUser = await user.findOne({ email: email });
    console.log("checkUser:", checkUser);
    if (checkUser) {
        return { message: 'User already exists' };
    }

    try {
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user, with or without the profile picture
        const newUser = new user({
            name,
            email,
            password: hashedPassword,
            profilePic, // This will be null if no file was uploaded
            joiningDate: Date.now(),
        });

        // Save the new user to the database
        await newUser.save();

        // Return the created user in the response
        return newUser;
    } catch (err) {
        console.error('Error saving user:', err.message); // Log any errors during user creation
        return res.status(500).json({ error: 'Server error while saving user' });
    }




};



const authenticateUser = async (email, password) => {
    const User = await user.findOne({ email });
    if (!User) throw new Error('Invalid credentials');
    // console.log("User:", User);
    // console.log("User.deleted:", User.deleted);
    // console.log("User.status:", User.status);
    if (User.status == false) {
        return { message: 'User Account Deactivated' };
    }
    if (User.deleted == true) {
        return { message: 'User Account Deleted' };
    }


    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) throw new Error('Invalid credentials');
    // console.log("JWT_SECRET:", JWT_SECRET);
    // console.log("User._id:", User._id);
    const token = jwt.sign({ userId: User._id }, JWT_SECRET, { expiresIn: '1h' });
    return { token };

};

//change password. user will give the old password and new password , it will check if the old password is correct and then change the password
const changePass = async (userId, oldPassword, newPassword) => {
    console.log("userId:", userId);
    const User = await user.findOne({ _id: userId });
    console.log("User:", User);
    console.log("oldPassword:", oldPassword);
    console.log("newPassword:", newPassword);
    if (!User) throw new Error('Invalid credentials User Not Found');

    const isMatch = await bcrypt.compare(oldPassword, User.password);
    if (!isMatch) throw new Error('Password Not matched');

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(newPassword, salt);
    // User.password = hashedPassword;
    const salt = await bcrypt.genSalt(10);
    User.password = await bcrypt.hash(newPassword, salt);
    await User.save();
    return User;
};

const deactiveAccount = async (userId) => {
    console.log("userId: service", userId);
    const User = await user.findOne({ _id: userId });
    if (!User) throw new Error('Invalid credentials');
    User.status = false;
    await User.save();
    return { message: 'User Account Deactivated successfully' };
}
const activeAccount = async (email, password) => {
    //console.log("userId: service",userId);
    const User = await user.findOne({ email });
    if (!User) return { message: 'Not a valid user' };
    if (User.deleted == true) {
        return { message: 'User Account Deleted' };
    }


    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) return { message: 'Invalid credentials' };
    console.log("JWT_SECRET:", JWT_SECRET);
    //  console.log("User._id:",User._id);
    //  const token = jwt.sign({ userId: User._id }, JWT_SECRET, { expiresIn: '1h' });
    User.status = true;
    await User.save();
    return { message: 'User Account Activated successfully' };
}
const EditProfileInfo = async (userId, name, email, profilePic) => {
    // Ensure that the getUser function is awaited, as it likely involves a database call
    const User = await getUser(userId); // Assuming getUser fetches the user from the database

    if (!User) throw new Error('User not found');

    console.log("User service:", User);

    // Update the user's profile information only if the parameters are provided
    if (email) {
        User.email = email;
    }
    if (name) {
        User.name = name;
    }
    if (profilePic) {
        User.profilePic = profilePic; // Profile pic passed from the controller
    }

    // Save the updated user information to the database
    await User.save();

    // Return the updated user object
    return User;
};



const getUser = async (userId) => {
    const User = await user.findOne({ _id: userId });
    if (!User) throw new Error('Invalid credentials');
    return User;
};



module.exports = {
    SignUp,
    authenticateUser,
    changePass,
    deactiveAccount,
    activeAccount,
    EditProfileInfo,
    getUser,
};
