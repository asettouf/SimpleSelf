//Change the HTML value of the status div
var statusChangeCallback = function(resp){
  console.log("statusChangeCallback");
  console.log(resp);
  var call = "";
  $("#btnapiCall").on('click', function(ev){
    ev.preventDefault();
    call = $("#apiCall").val();
  });
  if (resp.status == 'connected'){
    testAPI(call);
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

//init script provided by Facebook
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

//Test a simple request to the API
var testAPI = function(callApi) {
  console.log('Welcome!  Fetching your information.... ');
  realCall = (callApi == "" ? "/me": callApi);
  FB.api(realCall, function(response) {
    console.log(realCall);
    $("#status").html(response.name);
  });
}

var captureFBCall = function() {

}