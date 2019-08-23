	<?php 
		if(!isset($carpeta)) $carpeta = ""; 
	?>
	
	<title>Transfer Banamex</title>
	<meta charset="UTF-8">
	
	<link rel="stylesheet" type="text/css" href="css/fonts.css" media="screen">
	<link rel="stylesheet" type="text/css" href="<?php echo $carpeta ?>css/colorbox2.css" media="screen">
	<link rel="stylesheet" type="text/css" href="<?php echo $carpeta ?>css/jscrollpane.css" media="screen">
	<link rel="stylesheet" type="text/css" href="<?php echo $carpeta ?>css/layout.css" media="screen">
	<link rel="stylesheet" type="text/css" href="<?php echo $carpeta ?>css/layout_mod.css" media="screen">
	<link rel="stylesheet" type="text/css" href="<?php echo $carpeta ?>css/layout1024.css" media="screen">
	
	<!--[if lt IE 9]>
		<link rel="stylesheet" type="text/css" href="<?php echo $carpeta ?>css/styles.css">
	<![endif]-->

	<meta name="author" content="test" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=1200">

	<script src="<?php echo $carpeta ?>js/jquery-1.7.2.min.js" type="text/javascript"></script>
	<script src="<?php echo $carpeta ?>js/jquery.bxslider.min.js" type="text/javascript"></script>
	<script src="<?php echo $carpeta ?>js/jquery.accordion.min.js" type="text/javascript"></script>
	<script src="<?php echo $carpeta ?>js/jquery.colorbox-min.js" type="text/javascript"></script>
	<script src="<?php echo $carpeta ?>js/jquery.jscrollpane.min.js" type="text/javascript"></script>
	<script src="<?php echo $carpeta ?>js/modalValoracion.js" type="text/javascript"></script>
	<script src="<?php echo $carpeta ?>js/ticker.js" type="text/javascript"></script>
	<script src="<?php echo $carpeta ?>js/funciones.js" type="text/javascript"></script>
	<script type="text/javascript">
        var dispositivo = navigator.userAgent.toLowerCase();
        if( dispositivo.search(/iphone|ipod|android/) > -1 ){
            document.location = 'https://www.banamex.com.mx/transfer/mobile/';  
        }	
	</script>
	<!--Etiquetas HTML5 para IE8 hacia abajo-->
	<!--[if lt IE 9]>
	<script src="<?php echo $carpeta ?>js/html5.js"></script>
	<script src="<?php echo $carpeta ?>js/respond.min.js"></script>
	<![endif]-->	
<?php
		$activo1="";
		$activo2="";
		$activo3="";
		$activo4="";
		$activo5="";
		$activo6="";
		$activo7="";
		$activo8="";
?>