;(function($) {

    $.fn.upgradeTarget = function( options ) {

        // default settings
        var settings = $.extend({
						selector : 'a[class^="toggle"]',
            handleTouch	: true,
						targetClass	: 'target',
						afterSetup 	: null,
						joinSiblings : false,
						afterClick 	: null
        }, options);

        
				return this.each( function() {
					
					$(this).find(settings.selector).each( function() {
					
						var ob_link = $(this);
						
						if($(ob_link).attr('href').match(/^#/)){
							
							var ob_target = $($(ob_link).attr('href')).first();
							
							//console.log($(ob_link));
							
							$(ob_link).bind('click',function(e){
									
									e.preventDefault();
									
									if($(ob_target).hasClass(settings.targetClass)){
										$(ob_target).removeClass(settings.targetClass);
										
									}else{
										$(ob_target).addClass(settings.targetClass);
										
										if(settings.joinSiblings){
											$($(ob_link).siblings(settings.selector).attr('href')).removeClass('target'); 
											$(ob_target).siblings().removeClass('target'); 
										}
										
									}
									if($.isFunction(settings.afterClick)) settings.afterClick.call(this);
									
								});
							
						
							if($.isFunction(settings.afterSetup)) settings.afterSetup.call(this);
						
						}
						
					});
					
        });

    }

})(this.jQuery || this.Zepto)