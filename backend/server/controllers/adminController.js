const AdminDb = require("../models/adminModel");
const UserDb = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { findById } = require("../models/adminModel");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "trippholic admin", {
        expiresIn: maxAge
    })
} 


const handleErrors = (err) => {
    let errors = { email: "", password: "" }

    if (err.message === "Incorrect Email"){
        errors.email = "That email is not registered";
    }
    if (err.message.includes("Incorrect password")) {
        errors.password = "That password is incorrect";
    }
    if (err.code === 11000) {
        errors.email = "Email is already registered";
        return errors;
    }

    if (err.message.includes("admindatas validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}


module.exports.adminRegister = async (req, res, next) => { 
    try {
        const { email, password } = req.body;
        const admin = await AdminDb.create({ email, password });
        // console.log('uuuuuuu', admin);
        const token = createToken(admin._id)
        // console.log('ttttttttttt', token);

        res.cookie("adminjwt", token, {
            withCredentials: true,
            httpOnly : false,
            maxAge: maxAge * 1000, 
        })
        res.status(201).json({admin: admin._id, created: true })
    } catch (error) {
        console.log(error);
        const errors = handleErrors(error);
        res.json({ errors, created: false })
    }
};


module.exports.adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const admin = await AdminDb.login( email, password );
        // console.log('uuuuuuu', admin);
        const token = createToken(admin._id)
        // console.log('ttttttttttt', token);

        res.cookie("adminjwt", token, {
            withCredentials: true,
            httpOnly : false,
            maxAge: maxAge * 1000, 
        })
        res.status(201).json({admin: admin._id, created: true })
    } catch (error) {
        console.log(error.message);
        const errors = handleErrors(error);
        res.json({ errors, created: false })
    }
};


module.exports.updateUser = async (req,res,next) => {
    try {
        // console.log('comesssssssssssssss', req.params.id);
        const user = await UserDb.findById(req.params.id);
        res.json({user})
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.deleteUser = async (req,res, next) => {
    try {
        await UserDb.findByIdAndDelete(req.params.id)
        res.json({})
       
    } catch (error) {
        console.log(error);
    }
}

module.exports.updating = async (req,res,next) => {
    try {

        console.log('idsssssssss', req.body, req.params.id);
        const {name, email, phone} = req.body;
        await UserDd.findByIdAndUpdate(req.params.id, {name, email, phone})
        res.json({})
            
    } catch (error) {
        console.log(error);
        
    }
}