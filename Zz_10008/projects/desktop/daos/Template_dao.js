var Template_schema = require("../models/Template")

module.exports.create_template = function(Template,callback) {
  var Template = new Template_schema(Template)
  Template.save( function(Template, error) {
    if (error) {
      callback(error);
    } else {
      callback(Template);
    }
  });
}
module.exports.update_template = function(template_id , templatedata,callback) {
    Template_schema.findOneAndUpdate({ _id:template_id },{ $set:templatedata},{ upsert: true, new: true },  function(Template, error) {
    if (error) {
      callback(error);
    } else {
      callback(Template);
    }
  });
}
module.exports.findbytemplateid = function(Template_id,callback) {
    Template_schema.findById({ _id: Template_id },  function(Template, error) {
    if (error) {
      callback(error);
    } else {
      callback(Template);
    }
  });
}
module.exports.delete_template = function(Template_id,callback) {
    Template_schema.findByIdAndRemove(Template_id,  function(Template, error) {
    if (error) {
      callback(error);
    } else {
      callback(Template);
    }
  });
}
module.exports.findall_template = function(callback) {
    console.log("findall dao")
    Template_schema.find( function(Template, error) {
    if (error) {
      callback(error);
    } else {
      callback(Template);
    }
  });
}