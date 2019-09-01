// Cache selectors
var lastId,
    topMenu = $("nav"),
    topMenuHeight = topMenu.outerHeight() - 10,
    // All list items navbar
    menuItems = topMenu.find("a"),
    //landing page btnDown
    otherItems = $(".bottom-center").find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to navbar items and btnDown
// scroll animation
menuItems.add(otherItems).click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 500);
  e.preventDefault();
});
// Bind to scroll
// navbar border animation
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight + 10;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});
// Menu-toggle button
$(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
                  $("header").toggleClass("show-header");
            });
      });
      // Scrolling Effect
$(window).on("scroll", function() {
          if(window.innerWidth >= 786){
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
                  $('header').addClass('black');
                  $('nav ul li a').addClass('black');
									$('.logo').addClass('white');
            }
            else {
              $('nav ul li a').removeClass('black');
              $('nav').removeClass('black');
              $('header').removeClass('black');
              $('.logo').removeClass('white');
            }
         }else{
            $('nav ul li a').removeClass('black');
            $('nav').removeClass('black');
            $('header').removeClass('black');
            $('.logo').removeClass('white');
          }
  })
