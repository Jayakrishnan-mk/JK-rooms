const UserDb = require('./../models/userModel');

module.exports.userRegister = async (name, email, password, phone) => {
    try {
        // const user = await UserDb.create({ name, email, password, phone });
        const user = new UserDb({ name, email, password, phone })
        const savedUser = await user.save();
        
        console.log('userService reached', savedUser);
        
        return user;
    } catch (error) {
        console.log(error);
        // const errors = handleErrors(error);
    }
}

module.exports.userExist = async (email) => {
    try {
        const user = await UserDb.findOne({ email });
        if (user) {
            return true;

        }
        else {
            return false;

        }
    } catch (error) {
        console.log(error);
        // const errors = handleErrors(error);
    }
}