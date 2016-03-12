Router.route('/manage', function () {
    this.layout('manageLayout');
    this.render('collectionManagement', {
        data: function () {
            return {
                collection: context._admin_path
            }
        }
    });
});