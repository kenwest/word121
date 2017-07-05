jQuery(document).ready(function(){
	
	FastClick.attach(document.body);
	
	// Start: Main Nav
		$('#main-navigation .menuBar .panel').each(function(){
			var panel = $(this);
			var parent_link = $(panel).siblings('a:first');
			if(!$(parent_link).parent().hasClass('Redirect')){
				var intro_link = $('<li><a href="'+$(parent_link).attr('href')+'"><b>Introduction</b></a></li>');
				$(panel).children().first().prepend(intro_link);
			}
			$(panel).parent().cms_eventToggle({
				'autoclose':true
			});
		});
		
		$('#main-navigation,.faq-item').upgradeTarget({'joinSiblings':true});
		
		// End: Main Nav		
		
	
});
