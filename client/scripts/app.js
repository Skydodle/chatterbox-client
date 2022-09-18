// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();


    App.startSpinner();
    // Fetch initial batch of messages
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    //setInterval(App.fetch, 5000);
  },

  fetch: function(callback = () => {}) {
    // fetch all message data from server using parse ajax

    Parse.readAll((data) => {
      // Examine the response from the server request:
      console.log(data);
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      Messages.update(data, MessagesView.render); // setting render as call back, so update can decide when to run render
      Rooms.udpate(data, RoomsView.render);
      //callback stops the spinner or any action specified // from line 20
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
