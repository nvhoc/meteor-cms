SimpleSchema2 = function (obj) {
    var that = this;
    that.opt = {
        update_fields: [{
            type: 'text',
            name: 'infoC'
        }, {
            type: 'tag',
            name: 'tagC'
        }],
        unique_fields: [],
        simpleObj: {}
    };
    if (obj.infoC || obj.tagC) {
        throw Error("these field was registered by this cms package!");
    }
    obj.infoC = {
        type: String,
        optional: true
    };
    obj.tagC = {
        type: [String],
        optional: true
    };
    obj.createdAt = {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                return this.unset();
            }
        }
    };
    obj.updatedAt = {
        type: Date,
        autoValue: function () {
            if (this.isUpdate || this.isUpsert || this.isInsert) {
                return new Date();
            } else {
                return this.unset();
            }
        }
    };
    for (var key in obj) {
        var aUpdateField = {type: "text"};
        var aUniqueField = {priority: 0, type: obj[key].type};
        for (var field in obj[key]) {
            if (field == 'update_field') {
                aUpdateField.name = key;
                delete obj[key].update_field;
                continue;
            }
            if (field == 'type_of_field') {
                aUpdateField.type = obj[key][field];
                switch (aUpdateField.type) {
                    case "child":
                        var typeChild = obj[key]["type"];
                        var orginalTypeChild = {};
                        if (Array.isArray(typeChild)) {
                            orginalTypeChild = typeChild[0];
                            obj[key]["type"] = [orginalTypeChild.opt.simpleObj];
                        } else {
                            orginalTypeChild = typeChild;
                            obj[key]["type"] = orginalTypeChild.opt.simpleObj;
                        }
                        aUpdateField.child = {
                            update_fields: orginalTypeChild.opt.update_fields,
                            unique_fields: orginalTypeChild.opt.unique_fields,
                            type: orginalTypeChild.opt.type
                        };
                        break;
                    case "reference":
                        var referenceCollection = obj[key]["collection"];
                        delete obj[key].collection;
                        aUpdateField.reference = referenceCollection;
                        break;
                }
                delete obj[key].type_of_field;
                continue;
            }
            if (field == 'unique_field') {
                aUniqueField.name = key;
                delete obj[key].unique_field;
                continue;
            }
            if (field == 'unique_field_priority') {
                var priority = parseInt(obj[key].unique_field_priority);
                if (typeof priority != "number")
                    throw Error("type of unique_field_priority must be number");
                aUniqueField.priority = priority;
                delete obj[key].unique_field_priority;
            }
            if (field == 'unique_field_reference') {
                aUniqueField.reference = obj[key].unique_field_reference;
                delete obj[key].unique_field_reference;
            }
            if (field == 'unique_field_reference_name') {
                aUniqueField.reference_name = obj[key].unique_field_reference_name;
                delete obj[key].unique_field_reference_name;
            }
        }
        that.opt.update_fields.push(aUpdateField);
        if (aUniqueField.name)
            that.opt.unique_fields.push(aUniqueField);
    }
    that.opt.unique_fields = QuickSort(that.opt.unique_fields, function (a, b) {
        var aa = a.priority;
        var bb = b.priority;
        return aa < bb;
    });
    //console.log('DEBUG obj');
    //console.log(obj);
    that.opt.simpleObj = new SimpleSchema(obj);
}