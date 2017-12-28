var express = require("express");
var router = express.Router();
var controller = require("../../controllers/ListsController");
router.get("/:id/members", controller.get_all_list_Member);
router.post("/:id/members", controller.add_member_to_list);
router.get("/", controller.get_all_Lists); 
router.post("/", controller.create_List); 

module.exports = router;