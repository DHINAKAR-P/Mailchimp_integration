//mongoose
var list_dao = require('../daos/List_dao');
var contact_dao = require('../daos/contact_dao');
var campaign_defaults_dao = require('../daos/campaign_defaults_dao');
var member_dao = require('../daos/member_dao');
var stats_dao = require('../daos/stats_dao');

module.exports.create_list = function(list , callback){
    contact_dao.create_contact(list.contact , function(contact){
        console.log("create contact in list services", contact);
        console.log("create contact id in list services", contact._id);
        var id = contact._id;
        list.contact = id;
        console.log("after create contact in list  ", list);
    campaign_defaults_dao.create_campaign_defaults(list.campaign_defaults , function(defaults){
        console.log("create defaults in list services ", defaults);
        console.log("create defaults id in list services ", defaults._id);
        var id = defaults._id;
        list.campaign_defaults = id;
        //list.member.id = "";
        member_dao.create_member(list.member , function(member){
            console.log("create member in list services");
            console.log("create member id in list services" , member._id);
            var id = member._id;
            list.member = id;
            var stats = {
             "member_count": 0,
            "unsubscribe_count": 0,
            "cleaned_count": 0,
            "member_count_since_send": 0,
            "unsubscribe_count_since_send": 0,
            "cleaned_count_since_send": 0,
            "campaign_count": 0,
            "campaign_last_sent": "",
            "merge_field_count": 2,
            "avg_sub_rate": 0,
            "avg_unsub_rate": 0,
            "target_sub_rate": 0,
            "open_rate": 0,
            "click_rate": 0,
            "last_sub_date": "",
            "last_unsub_date": ""}
  stats_dao.create_stats(stats ,function(statsvalue){
      var id =statsvalue._id;

      list.stats = id;

      list_dao.create_list(list , function(list){
        var id = list._id;
        list.id = id;
        var listdata = {lists : list}
        console.log("!!!!------listdata",listdata)
         callback(listdata);
       // callback(list);
    })
  
    })

            

        })
    })    
    
    })
    
    
    
    
}

module.exports.update_list = function(list ,callback){
    list_dao.update_list(list , function(list){
        var id = list._id;
        list.id = id;
        var listdata = {lists : list}
        console.log("!!!!------listdata",listdata)
         callback(listdata);
    })
}

module.exports.findbylistid = function(list_id , callback){
    list_dao.findbylistid(list_id , function(list){
        var id = list._id;
        list.id = id;
        var listdata = {lists : list}
     //   console.log("!!!!------listdata",listdata)
        // callback(listdata);
        console.log("@@@@@find by list id -------->>>>")
        callback(listdata);
    })
}

module.exports.findall_list = function(callback){
    console.log("entering into all list in services");
    
    list_dao.findall_list(function(list){
        var count = 0;
       // console.log("~~~lenght list~~member count initial~~~~",list.length)
        for(var i = 0; i<list.length;i++ ){
        var id = list[i]._id; 
        list[i].id = id;
        count ++;
      }
        if(list.length === count){

           //lists.push(list);
           var listdata = {lists : list}
          // console.log("!!!!------listdata",listdata)
            callback(listdata);
    }
    })
}

module.exports.delete_list = function(list_id , callback){
list_dao.delete_list(list_id , function(list){
    callback(list);
})
}