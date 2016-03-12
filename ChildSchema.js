ChildSchema = function(type,obj){
    var that = this;
    that.opt ={
        update_fields:[],
        unique_fields:[],
        type: type,
        simpleObj: {}
    };
    for (var key in obj){
        var aUpdateField = {};
        for (var field in obj[key]){
            if (field =='update_field'){
                aUpdateField.name =key;
                delete obj[key].update_field;
                continue;
            }
            if (field =='type_of_field'){
                aUpdateField.type =obj[key][field];
                switch (aUpdateField.type){
                    case "child":
                        var typeChild = obj[key]["type"];
                        var orginalTypeChild ={};
                        if (Array.isArray(typeChild)){
                            orginalTypeChild = typeChild[0];
                            obj[key]["type"] = [orginalTypeChild.opt.simpleObj];
                        }else {
                            orginalTypeChild = typeChild;
                            obj[key]["type"] = orginalTypeChild.opt.simpleObj;
                        }
                        aUpdateField.child = {
                            update_fields : orginalTypeChild.opt.update_fields,
                            unique_fields : orginalTypeChild.opt.unique_fields,
                            type: orginalTypeChild.opt.type
                        };
                        break;
                    case "reference":
                        var referenceCollection = obj[key].collection;
                        delete obj[key].collection;
                        aUpdateField.reference = referenceCollection;
                        break;
                }
                delete obj[key].type_of_field;
                continue;
            }
            if (field =='unique_field'){
                that.opt.unique_fields.push(key);
                delete obj[key].unique_field;
                continue;
            }
        }
        that.opt.update_fields.push(aUpdateField);
    }
    //console.log('DEBUG child');
    //console.log(obj);
    that.opt.simpleObj = new SimpleSchema(obj);
};