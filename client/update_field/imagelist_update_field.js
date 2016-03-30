Template.image_list_update_field.onRendered(function () {
    var imageId = this.data.value;
    $("input[data-id=" + imageId + "]").each(function () {
        var el = $(this);
        var img = Images.findOne({'_id': imageId});
        if (img) {
            el.fileinput({
                initialPreview: "<img src='" + img.url() + "' class='file-preview-image'>",
                uploadUrl: "http://localhost/site/file-upload-batch",
                minImageWidth: 10,
                minImageHeight: 10
            });
            return;
        }
        el.fileinput({
            uploadUrl: "http://localhost/site/file-upload-batch",
            minImageWidth: 10,
            minImageHeight: 10
        });
    });

});
Template.image_list_update_field.events({
    'click .fileinput-remove': function (e) {
        var el = $(e.currentTarget);
        var id = el.parents('.form-group').attr('id');
        removeCache(id);
    },
    'click .file-drop-zone': function (e) {
        var el = $(e.currentTarget);
        var input = el.parents('.form-group').find('input');
        $(input[0]).trigger('click');
    },
    'change .image-upload': function (e) {
        var files = e.target.files;
        var id = $(e.currentTarget).parents('.form-group').attr('id');
        storeImage(convertIdSession(id), files);
    }
});