// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // $message.onClick('click', goToUserProfile() => {])
  },

  render: function() {
    // Render all messages
    MessagesView.$chats.html('');
    for(let key in Messages._data) {
      MessagesView.renderMessage(Messages._data[key])
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message)
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }
};