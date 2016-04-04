Template.textbox_list_update_field.onRendered(function () {
    var that= this;
    this.autorun(function () {
        var dom = document.getElementById("tab-content-textbox-list");
        $(dom).html('');
        var key =  Session.get('current_unique_key');
        if (!key)
            return;
        Blaze.renderWithData(Template.tab_content_textbox_list, {
            data: ENUM.getValue(Router.current().params.collection_name,that.data.name,key),
            name: that.data.name
        }, dom);
        $('textarea').froalaEditor();
    });
})
Template.textbox_update_field.onRendered(function(){
    var that= this;
    this.autorun(function () {
        var dom = document.getElementById("textbox-panel-body");
        $(dom).html('');
        var key =  Session.get('current_unique_key');
        if (!key)
            return;
        Blaze.renderWithData(Template.textbox_panel_body, {
            data: ENUM.getValue(Router.current().params.collection_name,that.data.name,key),
            name: that.data.name
        }, dom);
        $('textarea').froalaEditor();
    });
})