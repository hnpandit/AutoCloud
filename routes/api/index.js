// Dependencies
const router = require("express").Router();
const userRouter = require("./user");
const carRouter = require("./car");
const documentRouter = require("./document");

// Routers
router.use("/users", userRouter);
router.use("/cars", carRouter);
router.use("/documents", documentRouter);

//Exporting
module.exports = router;
 