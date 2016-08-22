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
 // jQuery("#form-datosAP").validate(); 
  
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
  });
  hi.reset().play()
});

jQuery(document).ready(function($) {
  jQuery(".foto-votacion").click(function(event) {
    jQuery(".conte-btn-votar").show('slow');
  })
    $("#FotoSubir").change(function() {
        $("#message").empty(); // To remove the previous error message
        var file = this.files[0];
        var imagefile = file.type;
        var match = ["image/jpeg", "image/png", "image/jpg"];
        if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2]))) {
            $('#previewing').attr('src', 'noimage.png');
            $("#message").html("<p id='error'>Please Select A valid Image File</p>" + "<h4>Note</h4>" + "<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
            return false;
        } else {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
    $("#form-datosAP").validate({
            rules: {
                nombreCompleto: {required: true},
                tipoDocumento: {required: true},
                documento: {required: true},
                departamento: {required: true},
                ciudad: {required: true},
                email: {
                    required: true,
                    email: true
                },
                numTelefono: {required: true},
                direccion: {required: true},
                nombreP: {required: true},
                terminos: {required: true},
                acudiente: {required: true},
            }
        });
        
        /*Ejecuta el registro si el formulario es valido*/
        jQuery('.btn-submit').click(function(event) {
            /* Act on the event */
             if(jQuery('#form-datosAP').valid()) {
                    return true
                }else{
                  return false;
                }
        });
})


function imageIsLoaded(e) {
    $('#previewing').attr('src', e.target.result);
    $('#previewing').attr('width', '100%');
    $('#previewing').attr('height', '100%');
};

function onlyNumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
function changeToFrase(){
  jQuery("#frase").val(jQuery("#fraseFoto").val())
}


var app_id = '927635007348573';
var scopes = 'public_profile,email';
var idP;
window.fbAsyncInit = function() {
    FB.init({
      appId      : '927635007348573',
      xfbml      : true,
      version    : 'v2.7'
    });

      FB.getLoginStatus(function (response) {
          statusChangeCallback(response, function () {
          }
        );
        });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

    var token;

      var statusChangeCallback = function (response, callback) {
        if (response.status === 'connected') {
          getFacebookData();
        } else {
          callback(false);
        }
      };

      var checkLoginState = function (callback) {
        FB.getLoginStatus(function (response) {
          callback(response);
        });
      };

      var getFacebookData = function () {
        FB.api('/me', 'get', { access_token: token, fields: 'id,first_name,last_name,email' } ,function (response) {
          
          jQuery("#idRs").val('');
          jQuery("#nombreCompleto").val('');
          jQuery("#email").val('');
          jQuery("#idRs").val(response.id).attr('data','fb');
          idP=jQuery('#idRs');
          jQuery("#nombreCompleto").val(response.first_name+" "+response.last_name);
          jQuery("#email").val(response.email);
           

        });
      };

      function facebookLogin() {
        checkLoginState(function (data) {
            FB.login(function (response) {
             token = response.authResponse.accessToken;
              if (response.status === 'connected')
                getFacebookData();
            }, {
              scope: 'email'});
        });
      };

      var facebookLogout = function () {
        checkLoginState(function (data) {
          if (data.status === 'connected') {
            FB.logout(function (response) {
              jQuery('#facebook-session').before(btn_login);
              jQuery('#facebook-session').remove();
            });
          }
        });

      };



      jQuery(document).on('click', '#fbconect', function (e) {
       //
        e.preventDefault();

        facebookLogin();
       /* setTimeout(function(){
          var idP=jQuery("#idRs");
          loginProf(idP);
        }, 2000);*/
      });

      function obtenerFotoPerfil(){
        FB.api('/me/picture?width=325&height=325', function(responseI) {
          var profileImage = responseI.data.url;
            //var fbid=jQuery("#pictureP").val(profileImage);
            //console.log(profileImage);
            jQuery('.img-perfil img').attr('src',profileImage);
       });
      }

      function logout() {
            FB.logout(function(response) {
              // user is now logged out
            });
        }



function BuscarCiudad(idDepto){
   jQuery.ajax({
   url: 'acciones.php',
   data: {
      varCrtl:1,
      idDepto: idDepto
   },
   dataType: 'json',
   beforeSend:function(){
     jQuery("#idCiudad").html("")
      jQuery("#idCiudad").removeAttr('disabled');
   },
   success: function(data) {
      jQuery("#idCiudad").append("<option value='' selected >Selecione la ciudad</option>");
     jQuery.each(data,function(key,value){
       jQuery("#idCiudad").append("<option value='"+value.idCiudad+"'>"+value.nombre+"</option>");
     })
     jQuery("#idCiudad").removeAttr('disabled');
   },
   type: 'POST'
});
}








