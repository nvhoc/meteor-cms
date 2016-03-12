MANAGECOLLECTION = {
    COLLECTIONLIST: {},
    init: function (list) {
        var l = list.length;
        for (var i = 0; i < l; i++) {
            MANAGECOLLECTION.COLLECTIONLIST[list[i]] = new Collection3(list[i])
        }
    }
};