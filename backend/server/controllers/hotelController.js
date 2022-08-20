const Hotel = require('../models/hotelModel');
const { hotelExist, hotelRegister } = require("./../services/hotelService");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "travelholic buddy", {
        expiresIn: maxAge
    })
}

module.exports.createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}


module.exports.updateHotel = async (req, res) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports.deleteHotel = async (req, res) => {

    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted.")
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports.getHotel = async (req, res) => {
    console.log('comingggggggg');
    try {
        const hotel = await Hotel.findById(req.params.id)
        console.log('id hotel goite', hotel);
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports.getHotels = async (req, res, next) => {
    try {
        const { min, max, city } = req.query;

        console.log('dmind', min, max, city);
        const hotels = await Hotel.find({
            city
        });
        // const hotels = await Hotel.find({
        //     ...others,
        //     cheapestPrice: { $gt: min || 1, $lt: max || 999 }
        // }).limit(req.query.limit);
        console.log('hhhhhhhh', hotels);
        res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}


// module.exports.getHotels = async (req, res, next) => {
//     const { min, max, ...others } = req.query;
//     // console.log('dsssssssssssssssssssssssssmind', min, max, others);
//     try {
       
//         const hotels = await Hotel.find({
//             ...others,
//             cheapestPrice: { $gt: min || 1, $lt: max || 999 }
//         }).limit(req.query.limit);
//         console.log('hhhhhhhh', hotels);
//         res.status(200).json(hotels)
//     } catch (error) {
//         next(error)
//     }
// }


module.exports.countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city })
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}

module.exports.countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: 'Hotel' })
        const resortCount = await Hotel.countDocuments({ type: 'Resort' })
        const villaCount = await Hotel.countDocuments({ type: 'Villa' })

        res.status(200).json([
            { type: 'hotels', count: hotelCount },
            { type: 'resorts', count: resortCount },
            { type: 'villas', count: villaCount },
        ])
    } catch (error) {
        next(error)
    }
}

module.exports.registerHotel = async (req, res, next) => {
    try {

        // console.log('backend reached', req.body);
        const { name, email, phone,  password, address, city, state } = req.body;
        const isHotelExist = await hotelExist(email, phone);
        if (isHotelExist) {
            // console.log('user already');
            res.status(409).json({
                message: "Hotel already exists",
                created: false
            });
        }
        else {
            // console.log('rrrrrrrrrrrrrr');
            const hotel = await hotelRegister(name, email,  phone, password, address, city, state);
            // console.log('reached here', hotel);

            const hotoken = createToken(hotel._id)
            console.log('hotoken', hotoken);

            // res.cookie("jwt", hotoken, {
            //     withCredentials: true,
            //     httpOnly: false,
            //     maxAge: maxAge * 1000,
            // })
            res.status(201).json({ hotel, created: true , hotoken})
        }
    } catch (error) {
        console.log(error);
        // const errors = handleErrors(error);
        res.json({ error, created: false })
    }
}

module.exports.loginHotel = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const hotel = await Hotel.login(email, password);
        const vendorToken = createToken(hotel._id)
        // console.log('hotel////////////////////////////////////////////', hotel);

        res.status(200).json({ hotel: hotel._id, created: true , vendorToken })
    } catch (error) {
        res.json({ error: "Invalid Hotel id and Password", created: false })
    }
};




module.exports.hotelRegister = async (name, email, password, phone) => {
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