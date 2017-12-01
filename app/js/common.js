document.getElementById("card-user").onkeyup = function(event){
this.value = this.value.replace(/[а-яА-Я]/g, '');

};


$(document).ready(function() {
	
	$("#form").validate({
	focusCleanup: true,
	focusInvalid: false,
		rules: {
			number:{
				required : true,
				digits: true,
				minlength: 4,
				maxlength: 4
			},
			name:{
				required : true,
				minlength: 4


			},
			code: {
				required : true,
				minlength: 3,
				maxlength:3,
				digits: true

			}

		},
		messages: {
			name:{
				required: "Обязательно для заполнения",
				minlength:  "4 символа min",
				

			},
			number:{
				required: "Обязательно для заполнения",
				minlength:  "4 цифры",
				digits : "только цифры",
				maxlength:  "4 символа max",

			},
			code:{
				required: "Обязательно для заполнения",
				minlength:  "3 цифры",
				digits : "только цифры" ,
				maxlength: "Нужно всего 3 цифры",
			},
		}

	});




     
});
