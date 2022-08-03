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


module.exports.getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({...others, cheapestPrice : {$gt: min || 1, $lt: max || 999}}).limit(req.query.limit)
        res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}

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

