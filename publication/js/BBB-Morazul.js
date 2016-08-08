jQuery(document).ready(function($) {
	jQuery("#form-datosAP").validate();	
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
	$( "#hielo-1" ).animate({
   width: "50%",
  }, 5000, function() {
    // Animation complete.
    $("#hielo-2").animate({
            width: "50%"
        },5000);
  });
  
});

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