$(document).ready(function() {
	$('#join-button').click(function() {
		name = $('#name').val();
		email = $('#email').val();
		pass = $('#password').val();
		pass_c = $('#password_confirm').val();

		$.ajax({
			url : '/join/',
			type : 'POST',
			data : { name, email, pass, pass_c },

			success : function(xhr, data, textStatus) {

			}
		});
	});
});