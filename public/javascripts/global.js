
//loading FB SDK async

window.fbAsyncInit = function() {
        FB.init({
          appId      : '299939356796672',
          xfbml      : true,
          version    : 'v2.3'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));



var main = function(){
	forbidIE();
};

//We do not want IE users here!
var forbidIE =  function(){
	var ua = window.navigator.userAgent;
	var MSIE = ua.indexOf('MSIE');
	if (MSIE != -1)  {
		document.documentElement.innerHTML='';
		alert("Use a true browser");
		window.location.href = "https://www.mozilla.org/en-US/firefox/new/";
	}
};

var testFBLogin = function(){
	var uriFB = "https://www.facebook.com/dialog/oauth?client_id=299965326794075&redirect_uri=https://www.facebook.com/connect/login_success.html";
	//var uriFB = "https://graph.facebook.com/v2.3/oauth/access_token?client_id=299939356796672&redirect_uri=http://localhost:3000&client_secret=8aa31d8133fed78092d5b187f47150e2&code=tt";
	//var uriFB = "https://www.facebook.com/dialog/oauth?client_id=299939356796672&redirect_uri=http://localhost:3000&response_type=token";
	$.get(uriFB, function(data){
		console.log(data);
  });
}
//Stack of execution function
main();
//testFBLogin();
$("#FBLogin").on("click", testFBLogin);