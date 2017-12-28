var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Person_Default_ActivityController")
router.post("/Person", controller.create_Person);
router.get(/^\/Person\/(\d+)$/, controller.search_Person_for_update);
router.put("/Person", controller.update_Person);
router.delete(/^\/Person\/(\d+)$/, controller.delete_Person);
router.get("/Person", controller.get_all_Person);

module.exports = router;