var express = require("express");
var router = express.Router();
var controller = require("../../controllers/MailingController")
router.post("/updatedetails" , controller.update_mailing_details);
router.get("/findbyuserid/:id" , controller.findbyuserid);

module.exports = router;