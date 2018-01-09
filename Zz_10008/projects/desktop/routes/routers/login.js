var express = require("express");
var router = express.Router();
var controller = require("./../controllers/UserController")
router.post("/login", controller.get_user);


module.exports = router;