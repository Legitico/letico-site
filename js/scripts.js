			// // Get the form.
			// var form = $('#legitico-contact');
	  
			// // Get the messages div.
			// var formMessages = $('#form-messages');
		  
			// // Set up an event listener for the contact form.
			// $(form).submit(function(e) {
			//   // Stop the browser from submitting the form.
			//   e.preventDefault();
		  
			//   // Serialize the form data.
			//   var formData = $(form).serialize();
		  
			//   // Submit the form using AJAX.
			//   $.ajax({
			// 	type: 'POST',
			// 	url: $(form).attr('action'),
			// 	data: formData
			//   })
			//   .done(function(response) {
			// 	// Make sure that the formMessages div has the 'success' class.
			// 	$(formMessages).removeClass('error');
			// 	$(formMessages).addClass('success');
		  
			// 	// Set the message text.
			// 	$(formMessages).text(response);
		  
			// 	// Clear the form.
			// 	$('#name').val('');
			// 	$('#lastname').val('');
			// 	$('#email').val('');
			// 	$('#message').val('');
			//   })
			//   .fail(function(data) {
			// 	// Make sure that the formMessages div has the 'error' class.
			// 	$(formMessages).removeClass('success');
			// 	$(formMessages).addClass('error');
		  
			// 	// Set the message text.
			// 	if (data.responseText !== '') {
			// 	  $(formMessages).text(data.responseText);
			// 	} else {
			// 	  $(formMessages).text('Oops! An error occured and your message could not be sent.');
			// 	}
			//   });
		  
			// });

// $(document).ready(function() {

// 	$('.nav a').on('click', function() {

// 		var scrollAnchor = $(this).attr('data-scroll'),
// 			scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 50;
	
// 		$('body,html').animate({
// 			scrollTop: scrollPoint
// 		}, 1000);
	
// 		return false;
	
// 	})	
	
// });//doc ready




// $(window).scroll(function() {
// 	var windscroll = $(window).scrollTop();
// 	if (windscroll >= 100) {
// 		$('.nav').addClass('fixed');
// 		$('#wrapper section').each(function(i) {
// 			if ($(this).position().top <= windscroll - 20) {
// 				$('.nav a.active').removeClass('active');
// 				$('.nav a').eq(i).addClass('active');
// 			}
// 		});

// 	} else {

// 		$('.nav').removeClass('fixed');
// 		$('.nav a.active').removeClass('active');
// 		$('.nav a:first').addClass('active');
// 	}

// }).scroll();



$('.nav a').on('click', function () {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 34;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})


$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    var fromBottom = $(document).height() - ($(window).scrollTop() + $(window).height());
    if (fromBottom == 0) {     // <-- scrolled to the bottom
        $('.nav a.active').removeClass('active');
        $('.nav a:last').addClass('active');
    } else if (windscroll > 34) {
		$('.nav').addClass('fixed');
        $('#wrapper > section').each(function (i) {
			var index = i + 1;
			if ($(this).position().top <= windscroll - 20) {
				$('.nav a.active').removeClass('active');
				$('.nav a').eq(index).addClass('active');
			}
		});
    } else {
		$('.nav').removeClass('fixed');
        $('.nav a.active').removeClass('active');
        $('.nav a:first').addClass('active');
    }

}).scroll();


