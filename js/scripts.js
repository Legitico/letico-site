// $(document).ready(function() {
// 	//scroll
// 	// $('a[href*=#]').bind('click', function(e) {
// 	// 	e.preventDefault(); // prevent hard jump, the default behavior

// 	// 	var target = $(this).attr("href"); // Set the target as variable

// 	// 	// perform animated scrolling by getting top-position of target-element and set it as scroll target
// 	// 	$('html, body').stop().animate({
// 	// 			scrollTop: $(target).offset().top
// 	// 	}, 600, function() {
// 	// 			location.hash = target; //attach the hash (#jumptarget) to the pageurl
// 	// 			$('.page-section').removeClass('current');
// 	// 			$(target).addClass('current');
// 	// 			//$(this).addClass('current');
// 	// 			//$("#"+page-section).addClass('current');
// 	// 	});

// 	// 	return false;
// 	// });

// 	// tabs

// });

jQuery(function( $ ){
	jQuery('.nav li').on('click', function() {
        jQuery(this).addClass('current').siblings().removeClass('current');
        jQuery('.bios .active').hide().removeClass('active');
        jQuery('.bios div').eq($(this).index()).show().addClass('active');
    });
	/**
	 * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
	 * @see http://demos.flesler.com/jquery/scrollTo/
	 * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.localScroll.
	 */
	
	// The default axis is 'y', but in this demo, I want to scroll both
	// You can modify any default like this
	$.localScroll.defaults.axis = 'xy';
	
	/**
	 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
	 * also affect the >> and << links. I want every link in the page to scroll.
	 */
	$.localScroll({
		target: '#onePager', // could be a selector or a jQuery object too.
		queue:true,
		duration:2000,
		hash:true,
		onBefore:function( e, anchor, $target ){
			// The 'this' is the settings object, can be modified
		},
		onAfter:function( anchor, settings ){
			// The 'this' contains the scrolled element (#content)
		}
	});


	$(function() {

		// Get the form.
		var form = $('#legitico-contact');
	  
		// Get the messages div.
		var formMessages = $('#form-messages');
	  
		// Set up an event listener for the contact form.
		$(form).submit(function(e) {
		  // Stop the browser from submitting the form.
		  e.preventDefault();
	  
		  // Serialize the form data.
		  var formData = $(form).serialize();
	  
		  // Submit the form using AJAX.
		  $.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		  })
		  .done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
	  
			// Set the message text.
			$(formMessages).text(response);
	  
			// Clear the form.
			$('#name').val('');
			$('#lastname').val('');
			$('#email').val('');
			$('#message').val('');
		  })
		  .fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
	  
			// Set the message text.
			if (data.responseText !== '') {
			  $(formMessages).text(data.responseText);
			} else {
			  $(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		  });
	  
		});
  
		
	  
	  });
});