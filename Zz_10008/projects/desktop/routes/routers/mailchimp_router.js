var express = require('express');
var router = express.Router();
var controller = require("../../controllers/mailchimpkey_controller");

router.post("/create",controller.create_key);
router.put("/update",controller.update_key);
router.delete("/delete/:id",controller.delete_key);
router.get("/findbyuserid/:id",controller.findbyuserid);
router.get("/findallmailchimp",controller.findallmailchimp);

module.exports = router;