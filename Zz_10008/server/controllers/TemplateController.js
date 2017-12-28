var service = require("../services/TemplateService")
var mail_config = require("../config/mail_config")

//GET ALl Template
module.exports.get_all_Template = function (req, res) {
  service.get_all_Template(function (template) {
    res.json(template);
  });
}
//GET TEMPLATE BY USER
module.exports.get_all_Template_by_user = function (req, res) {
  service.get_all_Template_by_user(function (template) {
    res.json(template);
  });
}

//GET Template By ID
module.exports.get_Template_by_id = function (req, res) {
  var Template_id = req.params.id;
  service.get_Template_by_id(Template_id, function (template) {
    res.json(template);
  });
}

module.exports.create_Template = function (req, res) {
  var Template = req.body;
  service.create_Template(Template, function (template) {
    res.status(201);
    res.json(template);
  });
}