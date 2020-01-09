console.log('it works');

$(document).ready(function() {
  $('.primary').click(function(event) {
    console.log('Clicked Button');

    var email = $('.email').val();
    var name = $('.name').val();
    var message = $('.message').val();
    var statusElm = $('.status');
    statusElm.empty();

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      //   statusElm.append('<div>Email is valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>Email is incorrect!</div>');
    }

    if (name.length > 2) {
      //   statusElm.append('<div>name is valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>Name is not valid!</div>');
    }

    if (message.length >= 10) {
      //   statusElm.append('<div>Message is valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>Message is not valid!</div>');
    }
  });
});
