$(function(){
        //adjust slider hieght
        var winh =$(window).height(),
        upperh= $('.upper-bar').innerHeight(),
        navh= $('.navbar').innerHeight();
    
        $('.slider, .carousel-item').height( winh - ( upperh + navh ));
$('ul li').on('click', function() {  
    $('ul li.active').removeClass('active');
    $(this).addClass('active'); 

if ($(this).data('class')==='all') {
$('.shuffel-images .col-sm').css('opacity',1);

}else{
	$('.shuffel-images .col-sm').css('opacity','.08');
	$($(this).data('class')).parent().css('opacity',1);

}

});
});