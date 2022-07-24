const Hotel = require('../models/hotelModel');

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

    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports.getHotels = async (req, res ,next) => {
    
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}

