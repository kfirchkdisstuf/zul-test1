if (Meteor.isClient) {
 /// //Meteor.Router.add({
 //   '/': 'home'
 // });
  Template.login.events({
    'click #loginButton' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
       { 

        var username = $('#name').val();
        var password = $('#password').val();
        var options = {
        
            username: username,
            password: password


        }
       // Accounts.createUser(options);
        Meteor.loginWithPassword(username,password,function(err){
        if (err)
        {

          alert("bad")

        }
        else
        {
        console.log("You pressed the button  " + Meteor.user().username);
        Meteor.Router.add( { '/foo': [301, {Location: '/bar'}, ""] } );

        }});
        //Meteor.user();
        
      }
    }});
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}