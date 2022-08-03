const express = require('express');
const { createRoom, updateRoom, deleteRoom, getRoom, getRooms } = require('../controllers/roomController');

const router = express.Router();


//CREATE
router.post('/:hotelid', createRoom)


//UPDATE
router.put('/:id', updateRoom)


//DELETE
router.delete('/:id/:hotelid', deleteRoom)


//GET
router.get('/:id', getRoom)


//GET ALL
router.get('/', getRooms)


module.exports = router;