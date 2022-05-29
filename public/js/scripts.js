// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });
//navbar
(function ($) {
  "use strict";

  var $navbar = $("#navbar"),
    y_pos = $navbar.offset().top,
    height = $navbar.height();

  $(document).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > y_pos + height) {
      $navbar.addClass("navbar-fixed").animate({
        top: 0
      });
    } else if (scrollTop <= y_pos) {
      $navbar.removeClass("navbar-fixed").clearQueue().animate({
        top: "-48px"
      }, 0);
    }
  });

  // Timeline
  (function () {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();

  //Contact Us Form
  const btn = document.getElementById('send-btn');
  const btn1 = document.getElementById('send-btn');

  btn.addEventListener('click', function handleClick(event) {
    // 👇️ if you are submitting a form (prevents page reload)
    event.preventDefault();

    const firstNameInput = document.getElementById('first_name');
    const firstNameInput1 = document.getElementById('name_email');
    const firstNameInput2 = document.getElementById('name_contact');
    const firstNameInput3 = document.getElementById('name_message');

    // Send value to server
    console.log(firstNameInput.value);
    console.log(firstNameInput1.value);
    console.log(firstNameInput2.value);
    console.log(firstNameInput3.value);

    // 👇️ clear input field
    firstNameInput.value = '';
    firstNameInput1.value = '';
    firstNameInput2.value = '';
    firstNameInput3.value = '';
  });

  btn1.addEventListener('click', function handleClick(event) {
    // 👇️ if you are submitting a form (prevents page reload)
    event.preventDefault();

    const firstNameInput = document.getElementById('first_name');
    const firstNameInput1 = document.getElementById('name_email');
    const firstNameInput2 = document.getElementById('name_contact');
    const firstNameInput3 = document.getElementById('name_message');

    // Send value to server
    console.log(firstNameInput.value);
    console.log(firstNameInput1.value);
    console.log(firstNameInput2.value);
    console.log(firstNameInput3.value);

    // 👇️ clear input field
    firstNameInput.value = '';
    firstNameInput1.value = '';
    firstNameInput2.value = '';
    firstNameInput3.value = '';
  });






})(jQuery, undefined);
// Smooth Scroll Function
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

