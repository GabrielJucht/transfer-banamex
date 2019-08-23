/*
// List Ticker by Alex Fish
// www.alexefish.com
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
*/
(function($){
$.fn.list_ticker = function(options){
	var defaults = {
		speed:4000,
		effect:'slide',
		run_once:false,
		random:false
	};
	var options = $.extend(defaults, options);
	var a = 0;
	return this.each(function(){
		var obj = $(this);
		var list = obj.children();
		var count = list.length - 1;		
		var stopped = false; //flag if we should stop ticking
        obj.hover( function(){ //adding hover behaviour
            stopped = true;
        }, function(){
            stopped = false;
        });
		

		//list.not(':first').hide();
		var interval = setInterval(function(){
			if(stopped) {return;} 
			list = obj.children();
			//list.not(':first').hide();
			
			if (a<count){b = a+1;}else{b=0}
			console.log(a+" "+b);
			var first_li = list.eq(a)
			var second_li = list.eq(b)
			list.removeClass("activo");
			second_li.addClass("activo");

			if (a < count){
				a += 1;
				console.log(a);
			}else{ a = 0;}
//			clearInterval(interval);
		}, options.speed)
	});
};
})(jQuery);