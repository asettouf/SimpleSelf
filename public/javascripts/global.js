
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

//Stack of execution function
main();
