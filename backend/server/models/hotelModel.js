const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // type: {
    //     type: String,
    //     required: true
    // },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    // distance: {
    //     type: String,
    //     required: true
    // },
    // photos: {
    //     type: [String],
    // },
    // title: {
    //     type: String,
    //     required: true
    // },
    // desc: {
    //     type: String,
    //     required: true
    // },
    // rating: {
    //     type: Number,
    //     min: 0,
    //     max: 5,
    // },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    // featured: {
    //     type: Boolean,
    //     default: false
    // },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});


HotelSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();


})


HotelSchema.statics.login = async function (email, password) {
    const hotel = await this.findOne({ email });
    if (hotel) {
        const auth = await bcrypt.compare(password, hotel.password);
        if (auth) {

            return hotel;
        } else {

            throw Error(" Incorrect Email and password");
        }
    
    } throw Error("Incorrect Email and password")
}


module.exports = mongoose.model("Hotel", HotelSchema);


