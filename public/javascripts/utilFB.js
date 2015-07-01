//Change the HTML value of the status div
var statusChangeCallback = function(resp){
  console.log("statusChangeCallback");
  console.log(resp);
  if (resp.status == 'connected'){
    testAPI();
  } else if(resp.status == 'unauthorized'){
    $("#status").html("Please log in this app");
  }else {
    $("#status").html("Please log in Facebook");
  }
}

//check the state using FB SDK
var checkLoginState = function(){
  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}

//loading FB SDK async
window.fbAsyncInit = function() {
  FB.init({
    appId      : '299939356796672',
    xfbml      : true,
    version    : 'v2.3'
  });
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

//Test a simple request to the API
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}


