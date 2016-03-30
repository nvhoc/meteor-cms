Template.collection_data_modification.helpers({
    'isImage': function () {
        return this.type == 'image';
    },
    'isTextBox': function () {
        return this.type == 'textbox';
    },
    'isLabel': function () {
        return this.type == 'label';
    },
    'isImageList': function () {
        return this.type == 'imagelist';
    },
    'list_data_update_field': function () {
        var collection = MANAGECOLLECTION.COLLECTIONLIST[this.collection_name];
        return collection._update_fields;
    }
})