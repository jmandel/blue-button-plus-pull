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

  (function(){

    function affixBust() {
      var needh = $(".bs-docs-sidenav").height() + 30;
      var h = $(window).height();
      if (h < needh) {
        $(".bs-docs-sidenav").addClass("affix-bust");
      } else {
        $(".bs-docs-sidenav").removeClass("affix-bust");
      }
    };

    $(window).on("resize", affixBust);
    affixBust();

  })();

});

