const express = require('express');
const { createHotel, registerHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, loginHotel } = require('../controllers/hotelController');
const Hotel = require('../models/hotelModel');
const { createError } = require('../utils/error');

const hotelRouter = require("express").Router();

//CREATE
hotelRouter.post('/', createHotel)


//UPDATE
hotelRouter.put('/:id', updateHotel)


//DELETE
hotelRouter.delete('/:id', deleteHotel)


//GET
hotelRouter.get('/find/:id', getHotel)


//GET ALL
hotelRouter.get('/', getHotels)
hotelRouter.get('/countByCity', countByCity)
hotelRouter.get('/countByType', countByType)

//Routes
hotelRouter.post('/register', registerHotel)

hotelRouter.post('/login', loginHotel)


module.exports = hotelRouter;