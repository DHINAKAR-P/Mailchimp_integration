
//mongoose
var Template_dao = require('../daos/Template_dao');

module.exports.create_template = function(template , callback){
    Template_dao.create_template(template , function(list){
        var id = template._id;
        template.id = id;
        var templatedata = {templates : template}
        callback(templatedata);
    })
}

module.exports.update_template = function(template_id , templatedata ,callback){
    Template_dao.update_template(template_id , templatedata , function(template){
        var id = template._id;
        template.id = id;
        var templatedata = {templates : template}
        callback(templatedata);
    })
}

module.exports.findbytemplateid = function(template_id , callback){
    Template_dao.findbytemplateid(template_id , function(template){
        var id = template._id;
        template.id = id;
        var templatedata = {templates : template}
        callback(templatedata);
    })
}

module.exports.findall_template = function(callback){
    console.log("findall services")
    
    Template_dao.findall_template(function(list_of_template){
        var count = 0;
        for(var i = 0; i<list_of_template.length; i++){
        var id = list_of_template[i]._id; 
        list_of_template[i].id = id;
        count ++;
        }
        if(list_of_template.length === count){
           // templates.push(list_of_template)
        var templatedata = {templates : list_of_template}
           callback(templatedata);
    }
    })
}

module.exports.delete_template = function(template_id , callback){
Template_dao.delete_template(template_id , function(template){
    callback(template);
})
}