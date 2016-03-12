Template.header_manage.helpers({
    user: function(){
        if (Meteor.user())
            return Meteor.user().profile.name;
        return "Guest";
    }
})