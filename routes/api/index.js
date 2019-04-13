// Dependencies
const router = require("express").Router();
const itemRoutes = require("./items");
const userRoutes = require("./users");

// Item routes
router.use("/items", itemRoutes);
router.use("/users", userRoutes);

//Exporting
module.exports = router;
