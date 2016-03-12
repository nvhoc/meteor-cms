Template.a_update_filed.helpers({
    'isImage':function(){
        return this.type == 'image';
    },
    'isTextBox':function(){
        return this.type == 'textbox';
    },
    'isLabel':function(){
        return this.type == 'label';
    },
    'isImageList':function(){
        return this.type == 'imagelist';
    }


})