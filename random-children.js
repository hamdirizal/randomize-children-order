jQuery(document).ready(function(){
	jQuery(".js-random-children").each(function(i){
		var $container = jQuery(this);
		var children = [];
		$container.find('a').each(function(i){
			children.push(jQuery(this));
		});

		var i=0;
		for(i=0; i<children.length*2; i++){
			var index = Math.floor(Math.random() * children.length);
			children[index].appendTo($container);
		}
	});
});