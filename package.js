Package.describe({
    name: 'hocnv:meteor-cms',
    summary: "Provide a collection manager",
    version: "0.0.1"
});

Package.on_use(function (api) {
    api.use('mongo');
    api.use('aldeed:collection2@2.5.0');
    api.use('iron:router');
    api.use('less','client');
    api.use('twbs:bootstrap','client');
    api.use('hocnv:meteor-permission',{weak: true});
    api.use(['session@1.0.0',
        'spacebars@1.0.0',
        'templating@1.0.0'
    ],'client');
    api.add_files([
        'client/lib/globalHelpers.js',
        'client/common/footer.html',
        'client/common/footer.js',
        'client/common/navigation.html',
        'client/common/navigation.js',
        'client/common/top-navbar.html',
        'client/common/top-navbar.js',
        'client/common/page-heading.html',
        'client/common/page-heading.js',
        'client/layouts/manageLayout.html',
        'client/stylesheets/animatecss/animate.css',
        'client/stylesheets/globals/badgets_labels.import.less',
        'client/stylesheets/globals/base.import.less',
        'client/stylesheets/globals/buttons.import.less',
        'client/stylesheets/globals/chat.import.less',
        'client/stylesheets/globals/custom.import.less',
        'client/stylesheets/globals/elements.import.less',
        'client/stylesheets/globals/landing.import.less',
        'client/stylesheets/globals/md-skin.import.less',
        'client/stylesheets/globals/media.import.less',
        'client/stylesheets/globals/metismenu.import.less',
        'client/stylesheets/globals/mixins.import.less',
        'client/stylesheets/globals/navigation.import.less',
        'client/stylesheets/globals/pages.import.less',
        'client/stylesheets/globals/rtl.import.less',
        'client/stylesheets/globals/sidebar.import.less',
        'client/stylesheets/globals/skins.import.less',
        'client/stylesheets/globals/spinners.import.less',
        'client/stylesheets/globals/theme-config.import.less',
        'client/stylesheets/globals/top_navigation.import.less',
        'client/stylesheets/globals/typography.import.less',
        'client/stylesheets/globals/variables.import.less',
        'client/stylesheets/style.less',
        'client/plugins/metisMenu/jquery.metisMenu.js',
        'client/plugins/slimscroll/jquery.slimscroll.min.js',
        'client/update_field/image_update_field.html',
        'client/update_field/label_update_field.html',
        'client/update_field/textbox_update_field.html',
        'client/update_field/a_update_field.html',
        'client/update_field/a_update_filed.js',
        'client/update_field/image_update_field.js',
        'client/screen/collectionManagement.html',
        'client/screen/collectionManagement.js',
        'client/screen/blank.html',
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
