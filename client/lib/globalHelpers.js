UI.registerHelper('getUpperCase', function (text) {
    return text.toUpperCase();
});
UI.registerHelper('refactorImage', function (text) {
    return text;
});
UI.registerHelper('getParent', function (context, key) {
    if (context)
        return context[key];
    return "";
});
UI.registerHelper('isActiveRoute', function (routes, className) {
    if (className.hash)
        className = 'active';
    var url = Router.current().url;
    var reg = new RegExp(routes, 'i');
    return reg.test(url)
        ? className
        : '';
});
UI.registerHelper('getTime', function (time) {
    return moment(new Date(time)).format('DD/MM/YYYY');
});
UI.registerHelper('getValue', function (name) {
    var key = Session.get('current_unique_key');
    if (!key)
        return;
    return ENUM.getValue(Router.current().params.collection_name,name,key);
});
