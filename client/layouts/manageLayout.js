Template.manageLayout.onCreated(function(){
    //var links = document.head.getElementsByTagName('link');
    //var length = links.length;
    //for (var i = 0; i< length;){
    //    var link = links[i];
    //    if (link.rel = 'stylesheet'){
    //        link.remove();
    //        length--;
    //        continue;
    //    }
    //    i++;
    //}
    var styleElement = document.createElement('link');
    styleElement.setAttribute('rel', 'stylesheet');
    styleElement.setAttribute('type', 'text/less');
    styleElement.setAttribute('href', '/packages/hocnv_meteor-cms/client/stylesheets/style.less');
    document.getElementsByTagName('head')[0].appendChild(styleElement);
    var jS = document.createElement('script');
    jS.type = 'text/javascript';
    jS.src = '/packages/hocnv_meteor-cms/client/plugins/less/less.js';
    (document.body ? document.body : document.getElementsByTagName('head')[0]).appendChild(jS);
})