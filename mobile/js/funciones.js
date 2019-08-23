function css_browser_selector(n){var b=n.toLowerCase(),f=function(c){return b.indexOf(c)>-1},h="gecko",k="webkit",p="safari",j="chrome",d="opera",e="mobile",l=0,a=window.devicePixelRatio?(window.devicePixelRatio+"").replace(".","_"):"1";var i=[(!(/opera|webtv/.test(b))&&/msie\s(\d+)/.test(b)&&(l=RegExp.$1*1))?("ie ie"+l+((l==6||l==7)?" ie67 ie678 ie6789":(l==8)?" ie678 ie6789":(l==9)?" ie6789 ie9m":(l>9)?" ie9m":"")):(/trident\/\d+.*?;\s*rv:(\d+)\.(\d+)\)/.test(b)&&(l=[RegExp.$1,RegExp.$2]))?"ie ie"+l[0]+" ie"+l[0]+"_"+l[1]+" ie9m":(/firefox\/(\d+)\.(\d+)/.test(b)&&(re=RegExp))?h+" ff ff"+re.$1+" ff"+re.$1+"_"+re.$2:f("gecko/")?h:f(d)?d+(/version\/(\d+)/.test(b)?" "+d+RegExp.$1:(/opera(\s|\/)(\d+)/.test(b)?" "+d+RegExp.$2:"")):f("konqueror")?"konqueror":f("blackberry")?e+" blackberry":(f(j)||f("crios"))?k+" "+j:f("iron")?k+" iron":!f("cpu os")&&f("applewebkit/")?k+" "+p:f("mozilla/")?h:"",f("android")?e+" android":"",f("tablet")?"tablet":"",f("j2me")?e+" j2me":f("ipad; u; cpu os")?e+" chrome android tablet":f("ipad;u;cpu os")?e+" chromedef android tablet":f("iphone")?e+" ios iphone":f("ipod")?e+" ios ipod":f("ipad")?e+" ios ipad tablet":f("mac")?"mac":f("darwin")?"mac":f("webtv")?"webtv":f("win")?"win"+(f("windows nt 6.0")?" vista":""):f("freebsd")?"freebsd":(f("x11")||f("linux"))?"linux":"",(a!="1")?" retina ratio"+a:"","js portrait"].join(" ");if(window.jQuery&&!window.jQuery.browser){window.jQuery.browser=l?{msie:1,version:l}:{}}return i}(function(j,b){var c=css_browser_selector(navigator.userAgent);var g=j.documentElement;g.className+=" "+c;var a=c.replace(/^\s*|\s*$/g,"").split(/ +/);b.CSSBS=1;for(var f=0;f<a.length;f++){b["CSSBS_"+a[f]]=1}var e=function(d){return j.documentElement[d]||j.body[d]};if(b.jQuery){(function(q){var h="portrait",k="landscape";var i="smartnarrow",u="smartwide",x="tabletnarrow",r="tabletwide",w=i+" "+u+" "+x+" "+r+" pc";var v=q(g);var s=0,o=0;function d(){if(s!=0){return}try{var l=e("clientWidth"),p=e("clientHeight");if(l>p){v.removeClass(h).addClass(k)}else{v.removeClass(k).addClass(h)}if(l==o){return}o=l}catch(m){}s=setTimeout(n,100)}function n(){try{v.removeClass(w);v.addClass((o<=360)?i:(o<=640)?u:(o<=768)?x:(o<=1024)?r:"pc")}catch(l){}s=0}})(b.jQuery)}})(document,window);

$(document).ready(function(){

   
    /* Colorbox */
/*    
    $("a.ayuda").colorbox({
    	'transition': 'fade',
    	onComplete: function(){
    		$('#cboxClose').show();
    	},
    	onClose: function(){
    		$('#cboxClose').hide();
    	}
    });
	  
    $("#sumarIniciativa").colorbox({
    	'transition': 'fade',
    	onComplete: function(){
    		$('#cboxClose').show();
    	},
    	onClose: function(){
    		$('#cboxClose').hide();
    	}
    });

    $('.cursor').colorbox({
    	'transition': 'fade',
    	'href': 'modalIniciativaRealizada.php',
    	onComplete: function(){
    		$('#cboxClose').show();
    	},
    	onClose: function(){
    		$('#cboxClose').hide();
    	}
    });
*/




    /* FIN MENU */

    /* MENU MOBILE */

    $('.menu-toggle').on('click',function(){
        if(!$(this).hasClass('active')){
            toggleMobileMenu('in');
        } else {
            toggleMobileMenu('out');
        }
    });

    $('.menu-overlay').on('click',function(){
        toggleMobileMenu('out');
    });

    function toggleMobileMenu(mode){

        var menu = $('.principal > ul');
       // var overlay = $('.menu-overlay');

        if(mode == 'out') {
            menu.animate({
                'left': '-75%'
            },'fast',function(){
                $('.menu-toggle').removeClass('active');
            });
         //   overlay.hide();

        }

        if(mode == 'in') {
            menu.animate({
                'left': '0'
            },'fast',function(){
                $('.menu-toggle').addClass('active');
            });
           // overlay.show();
        }

    }

    /* FIN MENU MOBILE */

  	/* jcarousel */

        $('.jcarousel:not(#videos, #homeslider) ul').bxSlider({
            nextSelector: '.jcarousel-next',
            prevSelector: '.jcarousel-prev',
            adaptiveHeight: true
        });

        $('#homeslider ul').bxSlider({
            pager: true,
            auto: true,
            adaptiveHeight: true
        });

        $('#videos ul').bxSlider({
            nextSelector: '.jcarousel-next',
            prevSelector: '.jcarousel-prev',
            pager: false,
            controls: true,
            adaptiveHeight: true
        });

        $('.steps-slider.activate-nip ul').bxSlider({
            nextSelector: '.activate-nip .jcarousel-next',
            prevSelector: '.activate-nip .jcarousel-prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true
        });

        $('.steps-slider.activate-card ul').bxSlider({
            nextSelector: '.activate-card .jcarousel-next',
            prevSelector: '.activate-card .jcarousel-prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true
        });

        $('.steps-slider.asocciate-account ul').bxSlider({
            nextSelector: '.asocciate-account .jcarousel-next',
            prevSelector: '.asocciate-account .jcarousel-prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true
        });

        $('.promo-slider ul').bxSlider({
            pager: true,
            auto: false,
            adaptiveHeight: true
        });

        var activation = $('#activation ul');

        activation.bxSlider({
            nextSelector: '#activation .activation--step.next',
            prevSelector: '#activation .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = activation.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                activation.closest('.activation').find('.activation--total').text(activation.getSlideCount());
            }
        });

        var association = $('#association ul');

        association.bxSlider({
            nextSelector: '#association .activation--step.next',
            prevSelector: '#association .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = association.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                association.closest('.activation').find('.activation--total').text(association.getSlideCount());
            }
        });

        var send1 = $('#send1 ul');

        send1.bxSlider({
            nextSelector: '#send1 .activation--step.next',
            prevSelector: '#send1 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = send1.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                send1.closest('.activation').find('.activation--total').text(send1.getSlideCount());
            }
        });

        var send2 = $('#send2 ul');

        send2.bxSlider({
            nextSelector: '#send2 .activation--step.next',
            prevSelector: '#send2 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = send2.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                send2.closest('.activation').find('.activation--total').text(send2.getSlideCount());
            }
        });

        var send3 = $('#send3 ul');

        send3.bxSlider({
            nextSelector: '#send3 .activation--step.next',
            prevSelector: '#send3 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = send3.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                send3.closest('.activation').find('.activation--total').text(send3.getSlideCount());
            }
        });

        var send4 = $('#send4 ul');

        send4.bxSlider({
            nextSelector: '#send4 .activation--step.next',
            prevSelector: '#send4 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = send4.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                send4.closest('.activation').find('.activation--total').text(send4.getSlideCount());
            }
        });

        var send5 = $('#send5 ul');

        send5.bxSlider({
            nextSelector: '#send5 .activation--step.next',
            prevSelector: '#send5 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = send5.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                send5.closest('.activation').find('.activation--total').text(send5.getSlideCount());
            }
        });

        var fond1 = $('#fond1 ul');

        fond1.bxSlider({
            nextSelector: '#fond1 .activation--step.next',
            prevSelector: '#fond1 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = fond1.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                fond1.closest('.activation').find('.activation--total').text(fond1.getSlideCount());
            }
        });

        var fond2 = $('#fond2 ul');

        fond2.bxSlider({
            nextSelector: '#fond2 .activation--step.next',
            prevSelector: '#fond2 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = fond2.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                fond2.closest('.activation').find('.activation--total').text(fond2.getSlideCount());
            }
        });

        var fond3 = $('#fond3 ul');

        fond3.bxSlider({
            nextSelector: '#fond3 .activation--step.next',
            prevSelector: '#fond3 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = fond3.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                fond3.closest('.activation').find('.activation--total').text(fond3.getSlideCount());
            }
        });

        var fond4 = $('#fond4 ul');

        fond4.bxSlider({
            nextSelector: '#fond4 .activation--step.next',
            prevSelector: '#fond4 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = fond4.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                fond4.closest('.activation').find('.activation--total').text(fond4.getSlideCount());
            }
        });
		var fond5 = $('#fond5 ul');

        fond4.bxSlider({
            nextSelector: '#fond5 .activation--step.next',
            prevSelector: '#fond5 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = fond4.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                fond4.closest('.activation').find('.activation--total').text(fond4.getSlideCount());
            }
        });

        var ingreso = $('#ingreso ul');

        ingreso.bxSlider({
            nextSelector: '#ingreso .activation--step.next',
            prevSelector: '#ingreso .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ingreso.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ingreso.closest('.activation').find('.activation--total').text(ingreso.getSlideCount());
            }
        });

/********************************
    OTRAS OPERACIONES
********************************/

        var ops1 = $('#ops1 ul');

        ops1.bxSlider({
            nextSelector: '#ops1 .activation--step.next',
            prevSelector: '#ops1 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops1.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops1.closest('.activation').find('.activation--total').text(ops1.getSlideCount());
            }
        });

        var ops2 = $('#ops2 ul');

        ops2.bxSlider({
            nextSelector: '#ops2 .activation--step.next',
            prevSelector: '#ops2 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops2.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops2.closest('.activation').find('.activation--total').text(ops2.getSlideCount());
            }
        });

        var ops3 = $('#ops3 ul');

        ops3.bxSlider({
            nextSelector: '#ops3 .activation--step.next',
            prevSelector: '#ops3 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops3.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops3.closest('.activation').find('.activation--total').text(ops3.getSlideCount());
            }
        });

        var ops4 = $('#ops4 ul');

        ops4.bxSlider({
            nextSelector: '#ops4 .activation--step.next',
            prevSelector: '#ops4 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops4.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops4.closest('.activation').find('.activation--total').text(ops4.getSlideCount());
            }
        });

        var ops5 = $('#ops5 ul');

        ops5.bxSlider({
            nextSelector: '#ops5 .activation--step.next',
            prevSelector: '#ops5 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops5.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops5.closest('.activation').find('.activation--total').text(ops5.getSlideCount());
            }
        });

        var ops6 = $('#ops6 ul');

        ops6.bxSlider({
            nextSelector: '#ops6 .activation--step.next',
            prevSelector: '#ops6 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops6.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops6.closest('.activation').find('.activation--total').text(ops6.getSlideCount());
            }
        });

        var ops7 = $('#ops7 ul');

        ops7.bxSlider({
            nextSelector: '#ops7 .activation--step.next',
            prevSelector: '#ops7 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops7.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops7.closest('.activation').find('.activation--total').text(ops7.getSlideCount());
            }
        });

        var ops8 = $('#ops8 ul');

        ops8.bxSlider({
            nextSelector: '#ops8 .activation--step.next',
            prevSelector: '#ops8 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops8.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops8.closest('.activation').find('.activation--total').text(ops8.getSlideCount());
            }
        });
        
        var ops9 = $('#ops9 ul');

        ops9.bxSlider({
            nextSelector: '#ops9 .activation--step.next',
            prevSelector: '#ops9 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops9.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops9.closest('.activation').find('.activation--total').text(ops9.getSlideCount());
            }
        });
        
        var ops10 = $('#ops10 ul');

        ops10.bxSlider({
            nextSelector: '#ops10 .activation--step.next',
            prevSelector: '#ops10 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops10.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops10.closest('.activation').find('.activation--total').text(ops10.getSlideCount());
            }
        });
        
        var ops11 = $('#ops11 ul');

        ops11.bxSlider({
            nextSelector: '#ops11 .activation--step.next',
            prevSelector: '#ops11 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops11.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops11.closest('.activation').find('.activation--total').text(ops11.getSlideCount());
            }
        });
        
        var ops12 = $('#ops12 ul');

        ops12.bxSlider({
            nextSelector: '#ops12 .activation--step.next',
            prevSelector: '#ops12 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops12.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops12.closest('.activation').find('.activation--total').text(ops12.getSlideCount());
            }
        });
        
        var ops13 = $('#ops13 ul');

        ops13.bxSlider({
            nextSelector: '#ops13 .activation--step.next',
            prevSelector: '#ops13 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops13.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops13.closest('.activation').find('.activation--total').text(ops13.getSlideCount());
            }
        });
        var ops14 = $('#ops14 ul');

        ops14.bxSlider({
            nextSelector: '#ops14 .activation--step.next',
            prevSelector: '#ops14 .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = ops14.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                ops14.closest('.activation').find('.activation--total').text(ops14.getSlideCount());
            }
        });
        
        var comprar = $('#comprar ul');

        comprar.bxSlider({
            nextSelector: '#comprar .activation--step.next',
            prevSelector: '#comprar .activation--step.prev',
            pager: false,
            controls: true,
            adaptiveHeight: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 220,
            onSlideBefore: function (nextSlide) {

                var container = comprar.closest('.activation'),
                    index = nextSlide.index();

                container.find('.activation--screen-text')
                    .eq(index)
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                container.find('.activation--current').text(index+1);

            },
            onSliderLoad: function () {
                comprar.closest('.activation').find('.activation--total').text(comprar.getSlideCount());
            }
        });

/********************************
    ACCORDION
********************************/

        $('.accordion:not(.active)').accordion({
            collapsible: true,            
            active: false,
            heightStyle: 'content'
        });

        $('.accordion.active').accordion({
            collapsible: true,                        
            active: 0,
            heightStyle: 'content'
        });

        $('.menuTelefono li a').click(function (event) {
            event.preventDefault();

            $('.menuTelefono li a').removeClass('activo');
            $(this).addClass('activo');

            $('.modelos > li').hide();
            console.log($(this).attr("href"), $($(this).attr("href")));
            $($(this).attr("href")).show();

        });


    /*COMO FUNCIONA - NUEVO DESPLEGABLE*/
    if ($("body").hasClass("comoFunciona")) { 
        
        $('.comoFunciona div.main .titulo').on("click", function(){

            
            
             //$('.comoFunciona div.accordion.main .titulo.ui-state-active').not(this).trigger('click');            
 
            //console.log(this.id);
            

               /* anchor*/ 

               var anchorId = $(this).attr("id"); 
             
                if ($(this).hasClass("ui-state-active")) {
                $('.anchor-id').attr("href", "#" + anchorId);
                $(".anchor-id").get(0).click();
            }
           
        })

        var menuItem = $(".accordion h2.accordion--title");        
        $(menuItem).on("click",function(){
            var menuClass = $(this).attr("class");
            var menuId = $(this).attr("id");
            $('a.plus#' + menuId).css('background-position','14px 14px')
            $('a.plus').hide();
            $('ul.menu-oculto').hide();
            setTimeout(function() {
                    $('a.plus#' + menuId).fadeIn();
            }, 1000);

            var plusClick = $('.accordion--content a.plus.menu-cerrado');
            $(plusClick).on("click", function(){
                if($('a.plus#' + menuId).hasClass('menu-abierto')){
                    setTimeout(function() {
                    $('ul.menu-oculto#' + menuId).slideUp();
                    $('a.plus#' + menuId).removeClass('menu-abierto');
                    $('a.plus#' + menuId).addClass('menu-cerrado');
                    $('a.plus#' + menuId).css('background-position','14px 14px')
                }, 150);
                } else {
                    setTimeout(function() {
                    $('ul.menu-oculto#' + menuId).slideDown();
                    $('a.plus#' + menuId).removeClass('menu-cerrado');
                    $('a.plus#' + menuId).addClass('menu-abierto');
                    $('a.plus#' + menuId).css('background-position','14px -21px')
                    }, 150);
                }
            });   
            var subMenu = $('ul.menu-oculto#' + menuId + ' li a');
            $(subMenu).on("click", function(){ 
                var subMenuClass = $(this).attr("class");
                /*ABRE NUEVO MENU*/
                 $('.comoFunciona .accordion h2.accordion--title.' + subMenuClass).trigger('click');
              
            })
            

            
            
              
        })
    }

    /* modal SAldazo */

    
     		
}); // fin de document ready

