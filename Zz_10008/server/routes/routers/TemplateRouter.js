var express = require("express");
var router = express.Router();
var controller = require("../../controllers/TemplateController")

router.post("/", controller.create_Template);
router.get("/Template_by_user", controller.get_all_Template_by_user);
router.get("/",controller.get_all_Template);
router.get("/:id", controller.get_Template_by_id);

module.exports = router;