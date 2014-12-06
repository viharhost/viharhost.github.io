$(document).on('click','.data-target', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 700);
});

$(document).on('click','#submit-form', function() {
    if ($('.name-input').val() == "" || $('.test-textarea').val() == "" ){
        alert ('Please do not leave the field empty');
    }
    else{
    $.ajax({
  type: "POST",
  url: "https://mandrillapp.com/api/1.0/messages/send.json",
  data: {
    'key': 'MeUOj88xVKjbLEJVG28RWw',
    'message': {
      'from_email': 'admin@sahithiandnitish.com',
      'to': [
          {
            'email': 'sahithi.hamsa@gmail.com',
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': 'Wedding Wishes',
      'html': 'Hey Sahithi! Someone has dropped a message for you at sahithiandnitish.com <br> <br> Name - ' + $('.name-input').val() + '<br>Message - ' + $('.test-textarea').val()
    }
  }
 }).done(function(response) {
    $('.name-input').val("");
    $('.test-textarea').val("");
   alert('Thank you for your wishes.'); // if you're into that sorta thing
 });
}
});
