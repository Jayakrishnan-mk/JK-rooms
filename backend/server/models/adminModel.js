const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    }
});

// adminSchema.pre("save", async function (next) {
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password, salt) 
//     next();
    
// })

adminSchema.statics.login = async function (email, password) {
    const admin = await this.findOne({ email, password });
    if (admin) {
        // console.log('assssdd', admin);
        // const auth = await bcrypt.compare(password, admin.password);
        // if (auth) {
            return admin;
        // }
        // throw Error(" Incorrect password");
    } throw Error("Incorrect Credentials")  
}


module.exports = mongoose.model("AdminData", adminSchema);
