const { register, login } = require("../controllers/userControllers");
const { checkUser } = require("../middlewares/userMiddlewares");

const router = require("express").Router();


router.post("/", checkUser);


router.post("/register", register);


router.post("/login", login);




module.exports = router;