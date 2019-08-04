$(document).ready(function(){
// $('.navbar-nav .nav-link').click(function(){
//     $('.navbar-nav nav-link').removeClass('active');
//     $(this).addClass('active');
// });	
$( '.nav-link' ).on( 'click', function () {
	$('.navbar-collapse').removeClass('show');
	$( '.navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
	$( this ).addClass( 'active' );
});

$( '.navbar-brand' ).on( 'click', function () {
	$('.navbar-collapse').removeClass('show');
	$( '.navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
	$( this ).addClass( 'active' );
});
$('.navbar-toggler').on('click',function(){
	var expand = $('button').attr('aria-expanded');
	if(expand==true){
		$('button').addClass('collapsed');
		$('.navbar-collapse').removeClass('show');
	}
	else{
		$('button').removeClass('collapsed');	
	}
	$('button').attr('aria-expanded',!expand);
 });
});