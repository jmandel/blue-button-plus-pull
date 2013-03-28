$(function(){

  var $window = $(window)

  // make code pretty
  window.prettyPrint && prettyPrint()

  // add-ons
  $('.add-on :checkbox').on('click', function () {
    var $this = $(this)
    , method = $this.attr('checked') ? 'addClass' : 'removeClass'
    $(this).parents('.add-on')[method]('active')
  })
});

