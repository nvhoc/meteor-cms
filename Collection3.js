Collection3 = function (name, options) {
    this._collection = null;
    this._name = null;
    var _admin_perfix = 'manage';
    this._admin_path = null;
    this._update_fields = []; //{name:'',type:''[image,textbox,label]}
    this._unique_fields = []; //string

    var _constructor = function (name, opt, context) {
        context._collection = new Mongo.Collection(name);
        context._name = name;
        //Create admin route;
        if (!opt) {
            if (!context._admin_path)
                context._admin_path = name;
        }
    }(name, options, this);

    this.find = function () {
        var f_args = Array.prototype.slice.call(arguments);
        return this._collection.secureFind.apply(this._collection,f_args);
    };
    this.findOne = function () {
        var f_args = Array.prototype.slice.call(arguments);
        return this._collection.secureFindOne.apply(this._collection,f_args);
    };
    this.insert = function () {
        var f_args = Array.prototype.slice.call(arguments);
        return this._collection.secureInsert.apply(this._collection,f_args);
    };
    this.update = function () {
        var f_args = Array.prototype.slice.call(arguments);
        return this._collection.secureUpdate.apply(this._collection,f_args);
    };
    this.remove = function () {
        var f_args = Array.prototype.slice.call(arguments);
        return this._collection.secureRemove.apply(this._collection,f_args);
    };
    this.attachSchema = function (schema) {
        this._unique_fields = schema.opt.unique_fields;
        this._update_fields = schema.opt.update_fields;
        console.log(schema.opt.simpleObj);
        if (schema.opt.simpleObj.parent)
        console.log(schema.opt.simpleObj.parent);
        this._collection.attachSchema(schema.opt.simpleObj);

    };
};