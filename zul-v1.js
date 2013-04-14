if (Meteor.isClient) {
	Meteor.Router.add({
    '/': 'userPage',
    '/admin': 'adminPage',
    '/newbar': 'newbarPage',
    '/getbar': 'getbarPage'
  })
  



	Template.body.helpers({
    layoutName: function() {
      switch (Meteor.Router.page()) {
        case 'adminPage':
          return 'adminLayout';
        case 'userPage':
          return 'userLayout';
        case 'newbarPage':
          return 'newbarLayout';
	case 'getbarPage':
          return 'getbarLayout';
	default:
          return 'userLayout';
      }
    }
  });

  Template.userPage.events({
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
	alert("hi");
	//console.log("logging");
        Accounts.createUser(options);
        Meteor.loginWithPassword(username,password,function(err){
        if (err)
        {

          alert("bad");

        }
        else
        {
        //console.log("You pressed the button  " + Meteor.user().username);
	alert("logged in");
        Meteor.Router.add( { '/adminPage': [301, {Location: '/userPage'}, ""] } );

        }});
        //Meteor.user();
        
      }
    }});
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}
