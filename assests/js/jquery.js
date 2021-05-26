$('.form-login input').blur(function(){
	let value= $(this).val();
	if(value==''){
		$('.fb-body .fbbody-right .form-login a:nth-child(2) i').show();
		$(this).css('border','1px solid red');
	}
	else{
		$(this).css('border','1px solid #bdc7d8');
	}
	
});
 
 $('.fb-gender input').change(function(){
        let value = $(this).val();
        if(value =='custom'){
        	$('.custom-box').show();
        }else{
        	$('.custom-box').hide();
        }
 });