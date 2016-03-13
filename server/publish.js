Meteor.publish('dataManagement',function(collection_name){
    var collection = MANAGECOLLECTION.COLLECTIONLIST[collection_name];
    if (!collection)
        return;
    return collection.find({});
})