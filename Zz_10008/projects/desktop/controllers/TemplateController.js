var service = require("../services/TemplateService")
var mail_config = require("../config/mail_config")
var template_localservice = require("../services/Template_localservice")

//GET ALl Template
module.exports.get_all_Template = function (req, res) {
  console.log("get alls template")
  if (req.headers.api_key && req.headers.api_url) {
    service.get_all_Template(req.headers.api_key ,req.headers.api_url, function (template) {
      res.json(template);
    });
  }
  else{
  template_localservice.findall_template(function(template){
    res.status(201)
    res.json(template);
    
  })
}
}
//GET TEMPLATE BY USER
module.exports.get_all_Template_by_user = function (req, res) {
  if (req.headers.api_key && req.headers.api_url) {
    service.get_all_Template_by_user(req.headers.api_key ,req.headers.api_url,function (template) {
      res.json(template);
    });
  } 
}

//GET Template By ID
module.exports.get_Template_by_id = function (req, res) {
  
  var Template_id = req.params.id;
  if (req.headers.api_key && req.headers.api_url) {
   // var Template_id = req.params.id;
    service.get_Template_by_id(Template_id, req.headers.api_key ,req.headers.api_url, function (template) {
      res.json(template);
    });
  }
  else{
  template_localservice.findbytemplateid(Template_id , function(template){
  res.status(201);
  res.json(template);
})
}
}

module.exports.create_Template = function (req, res) {
  //console.log("create template")
  var Template = req.body;
  if (req.headers.api_key && req.headers.api_url) {
  //  var Template = req.body;
    service.create_Template(Template, req.headers.api_key ,req.headers.api_url, function (template) {
      res.status(201);
      res.json(template);
    });
  }
  else{
  template_localservice.create_template(Template , function(template){
    res.status(201);
    res.json(template);
  })
}
}

module.exports.edit_Template = function (req, res) {
  
  var Template = req.body;
  var Template_id = req.params.id;
  if (req.headers.api_key && req.headers.api_url) {
    // var Template = req.body;
    // var Template_id = req.params.id;
    service.edit_Template(Template, Template_id, req.headers.api_key ,req.headers.api_url, function (template) {
      res.status(201);
      res.json(template);
    });
  }
  else{
template_localservice.update_template(Template_id,Template , function(template){
  res.status(201);
  res.json(template);
})
  }
}