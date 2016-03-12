Template.navigation.rendered = function(){

    // Initialize metisMenu
    $('#side-menu').metisMenu();

};

// Used only on OffCanvas layout
Template.navigation.events({

    'click .close-canvas-menu' : function(){
        $('body').toggleClass("mini-navbar");
    }

});

Template.navigation.helpers({
    'collections':function(){
        var list =[];
        for (var key in MANAGECOLLECTION.COLLECTIONLIST)
        {
            if (!MANAGECOLLECTION.COLLECTIONLIST[key].isIngore)
                list.push(MANAGECOLLECTION.COLLECTIONLIST[key]._name);
        }
        return list;
    },
    getUrlCollections: function() {
        return 'manage/data/'+this;
    }
});