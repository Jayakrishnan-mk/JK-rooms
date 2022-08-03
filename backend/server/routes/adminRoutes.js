const { adminRegister, adminLogin, updateUser, deleteUser, updating } = require("../controllers/adminController");
const { checkAdmin } = require("../middlewares/adminMiddlewares");

const adminRouter = require("express").Router();

// adminRouter.post("/register", adminRegister);


adminRouter.post("/login", adminLogin);


adminRouter.post("/delete/user/:id", deleteUser);


adminRouter.get("/update/user/:id", updateUser);


adminRouter.post("/updating/:id", updating);


adminRouter.post("/", checkAdmin);



module.exports = adminRouter;
