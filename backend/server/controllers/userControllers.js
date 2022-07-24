const UserDb = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { userRegister, userExist } = require("./../services/userService");
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "travelholic influencer", {
        expiresIn: maxAge
    })
}

module.exports.register = async (req, res, next) => {
    try {
        // const salt = bcrypt.genSalt(saltRounds, function (err, salt) {
        //     bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
        //     });
        // });
        // console.log('backend reached');
        const { name, email, password, phone } = req.body;
        const isUserExist = await userExist(email);
        if (isUserExist) {
            // console.log('user already');
            res.status(409).json({
                message: "User already exists",
                created: false
            });
        }
        else {
            // console.log('reached here');
            const user = await userRegister(name, email, password, phone);
            const token = createToken(user._id)

            res.cookie("jwt", token, {
                withCredentials: true,
                httpOnly: false,
                maxAge: maxAge * 1000,
            })
            res.status(201).json({ user: user._id, created: true })
        }
    } catch (error) {
        console.log(error);
        // const errors = handleErrors(error);
        res.json({ error, created: false })
    }

};

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserDb.login(email, password);
        const token = createToken(user._id)

        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge * 1000,
        })
        res.status(200).json({ user: user._id, created: true })
    } catch (error) {
        res.json({ error: "Invalid User id and Password", created: false })
    }
};