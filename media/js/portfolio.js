// sidebar toggle
function toggleSidebar(item) {
  $(item).on('click', function() {
    $('.sidebar').toggleClass('is--open')
  })
}

// md-inputs
var mdInput = $('.md-input .form-control')

mdInput.on('focus', function(){
  $(this).parent('.md-input').addClass('is--active')
})

mdInput.on('focusout', function(){
  if (!$.trim(this.value).length) {
    $(this).parent('.md-input').removeClass('is--active')
  }
  console.log($(this).val());
});

// .card-holder

function isSeen(item) {
  // console.log($(item).length);
  var wH = $(window).height();

  for (var i = 0; i < $(item).length; i++) {
    // console.log($(item).eq(i).offset().top);
    var elem = $(item).eq(i)
    var wST = $(window).scrollTop()
//
    if ((wST + wH/2 > elem.offset().top) && (elem.offset().top + elem.height()) > (wST + wH/2)) {
      $(item).eq(i).addClass('is--active')
    } else {
      $(item).eq(i).removeClass('is--active')
    }
  }
  var wH = $(window).height();
}

// columns w equal heights
// function equalHeight(){
//   var row = $('.equal-cols');
//   var cols = $('.equal-cols > div[class*="col"]');
//   var rowHeight = row.height()
//   // var heights = []
//   for (var i = 0; i < cols.length; i++) {
//     cols.eq(i).css("height", rowHeight)
//   }
// }

$(document).ready(function(){
  console.log('hello, portfolio!');

  //footer jumping i no content
  if($('body').height() > $(window).height()) {
    $('.footer').removeClass('is--fixed')
  } else {
    $('.footer').addClass('is--fixed')
  }

  toggleSidebar('.sidebar-toggle')
  // equalHeight()
  isSeen('.card')

})

$(window).on('scroll', function(){
  isSeen('.card')
});
