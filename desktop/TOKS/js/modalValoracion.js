function modalValoracion(){   var pagHost = location.href;    pagHost  = pagHost.replace(/\?/g, "#");    var rutaValoracion = 'https://portal.banamex.com.mx/videos/valoracionBanamex/valoracion_transfer/index.html?pagHost='+pagHost;     $.colorbox({    href:rutaValoracion,			width: 740,			height: 350,			scrolling: false,			iframe: true		});		            }