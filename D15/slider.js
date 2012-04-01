(function($){
	var sliderUL = $('div.slider').css('overflow','hidden').children('ul'),
		imgs = sliderUL.find('img'),
		imgWidth = imgs[0].width,
		imgsLen = imgs.length,
		current = 1,
		totalImgWidth = imgWidth * imgsLen;

		$('#slider-nav').show().find('button').on('click', function(){
			var direction = $(this).data('dir'),
				loc = imgWidth;

			// console.log(direction);
			
			( direction === 'next') ? ++current : --current;

			if( current === 0 ){
				current = imgsLen;
				loc = totalImgWidth - imgWidth;
				direction = 'next';
			} else if( current-1 === imgsLen ){
				current = 1;
				loc = 0;
			}

			transition(sliderUL,loc,direction);

		});

		function transition(container,loc,direction){
			var unit;

			if( direction && loc !== 0 ){
				unit = ( direction === 'next') ? '-=' : '+=';
			}

			container.animate({
				'margin-left': unit ? (unit+loc) : loc
			}, 200);

		}


})(jQuery);
