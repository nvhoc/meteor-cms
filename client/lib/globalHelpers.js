UI.registerHelper('getUpperCase', function(text) {
    return text.toUpperCase();
});
UI.registerHelper('isActiveRoute', function(routes, className) {
    if (className.hash)
        className = 'active';
    var url = Router.current().url;
    var reg =  new RegExp(routes, 'i');
    return reg.test(url) ? className : '';
});
UI.registerHelper('getTime', function(time) {
    return moment(new Date(time)).format('DD/MM/YYYY');
});
UI.registerHelper('getValue', function (collection_name,name,context) {
    var key = Session.get('current_unique_key');
    if (!key)
        return;
    if (context){
        collection_name = context.collection_name;
    }
    var collection = MANAGECOLLECTION.COLLECTIONLIST[collection_name];
    var data = collection.find({_id:key}).fetch();
    if (data.length >0)
    return data[0][name];
})