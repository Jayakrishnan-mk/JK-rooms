const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
dotenv.config()

const connectDB = require('./server/database/connection');
const cookieParser = require('cookie-parser');
const port = process.env.PORT;

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

//log requests....................
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser())

//mongodb connection...............
connectDB();

//parse json bodies...............
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middlewares......................
app.use(express.json());

//routes..........................
app.use('/api/admin' , require('./server/routes/adminRoutes'));
app.use('/api/hotels', require('./server/routes/hotelRoutes'));
app.use('/api' , require('./server/routes/userRoutes'));


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(port, () => {
    console.log('Connected to backend => ' + port);
});

