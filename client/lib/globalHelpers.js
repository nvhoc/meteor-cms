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