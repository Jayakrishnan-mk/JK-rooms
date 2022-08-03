const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is Required"]
    }
});

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt) 
    next();
    
    
})

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error(" Incorrect password");
    } throw Error("Incorrect Email")
}


module.exports = mongoose.model("Users", userSchema);
