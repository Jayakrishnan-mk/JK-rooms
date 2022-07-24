const express = require('express');
const { createHotel, updateHotel, deleteHotel, getHotel, getHotels } = require('../controllers/hotelController');
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
hotelRouter.get('/:id', getHotel)


//GET ALL
hotelRouter.get('/', getHotels)




module.exports = hotelRouter;