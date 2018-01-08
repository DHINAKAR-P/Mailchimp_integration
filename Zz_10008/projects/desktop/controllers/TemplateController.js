var service = require("../services/TemplateService");

//GET ALl Template
module.exports.get_all_Template = function (req, res) {
  if (req.headers.api_key) {
    service.get_all_Template(function (template) {
      res.json(template);
    });
  }
}
//GET TEMPLATE BY USER
module.exports.get_all_Template_by_user = function (req, res) {
  if (req.headers.api_key) {
    service.get_all_Template_by_user(function (template) {
      res.json(template);
    });
  }
}

//GET Template By ID
module.exports.get_Template_by_id = function (req, res) {
  if (req.headers.api_key) {
    var Template_id = req.params.id;
    service.get_Template_by_id(Template_id, function (template) {
      res.json(template);
    });
  }
}

module.exports.create_Template = function (req, res) {
  if (req.headers.api_key) {
    var Template = req.body;
    service.create_Template(Template, function (template) {
      res.status(201);
      res.json(template);
    });
  }
}

module.exports.edit_Template = function (req, res) {
  if (req.headers.api_key) {
    var Template = req.body;
    var Template_id = req.params.id;
    service.edit_Template(Template, Template_id, function (template) {
      res.status(201);
      res.json(template);
    });
  }
}