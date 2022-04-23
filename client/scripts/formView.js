// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    const message = {
      'username': App.username,
      'text' : FormView.$form.find('#message').val(),
      //event.target.val()
    };
    console.log(message);


    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    console.log('click!');

    // Parse.create to post to server
    Parse.create(message, (data) => {
      console.log();

      Messages.add(message, MessageView.render);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
    // attr = used to retrieve the value of an attribute of the selected element and use it in CSS
  }

};