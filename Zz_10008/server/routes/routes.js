var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/Person_Default_Activity", routers.Person_Default_ActivityRouter);

api.use("/mailchimp/Templates", routers.TemplateRouter);
api.use("/mailchimp/Campaigns", routers.CampaignRouter);
api.use("/mailchimp", routers.ListRouter);

module.exports = api;