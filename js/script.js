/*=========JQ==========*/
$(document).ready(function(){
	
	// $('button').click(function(){
	// 	alert("Hello");
	// });
	// exp1
	$('#btn1').on('click' ,function(){
		alert("Hello");
	});
	// exp2
	$('#btns').on('click', function(){
		$('#lorem1').show();
	});
	$('#btnh').on('click', function(){
		$('#lorem1').hide();
	});
	// exp3
	$('#btnt').on('click', function(){
		$('#lorem2').toggle();
	});
	// exp4
	$('p').on('click', function(){
		$(this).hide();
	});
	// exp5
	$('#btnfi').on('click', function(){
		$('#lorem3').fadeIn();
	});
	$('#btnfo').on('click', function(){
		$('#lorem3').fadeOut();
	});
	// exp6
	$('#btnft').on('click', function(){
		$('#lorem4').fadeToggle();
	});
	// exp7
	$('#btnfi2').on('click', function(){
		$('#lorem5').fadeIn(1000);
	});
	$('#btnfo2').on('click', function(){
		$('#lorem5').fadeOut(1000);
	});
	// exp8
	$('#btnft2').on('click', function(){
		$('#lorem6').fadeToggle(1000);
	});
	// exp9
	$('b').on('click', function(){
		$(this).slideToggle();
	});
	// exp10
	$('#btn2').on('dblclick' ,function(){
		alert("Hello");
	});
	// exp11
	$('#btn3').on('mousemove' ,function(){
		alert("Hello");
	});
	// exp12
	$('#btne1').on('click', function(){
		$('#lorem7').slideUp();
	});
	// exp13
	$('#btne2').on('click', function(){
		$('#lorem8').slideUp('slow');
	});
	// exp14
	$('#btne3').on('click', function(){
		$('#lorem9').slideUp('fast');
	});
});