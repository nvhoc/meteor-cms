Template.collectionManagement.helpers({
    list_data_unique_field: function () {
        var collection = MANAGECOLLECTION.COLLECTIONLIST[this.collection_name];
        var data = collection.find({}).fetch();
        var list = [];
        var getUnique = function (uniFields, aData) {
            var str = "";
            uniFields.forEach(function (field) {
                if (str != "") {
                    str += MANAGECOLLECTION.SEPERATE_CHARACTER;
                }
                if (aData[field.name]) {
                    if (field.reference) {
                        var refCollection = MANAGECOLLECTION.COLLECTIONLIST[field.reference];
                        var refData = refCollection.findOne(aData[field.name]);
                        if (refData)
                            str += getUnique(refCollection._unique_fields, refData);
                        return;
                    }
                    if (field.type == Date)
                        str += moment(new Date(aData[field.name])).format('HH:MM - DD/MM/YYYY');
                    else
                        str += aData[field.name];
                }
            });
            return str;
        };
        data.forEach(function (aData) {
            list.push({
                field: getUnique(collection._unique_fields, aData),
                id: aData._id,
                createdAt: aData.createdAt,
                infoC: aData.infoC,
                tagC: aData.tagC
            });
        });
        return list;
    },
    list_data_update_fields: function () {
        var collection = MANAGECOLLECTION.COLLECTIONLIST[Session.get('currentCollection')];
        var list = collection._update_fields;
        var data = collection.findOne({_id: Session.get('currentUpdateFieldId')});
        //TODO if value is objec --> make lvl 2 update field
        list.forEach(function (field) {
            field.value = data[field.key];
        });
        return list;
    },
    current_unique_key: function () {
        return Session.get('current_unique_key');
    },
    selectedCollection: function () {
        return Session.get('currentCollection');
    }
});
Template.collectionManagement.events({
    'click .open-update-fields': function(e){
        var field = $(e.currentTarget).data('field');
        Session.set('current_unique_key', field);
    }
});
Template.collectionManagement.onRendered(function () {
    Session.set('currentUpdateFieldId');
    Session.set('currentCollection');
    $('body').addClass('fixed-sidebar');
    $('body').addClass('full-height-layout');

    // Set the height of the wrapper
    $('#page-wrapper').css("min-height", $(window).height() + "px");

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