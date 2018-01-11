var express = require("express");
var router = express.Router();
var controller = require("../../controllers/CampaignController")
router.post("/", controller.create_Campaign);
router.get("/", controller.get_all_campaigns);
router.put("/:id", controller.edit_Camp_Template);
router.get("/:id", controller.get_campaign_By_Id);
router.get("/:id/content", controller.get_campaign_content);
router.post("/:id/:userid/send",controller.send_Campaign);

module.exports = router;