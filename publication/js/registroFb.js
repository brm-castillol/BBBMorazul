
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
        obtenerFotoPerfil()
        FB.api('/me', 'get', { access_token: token, fields: 'id,first_name,last_name,email' } ,function (response) {
          console.log(response);
          //console.log(response.first_name);
          jQuery("#idRs").val('');
          jQuery("#nombreCompleto").val('');
          jQuery("#email").val('');
          jQuery("#idRs").val(response.id).attr('data','fb');
          idP=jQuery('#idRs');
          jQuery("#nombreCompleto").val(response.first_name+" "+response.last_name);
          jQuery("#nombres").val(response.first_name);
          jQuery("#email").val(response.email);
           if(window.location.hash=='#logout'){
             jQuery("#idRs").val('');      
           }
          //loginProf(idP);

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
          console.log('me dieron click');
        e.preventDefault();

        facebookLogin();
        setTimeout(function(){
          var idP=jQuery("#idRs");
          loginProf(idP);
        }, 2000);
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












