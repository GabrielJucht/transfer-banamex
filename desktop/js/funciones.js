function css_browser_selector(g) {
    var w = g.toLowerCase(),
        t = function(a) {
            return w.indexOf(a) > -1
        },
        s = "gecko",
        o = "webkit",
        c = "safari",
        q = "chrome",
        v = "opera",
        u = "mobile",
        m = 0,
        x = window.devicePixelRatio ? (window.devicePixelRatio + "").replace(".", "_") : "1";
    var r = [(!(/opera|webtv/.test(w)) && /msie\s(\d+)/.test(w) && (m = RegExp.$1 * 1)) ? ("ie ie" + m + ((m == 6 || m == 7) ? " ie67 ie678 ie6789" : (m == 8) ? " ie678 ie6789" : (m == 9) ? " ie6789 ie9m" : (m > 9) ? " ie9m" : "")) : (/trident\/\d+.*?;\s*rv:(\d+)\.(\d+)\)/.test(w) && (m = [RegExp.$1, RegExp.$2])) ? "ie ie" + m[0] + " ie" + m[0] + "_" + m[1] + " ie9m" : (/firefox\/(\d+)\.(\d+)/.test(w) && (re = RegExp)) ? s + " ff ff" + re.$1 + " ff" + re.$1 + "_" + re.$2 : t("gecko/") ? s : t(v) ? v + (/version\/(\d+)/.test(w) ? " " + v + RegExp.$1 : (/opera(\s|\/)(\d+)/.test(w) ? " " + v + RegExp.$2 : "")) : t("konqueror") ? "konqueror" : t("blackberry") ? u + " blackberry" : (t(q) || t("crios")) ? o + " " + q : t("iron") ? o + " iron" : !t("cpu os") && t("applewebkit/") ? o + " " + c : t("mozilla/") ? s : "", t("android") ? u + " android" : "", t("tablet") ? "tablet" : "", t("j2me") ? u + " j2me" : t("ipad; u; cpu os") ? u + " chrome android tablet" : t("ipad;u;cpu os") ? u + " chromedef android tablet" : t("iphone") ? u + " ios iphone" : t("ipod") ? u + " ios ipod" : t("ipad") ? u + " ios ipad tablet" : t("mac") ? "mac" : t("darwin") ? "mac" : t("webtv") ? "webtv" : t("win") ? "win" + (t("windows nt 6.0") ? " vista" : "") : t("freebsd") ? "freebsd" : (t("x11") || t("linux")) ? "linux" : "", (x != "1") ? " retina ratio" + x : "", "js portrait"].join(" ");
    if (window.jQuery && !window.jQuery.browser) {
        window.jQuery.browser = m ? {
            msie: 1,
            version: m
        } : {}
    }
    return r
}(function(i, d) {
    var n = css_browser_selector(navigator.userAgent);
    var k = i.documentElement;
    k.className += " " + n;
    var h = n.replace(/^\s*|\s*$/g, "").split(/ +/);
    d.CSSBS = 1;
    for (var l = 0; l < h.length; l++) {
        d["CSSBS_" + h[l]] = 1
    }
    var m = function(a) {
        return i.documentElement[a] || i.body[a]
    };
    if (d.jQuery) {
        (function(b) {
            var j = "portrait",
                f = "landscape";
            var g = "smartnarrow",
                A = "smartwide",
                t = "tabletnarrow",
                a = "tabletwide",
                y = g + " " + A + " " + t + " " + a + " pc";
            var z = b(k);
            var B = 0,
                c = 0;

            function p() {
                if (B != 0) {
                    return
                }
                try {
                    var q = m("clientWidth"),
                        r = m("clientHeight");
                    if (q > r) {
                        z.removeClass(j).addClass(f)
                    } else {
                        z.removeClass(f).addClass(j)
                    } if (q == c) {
                        return
                    }
                    c = q
                } catch (o) {}
                B = setTimeout(e, 100)
            }

            function e() {
                try {
                    z.removeClass(y);
                    z.addClass((c <= 360) ? g : (c <= 640) ? A : (c <= 768) ? t : (c <= 1024) ? a : "pc")
                } catch (o) {}
                B = 0
            }
        })(d.jQuery)
    }
})(document, window);
$(document).ready(function() {
    $('.play_home').on("click", function() {
        setTimeout(function() {
        $('#Home #colorbox #cboxClose').css('opacity','1')
        }, 2000);
        $('#colorbox, #cboxOverlay').addClass('video');        
        /*$('#Home #colorbox #cboxClose').on("click", function() {
        $('#Home #colorbox #cboxClose').css('opacity','0')
    })*/
    });

    $('.footer .modal').on("click", function() {
         $('#colorbox, #cboxOverlay').removeClass('video');    
      });


    $('.videos a').on("click", function() {
        setTimeout(function() {
        $('#Home #colorbox #cboxClose').css('opacity','1')
        }, 2000);
        $('#colorbox, #cboxOverlay').addClass('videos-carousel');        
        /*$('#Home #colorbox #cboxClose').on("click", function() {
        $('#Home #colorbox #cboxClose').css('opacity','0')
    })*/
    });

    $('.footer .modal').on("click", function() {
         $('#colorbox, #cboxOverlay').removeClass('videos-carousel');    
      });

    
    
    

	function css1024(){
		var ancho = $(window).width();
		if(ancho < 1199){
			$("html").addClass("a1024");
		}else{
			$("html").removeClass("a1024");
		}
	}
	$(window).on("resize", function(){
		css1024();
	});
	css1024();
	
    $("footer .modal").colorbox();
    if ($("body#comoFunciona").length || $("body#comoFuncionaEnvio").length || $("body#comoFuncionaFondear").length || $("body#comoFuncionaOperaciones").length || $("body#MaryKay.activar").length || $("body#ADO.comoHago").length || $("body#MaryKay.activar").length){
        var m;
        if ($("body#comoFuncionaEnvio").length) {
            $("#envioFono").load("comoFunciona/comoFuncionabox1.html");
            var e = $(".jcarousel");
            var c = $(".cambiarNip .menuEnvia li a");
            $(c).on("click", function(u) {
                u.preventDefault();
                $(c).removeClass("activo");
                $(this).addClass("activo");
                var t = "comoFunciona/comoFunciona" + $(this).attr("rel") + ".html";
                $("#envioFono").load(t)
            });
            var a = $(".listadoFono .menuTelefono li a");
            var s = $(".listadoFono .modelos > li");
            $(a).on("click", function(u) {
                u.preventDefault();
                $(a).removeClass("activo");
                $(this).addClass("activo");
                $(window).trigger("resize");
                var t = $(this).attr("href");
                $(s).css("display", "none");
                $(t).css("display", "block")
            })
        } else {
            if ($("body#comoFuncionaFondear").length) {
                $("#envioFono").load("comoFunciona/comoFunciona1box4.html");
                var e = $(".jcarousel");
                var c = $(".cambiarNip .menuEnvia li a");
                $(c).on("click", function(u) {
                    u.preventDefault();
                    $(c).removeClass("activo");
                    $(this).addClass("activo");
                    var t = "comoFunciona/comoFunciona1" + $(this).attr("rel") + ".html";
                    $("#envioFono").load(t)
                })
            } else {
                if ($("body#comoFuncionaOperaciones").length) {
                    $("#envioFono").load("comoFunciona/comoFunciona2box1.html");
                    var e = $(".jcarousel");
                    var c = $(".cambiarNip .menuEnvia li a");
                    $(c).on("click", function(u) {
                        u.preventDefault();
                        $(c).removeClass("activo");
                        $(this).addClass("activo");
                        var t = "comoFunciona/comoFunciona2" + $(this).attr("rel") + ".html";
                        $("#envioFono").load(t)
                    });
                    $(".scroll-pane").jScrollPane()
                } else {
                    var p = $(".jcarousel ul").bxSlider({
                        pager: false,
                        controls: true,
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                        onSlideAfter: function(t) {
                            m = p.getCurrentSlide() + 1;
                            $(".jcarousel #cant .act").text(m)
                        }
                    });
                    var d = p.getSlideCount();
                    $(".jcarousel #cant .tot").text(d)
                }
            }
        }
    }
    if($("#queEsTransfer").length){
    	var blockTopQue = $(".blockTopQue ");
    	$(blockTopQue).list_ticker({
        	speed:4000,
        	run_once:false,
        	random:true
    	})
    }
    if ($("#Home").length) {
    	
    	var ancho = $(window).width();
    	var swidth = 350;
    	if(ancho < 1100){swidth = 305;}

    	//console.log(swidth);
        var q = $(".slider.sli-home ul").bxSlider({
            pager: false,
            controls: true,
            infiniteLoop: true,
            slideWidth: swidth,
            moveSlides: 1,
            maxSlides: 3,
            auto: true,
            pause: 6000,
            autoHover: true,
            onSlideAfter: function(t) {
                q.startAuto()
            }
        });

        /*SLIDER HEADER*/    

        $(".sli-header.slider ul").bxSlider({
            pager: true,
            controls: false,
            infiniteLoop: true,
            moveSlides: 1,
            auto: true,
            pause: 5000,
            autoHover: true,
            startSlide: 2,
            buildPager: function(slideIndex){
                switch(slideIndex){
                  case 0:
                    return 'El poder de Transfer<br /> para ti';
                  case 1:
                    return 'Tu boleto de autobús a un SMS de distancia';
                  case 2:
                    return 'Paga desde tu celular en Toks';
                  case 3:
                    return 'Tu celular es tu número de cuenta';
                }
              }
            
        });

       /* var pager1 = "Una sola cuenta, dos formas de usar";    
        var pager2 = "Tu boleto de autobús a un SMS de distancia";    
        var pager3 = "Activa y gana, usa y vuelve a ganar";    
        var pager4 = "Tu celular es tu número de cuenta";    

        $('.sli-header .bx-controls .bx-pager .bx-pager-item:first-child a').html(pager1);
        $('.sli-header .bx-controls .bx-pager .bx-pager-item:nth-child(2) a').html(pager2);
        $('.sli-header .bx-controls .bx-pager .bx-pager-item:nth-child(3) a').html(pager3);
        $('.sli-header .bx-controls .bx-pager .bx-pager-item:nth-child(4) a').html(pager4);*/

        $("#Home .vid").on("click", function(t) {
            t.preventDefault();
            b()
        });
        var n = new Array(2);
        n[0] = "<object id='kaltura_player_1381356710' name='kaltura_player_1381356710' type='application/x-shockwave-flash' allowFullScreen='true' allowNetworking='all' allowScriptAccess='SameDomain' height='396' width='1054' bgcolor='#000000' data='https://cdnapisec.kaltura.com/index.php/kwidget/cache_st/1381356710/wid/_972141/uiconf_id/13732692/entry_id/0_gix6yxst' ><param name='allowFullScreen' value='true' / ><param name='allowNetworking' value='all' / ><param name='allowScriptAccess' value='SameDomain' / ><param name='bgcolor' value='#000000' / ><param name='flashVars' value='' / ><param name='movie' value='https://cdnapisec.kaltura.com/index.php/kwidget/cache_st/1381356710/wid/_972141/uiconf_id/13732692/entry_id/0_gix6yxst' / ></object>";
        var r = "<script src='https://cdnapisec.kaltura.com/p/972141/sp/97214100/embedIframeJs/uiconf_id/8508972/partner_id/972141'><\/script>";

        function g() {
            $(".video_show").show();
            $("#videoPlayer").html(r + n[0])
        }

        function b() {
            $(".video_show").hide();
            $("#videoPlayer").html("")
        }
    }
    if ($("body#queEsTransfer").length) {
        var h = 4;
        var l = $(".alt-controls li");
        var i = $(".jcarousel ul").bxSlider({
            pager: false,
            controls: true,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 211,
            slideMargin: 4,
            maxSlides: 4,
            moveSlides: h,
            onSlideBefore: function(t, x, v) {
                var w = i.getCurrentSlide();
                var u = $(l).width();
                $(l).animate({
                    left: (u * w)
                }, 300)
            }
        });
        var d = Math.ceil(i.getSlideCount() / h);
        var j = ($(".alt-controls ul").width() / (d));
        $(l).css("width", j)
    }
    if ($("body#TOKS").length) {
         var p = $(".jcarousel ul").bxSlider({
                        pager: false,
                        controls: true,
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                        onSlideAfter: function(t) {
                            m = p.getCurrentSlide() + 1;
                            $(".jcarousel #cant .act").text(m)
                        }
                    });
                    var d = p.getSlideCount();
                    $(".jcarousel #cant .tot").text(d)    
    }
    if ($("body#CINEPOLIS").length) {
         var p = $(".jcarousel ul").bxSlider({
                        pager: false,
                        controls: true,
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                        onSlideAfter: function(t) {
                            m = p.getCurrentSlide() + 1;
                            $(".jcarousel #cant .act").text(m)
                        }
                    });
                    var d = p.getSlideCount();
                    $(".jcarousel #cant .tot").text(d)    
    }
    if ($(".accordion").length) {
        $(".accordion:not(.static)").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        })
    }
    $("a[href*=abrirModal]").on("click", function(t) {
        t.preventDefault();
        o(this)
    });

    function k(u) {
        var t = u;
        t = t.replace(/"/gi, "");
        t = t.replace(/'/gi, "");
        t = t.replace(/<script>.*<\/script>/gi, "");
        t = t.replace(/</gi, "");
        t = t.replace(/>/gi, "");
        t = t.replace(/"%3C"/gi, "");
        t = t.replace(/%3E/gi, "");
        t = t.replace(/script/gi, "");
        return t
    }

    function f(t) {
        var v = {};
        var u = k(t).replace(/[?&]+([^=&]+)=([^&]*)/gi, function(y, w, x) {
            v[w] = x
        });
        return v
    }

    function o(w) {
        var v = {
            width: 400,
            scrolling: false,
            href: "",
            iframe: false,
            xhost: false,
            ponerXhost: "",
            leng: ""
        };
        var whref;
  		  whref = $(w).attr("href");
        var x = f(whref);
        x.href = $(w).attr("href");
        $.extend(v, x);
        if (v.ponerXhost == "true") {
            var t = document.location.protocol + "//" + document.location.host + "/";
            v.href += "&xhost=" + t
        }
        if (v.leng == "true") {
            var u = Get_Cookie("language");
            if (u == "en") {
                v.href = v.href.replace("newsLetter/index.html", "newsLetter/index_en.html")
            }
            v.href += "&lenguaje=" + u
        }
        $.colorbox(v)
    }
    var blockList = $(".blockTopQue li");
    $(blockList).mouseover(function(e) {
        e.preventDefault();
        $(blockList).removeClass("activo");
        $(this).addClass("activo");
    }).mouseleave(function(e) {
        e.preventDefault();
        $(blockList).removeClass("activo").parent().find(".first").addClass("activo");
    });
    if ($("body").hasClass("regulacion")) {
		window.onload = function(){
			$('.regulacion #cboxClose').click(function(){
			$('.regulacion #videoModal').remove();
				
			});
		}	
	} else if ($("body").hasClass("saldazo")) {
        window.onload = function(){
                $('.saldazo #cboxClose').click(function(){
                $('.saldazo #videoModal').remove();
                
            });
        }   
    } else if ($("body").hasClass("ado")) {
        window.onload = function(){
                $('.ado #cboxClose').click(function(){
                $('.ado #videoModal').remove();
                
            });
        }   
    }
	
	/*NUEVO SLIDER COMO FUNCIONA*/
	
	var bodyid = $("body").attr("id");
	
	/*COMO FUNCIONA DEPOSITAR*/
	if (bodyid == 'comoFuncionaFondear') {
		$(".comoFunciona .tabs_comofunciona li ul li.estes").addClass("activado");	
        var sliderItem = $(".comoFunciona .tabs_comofunciona li ul li");
		$(sliderItem).live("click",function(){
			var sliderId = $(this).attr("id");
            $(".comoFunciona .tabs_comofunciona li ul li").removeClass("activado");	
			$(this).addClass("activado");
			if(sliderId == "estes"){
				$('.menuEnvia').removeClass('activado');	
				$('#estes_submenu').addClass('activado');
			} else {
				$('.menuEnvia').removeClass('activado');	
				$('#corresponsal_submenu').addClass('activado');				
			}
		
		})
	}
	
	/*COMO FUNCIONA ENVIO Y RECIBO*/
	
	if (bodyid == 'comoFuncionaEnvio') {
		$(".comoFunciona .tabs_comofunciona li ul li.envio").addClass("activado");	
		var sliderItem = $(".comoFunciona .tabs_comofunciona li ul li");
		$(sliderItem).live("click",function(){
			var sliderId = $(this).attr("id");
			$(".comoFunciona .tabs_comofunciona li ul li").removeClass("activado");	
			$(this).addClass("activado");
			if(sliderId == "envio"){
				$('.menuEnvia').removeClass('activado');	
				$('#envio_submenu').addClass('activado');
			} else {
				$('.menuEnvia').removeClass('activado');	
				$('#recibo_submenu').addClass('activado');				
			}
		
		})
	}

    /*COMO FUNCIONA OTRAS OPERACIONES*/ 

    if (bodyid == 'comoFuncionaOperaciones') {
        $(".comoFunciona .tabs_comofunciona li.tiempo").addClass("activado");  
        var sliderItem = $(".comoFunciona .tabs_comofunciona li");
        $(sliderItem).live("click",function(){
            var sliderId = $(this).attr("id");
            $(".comoFunciona .tabs_comofunciona li").removeClass("activado"); 
            $(this).addClass("activado");
            if(sliderId == "tiempo"){
                $('.menuEnvia').removeClass('activado');    
                $('#tiempo_submenu').addClass('activado');
            } else if(sliderId == "retirar") {
                $('.menuEnvia').removeClass('activado');    
                $('#retirar_submenu').addClass('activado');              
            } else if(sliderId == "consultar") {
                $('.menuEnvia').removeClass('activado');    
                $('#consultar_submenu').addClass('activado');              
             } else if(sliderId == "solicitar") {
                $('.menuEnvia').removeClass('activado');    
                $('#solicitar_submenu').addClass('activado');              
            } else  {
                $('.menuEnvia').removeClass('activado');    
                $('#cuenta_submenu').addClass('activado');              
            } 
         
        })
    }
	
	
	
});

function Get_Cookie(param) {
    return 'es';
}

