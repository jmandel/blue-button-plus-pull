$(function(){

  var $window = $(window)

  // make code pretty
  window.prettyPrint && prettyPrint()

  // side bar
  setTimeout(function () {
    $('.bs-docs-sidenav').affix({
      offset: {
        top: function () { return $window.width() <= 980 ? 290 : 290 }
        , bottom: 20
      }
    })
  }, 100);

$(".diagram").each(function(i, d){
  d=$(d);
  d.text(d.text().trim());
});
window.setTimeout(function(){
  $(".diagram").sequenceDiagram({theme: 'hand'});
  }, 1);
});

