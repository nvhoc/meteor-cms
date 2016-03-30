MANAGECOLLECTION = {
    SEPERATE_CHARACTER: "/",
    COLLECTIONLIST: {},
    init: function (list,ignore) {
        var l = list.length;
        for (var i = 0; i < l; i++) {
            MANAGECOLLECTION.COLLECTIONLIST[list[i]] = new Collection3(list[i])
            if (ignore && ignore.indexOf(list[i]) != -1)
                MANAGECOLLECTION.COLLECTIONLIST[list[i]].isIgnore = true;
        }
    }

};