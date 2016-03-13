Meteor.publish('dataManagement',function(){
    var list = [];
    for (var key in MANAGECOLLECTION.COLLECTIONLIST){
        list.push(MANAGECOLLECTION.COLLECTIONLIST[key].find({}));
    }
    return list;
})