Template.nav_manage.helpers({
    'collections':function(){
        var list =[];
        for (var key in MANAGECOLLECTION.COLLECTIONLIST)
        {
            list.push(MANAGECOLLECTION.COLLECTIONLIST[key]._name);
        }
        return list;
    }
})