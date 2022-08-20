const HotelDB = require('./../models/hotelModel');



module.exports.hotelExist = async (email) => {
    try {
        const hotel = await HotelDB.findOne({ email, phone });

        if (hotel) {
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

module.exports.hotelRegister = async (name, email, phone, password,  address, city, state) => {
    try {
        const hotel = new HotelDB({ name, email,  phone, password,  address, city, state })
        await hotel.save();
        
        // console.log('hotelService reached', savedHotel);
        
        return hotel;

    } catch (error) {
        console.log(error);
        // const errors = handleErrors(error);
    }
}