$(document).on('click','.data-target', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 700);
});

$(document).on('click','#submit-form', function(event) {
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': 'MeUOj88xVKjbLEJVG28RWw',
            'message': {
                'from_email': $('.name-input').val(),
                'to': [
                    {
                        'email': 'dtekriwal@gmail.com',
                        'type': 'to'
                    }
                ],
                'autotext': true,
                'subject': 'Message',
                'html': $('.test-textarea')
            }
        }
    }).done(function(response) {
        alert("Thank you for your message");
    });
});
