Router.route('/manage', function () {
    this.layout('manageLayout');
    this.render('blankTemplate', {
        data: function () {
            return {
                //collection: context._admin_path
            }
        }
    });
});
Meteor.subscribe('dataManagement');
Router.route('/manage/data/:collection_name', function(){
    this.layout('manageLayout');
    this.render('collectionManagement', {
        data: function () {
            return {
                category: 'Data Management',
                title: this.params.collection_name.toUpperCase() +" Management",
                collection_name: this.params.collection_name
            }
        }
    });
});