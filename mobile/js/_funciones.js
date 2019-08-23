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

    /* MENU */

    $('nav.principal a[href="#"]').on('click',function(e){
        e.preventDefault();
        var submenu = $(this).siblings('.submenu');

        // Si está cerrado, lo abrimos
        if(!$('.submenu').is(':visible')){
            submenu.slideDown('fast');
            $(this).addClass('activo');
        } else {
            $('.submenu').hide();
            $('nav.principal a.activo').removeClass('activo');
            $(this).addClass('activo');
            submenu.show();
        }
    });

    $('.submenu a.cerrar').on('click',function(e){
        $(this).parents('.submenu').slideUp('fast');
        $('nav.principal a.activo').removeClass('activo');
    });


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
        var overlay = $('.menu-overlay');

        if(mode == 'out') {
            menu.animate({
                'left': '-75%'
            },'fast',function(){
                $('.menu-toggle').removeClass('active');
            });
            overlay.hide();

        }

        if(mode == 'in') {
            menu.animate({
                'left': '0'
            },'fast',function(){
                $('.menu-toggle').addClass('active');
            });
            overlay.show();
        }

    }

    /* FIN MENU MOBILE */


    /* CATEGORIAS */

    $('.categorias .verMas > a').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        if(!$(this).parent().hasClass("abierto")){
         $(this).parent().toggleClass("abierto").children('ul').slideDown('fast').toggleClass("abierto");
        }
    });

    /* FIN CATEGORIAS */

    /* GRILLA */

    $('.grilla .mas-info').on('click',function(e){
        e.preventDefault();
        toggleMasInfo($('.grilla article.open'),'out');
        toggleMasInfo($(this).parents('article'),'in');
    });

    $('.grilla .cerrar').on('click',function(e){
        toggleMasInfo($(this).parents('article'),'out');
        e.preventDefault();

    })

    function toggleMasInfo(elem,mode){

        if(mode == 'out') {
            elem.removeClass('open');
            elem.find('.mas-info').animate({top: 0, opacity: 1},'fast');
            elem.find('.mas-informacion').slideUp('fast');
            elem.parent().animate({'height':330},'fast');
        }

        if(mode == 'in') {
            elem.addClass('open');
            elem.find('.mas-info').animate({top: -5, opacity: 0},'fast');
            elem.find('.mas-informacion').css({'opacity':0,'display':'block'});
            var h = 330 + elem.find('.mas-informacion').outerHeight();
            elem.find('.mas-informacion').css({'opacity':1,'display':'none'});
            elem.find('.mas-informacion').slideDown('fast');

            elem.parent().animate({'height':h},'fast');
        }

    }

    /* FIN GRILLA */

/*  var linkPaises = $("a#paises");
    var tooltipPaises = $("#tooltip-paises")
    $(linkPaises).on("click",function(e){
        e.preventDefault();
        $(this)
            .addClass("abierto")
            .parent()
            .find(tooltipPaises)
            .show();
    });
*/
    $(document).on('click',function(e){

        e.stopPropagation();

        var submenu = $('.submenu');
        var verMas = $('.categorias .verMas ul');
        
/*      if (!tooltipPaises.is(e.target) // if the target of the click isn't the container...
          && tooltipPaises.has(e.target).length === 0) // ... nor a descendant of the container
            {
                
                $(tooltipPaises).hide();
                $(linkPaises).removeClass('abierto');
           }
*/
        if (!submenu.is(e.target) // if the target of the click isn't the container...
        && submenu.has(e.target).length === 0 // ... nor a descendant of the container
        && $(e.target).parent().parent().parent('nav').length === 0) // ... nor a parent of the container
            {
                $(submenu).slideUp('fast');
            }

        if (!verMas.is(e.target) // if the target of the click isn't the container...
        && verMas.has(e.target).length === 0 // ... nor a descendant of the container
        && $(e.target).parent('.verMas').length === 0) // ... nor a parent of the container
            {
                if($(verMas).hasClass("abierto")){
                    $(verMas).slideUp('fast').removeClass("abierto").parent().removeClass("abierto");
                }
            }
    });
    
    /* Categorias */
    var menuCat = $(".categorias a.menu");
    var ofertas = $(".ofertas");
    
    $(menuCat).on("click",function(e){
        e.preventDefault();
        $(menuCat).removeClass("activo");
        $(this).addClass("activo");
        
        var solapa = $(this).attr("href");
        $(ofertas).css("display","none");
        $(solapa).css("display","block");

        // Cierra el menu
        $('.categorias .verMas ul').slideUp('fast').removeClass("abierto").parent().removeClass("abierto");

        // Si es mobile, cambia el estado del selector
        $('.verMas > a .texto').text($(this).text());

    });

    $('#oferta0').show();
            
}); // fin de document ready


$(window).on('resize',function(){


})