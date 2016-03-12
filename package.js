Package.describe({
    name: 'hocnv:meteor-cms',
    summary: "Provide a collection manager",
    version: "0.0.1"
});

Package.on_use(function (api) {
    api.use('mongo');
    api.use('aldeed:collection2@2.5.0');
    api.use('iron:router');
    api.use('twbs:bootstrap','client');
    api.use('hocnv:meteor-permission',{weak: true});
    api.use(['session@1.0.0',
        'spacebars@1.0.0',
        'templating@1.0.0'
    ],'client')
    api.add_files([
        'client/layouts/header_manage.html',
        'client/layouts/nav_manage.html',
        'client/layouts/footer_manage.html',
        'client/layouts/header_manage.js',
        'client/layouts/nav_manage.js',
        'client/layouts/manageLayout.html',
        'client/update_field/image_update_field.html',
        'client/update_field/label_update_field.html',
        'client/update_field/textbox_update_field.html',
        'client/update_field/a_update_field.html',
        'client/update_field/a_update_filed.js',
        'client/update_field/image_update_field.js',
        'client/collectionManagement.html',
        'client/collectionManagement.js',
        'client/router.js'
    ],'client');
    api.add_files([
        'Collection3.js',
        'ManageCollection.js',
        'SimpleSchema2.js',
        'ChildSchema.js'
    ]);
    api.export('MANAGECOLLECTION');
    api.export('ChildSchema');
    api.export('SimpleSchema2');

});
