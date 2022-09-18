// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  items: function() {
    return Object.values(Messages._data);
  },

  add: function(message, callback) {
    Messages._data[message.message_id] = Messages.conform(message);
    callback(Messages.items());
  },
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  // update (takes in all data received from the server) and put it into our data object

  // An update method, value is a func that takes in the serverData
  // and call back specified in app.js line 33
  update: function(messages, callback) {
    // loop over the serverData object with message as key
    for (let message of messages) {
      // create in our _data object a key of "message id", set value to copy messages from serverData
      //Messages._data[message.message_id] = Messages.conform(message);
      Messages.add(message);
    }
    // after we loaded serverData into _data
    // invoke callback, which is MessagesView.render
    callback(Messsages.items());
  },

  // this additional method fills in the blanks if value is missing
  conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }
};