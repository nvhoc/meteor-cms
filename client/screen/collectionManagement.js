Template.collectionManagement.helpers({
    list_data_unique_field: function(){
        var collection = MANAGECOLLECTION.COLLECTIONLIST[Session.get('currentCollection')];
        var data = collection.find({}).fetch();
        var list = [];
        data.forEach(function(aData) {
            var str ="";
            collection._unique_fields.forEach(function (field) {
                str += aData[field];
            });
            list.push({field:str,id:aData._id});
        });
        return list;
    },
    list_data_update_fields: function(){
        var collection = MANAGECOLLECTION.COLLECTIONLIST[Session.get('currentCollection')];
        var list = collection._update_fields;
        var data = collection.findOne({_id:Session.get('currentUpdateFieldId')});
        //TODO if value is objec --> make lvl 2 update field
        list.forEach(function(field){
            field.value = data[field.key];
        });
        return list;
    },
    update_fields_id: function(){
        return Session.get('currentUpdateFieldId');
    },
    selectedCollection: function(){
        return Session.get('currentCollection');
    }
});
Template.collectionManagement.events({
    'click .unique-field': function(e){
        var el = e.currentTarget;
        Session.set('currentUpdateFieldId',el.id);
    }
});
Template.collectionManagement.onRendered(function(){
    Session.set('currentUpdateFieldId');
    Session.set('currentCollection');
    $('body').addClass('fixed-sidebar');
    $('body').addClass('full-height-layout');

    // Set the height of the wrapper
    $('#page-wrapper').css("min-height", $(window).height()  + "px");

    // Add slimScroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    });

    // Add slimScroll to left navigation
    $('.sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });
})