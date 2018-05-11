$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
// $("#loginForm").submit(function (event) {

// 	event.preventDefault();
// 	$.ajax({
// 		type: "GET",
// 		datatype: "json",
// 		url: "https://customer-api-shopping.herokuapp.com/api/customers",
// 		data: ({
// 			email: $('#email').val(),
// 			password: $('#password').val()
// 		}),
// 		success: function (result) {
// 			if (result && result.auth_token.length > 1) // you should do your checking here
// 			{
// 				window.location = 'http://www.google.com/'; //just to show that it went through
// 			}
// 			else {
// 				$('#result').empty().addClass('error')
// 					.append('Something is wrong.');
// 			}
// 		}
// 	});
// 	return false;
// });

