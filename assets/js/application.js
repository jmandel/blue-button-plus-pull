$(function(){

  var $window = $(window)

  // make code pretty
  window.prettyPrint && prettyPrint()

  // side bar
  setTimeout(function () {
    $('.bs-docs-sidenav').affix({
      offset: {
        top: function () { return $window.width() <= 980 ? 290 : 210 }
        , bottom: 20
      }
    })
  }, 100);

});

