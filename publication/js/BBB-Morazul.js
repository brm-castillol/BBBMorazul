  // Elements
  var scene = document.getElementById('scene');
  var clipCheckbox = document.getElementById('clip');
  var relativeCheckbox = document.getElementById('relative');

  // Pretty simple huh?
  var parallax = new Parallax(scene, {
    relativeInput: relativeCheckbox.checked,
    clipRelativeInput: clipCheckbox.checked
  });

    // Elements
  var scene2 = document.getElementById('scene2');
  var clipCheckbox2 = document.getElementById('clip2');
  var relativeCheckbox2 = document.getElementById('relative2');

  // Pretty simple huh?
  var parallax2 = new Parallax(scene2, {
    relativeInput: relativeCheckbox2.checked,
    clipRelativeInput: clipCheckbox2.checked
  });

  // Animacion Svg

  var hi = new Vivus('texto-inicial', {type: 'delayed', duration: 30, start: "manual",dashGap: 20, forceRender: true },
        function () {
          if (window.console) {
            //console.log('Animation finished. [log triggered from callback]');N
            jQuery("#texto-inicial .parte-blanca>path").attr('class','relleno-fondo');
            jQuery("#texto-inicial .parte-azul>path").attr('class','relleno-fondo');
            //jQuery(".parte-morada>path").attr('class','relleno-fondo');
            //jQuery(".parte-blanca path").addClass('relleno-fondo');
            jQuery(".contene-logoBBB").fadeTo( "slow" , 1);
          }
        });

  var hi2 = new Vivus('texto-pasos', {type: 'delayed', duration: 30, start: "manual",dashGap: 20, forceRender: true },
        function () {
          if (window.console) {
            jQuery("#texto-pasos .parte-blanca>path").attr('class','relleno-fondo');
            jQuery("#texto-pasos .parte-azul>path").attr('class','relleno-fondo');
            jQuery("#texto-pasos .parte-morada>path").attr('class','relleno-fondo');
          }
        });

  var hi3 = new Vivus('texto-foto', {type: 'async', duration: 30, start: "manual",dashGap: 20, forceRender: true },
        function () {
          if (window.console) {
            jQuery("#texto-foto .parte-blanca>path").attr('class','relleno-fondo');
            jQuery("#texto-foto .parte-azul>path").attr('class','relleno-fondo');
            jQuery("#texto-foto .parte-morada>path").attr('class','relleno-fondo');
          }
        });

  var hi4 = new Vivus('texto-acudiente', {type: 'async', duration: 30, start: "manual",dashGap: 20, forceRender: true },
        function () {
          if (window.console) {
            jQuery("#texto-acudiente .parte-blanca>path").attr('class','relleno-fondo');
            jQuery("#texto-acudiente .parte-azul>path").attr('class','relleno-fondo');
            jQuery("#texto-acudiente .parte-morada>path").attr('class','relleno-fondo');
            hi5.play();
          }
        });
  var hi5 = new Vivus('texto-partici', {type: 'async', duration: 30, start: "manual",dashGap: 20, forceRender: true },
        function () {
          if (window.console) {
            jQuery("#texto-partici .parte-blanca>path").attr('class','relleno-fondo');
            jQuery("#texto-partici .parte-azul>path").attr('class','relleno-fondo');
            jQuery("#texto-partici .parte-morada>path").attr('class','relleno-fondo');
          }
        });
  var hi6 = new Vivus('texto-galeria', {type: 'async', duration: 30, start: "manual",dashGap: 20, forceRender: true },
        function () {
          if (window.console) {
            jQuery("#texto-galeria .parte-blanca>path").attr('class','relleno-fondo');
            jQuery("#texto-galeria .parte-azul>path").attr('class','relleno-fondo');
            jQuery("#texto-galeria .parte-morada>path").attr('class','relleno-fondo');
            jQuery("#texto-galeria .parte-moradac>path").attr('class','relleno-fondo');
            jQuery("#texto-galeria .parte-negra>path").attr('class','relleno-fondo');
          }
        });

 

jQuery(document).ready(function($) {
  jQuery("#form-datosAP").validate(); 
  
  jQuery(".cont-flecha").click(function(){
      var go=jQuery(this).attr("data-go");
      var div = jQuery("."+go).position();
      jQuery('html, body').animate({scrollTop : div.top},800);
      //hi2.reset().play()
      return false;
  });
  jQuery(".cont-flecha2,.cont-flecha").click(function(){
      var go=jQuery(this).attr("data-go");
      var div = jQuery("."+go).position();
      jQuery('html, body').animate({scrollTop : div.top},800);
      return false;
  });
  jQuery(".conten-foto-sub,#BotonSubir").click(function(){
    jQuery("#FotoSubir").trigger('click');
    return false;
  });
  jQuery( window ).scroll(function() {
    var posBody = jQuery(window).scrollTop();
    var limit1 = jQuery('.contene-logoBBB').position().top;
    var limit2 = jQuery('.conte-subir-foto').position().top-(150);
    var limit3 = jQuery('.conte-datos-partici').position().top-(250);
    var limit4 = jQuery('.conte-galeria').position().top-(200);
    if(posBody<limit1){
      hi2.reset();
      jQuery("#texto-pasos").find(".relleno-fondo").removeAttr('class');

    }
    if(posBody>=limit1 && posBody<limit2){
      hi2.play()
      hi3.reset();
      jQuery("#texto-foto").find(".relleno-fondo").removeAttr('class');
    }
    if(posBody>=limit2 && posBody<limit3){
      hi3.play();
      hi4.reset();
      hi5.reset();
    }
    if(posBody>=limit3 && posBody<limit4){
      hi4.play();
    }
    if(posBody>=limit4){
      hi6.play();
    }
    console.log(posBody+">="+limit2+"&&"+ posBody+"<"+limit3);
  });
  hi.reset().play()
});

jQuery(document).ready(function($) {
  jQuery(".foto-votacion").click(function(event) {
    jQuery(".conte-btn-votar").show('slow');
  })
})
