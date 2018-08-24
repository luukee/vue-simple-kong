import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueAnimateNumber from 'vue-animate-number'

Vue.use(Vuetify, {
  theme: {
    primary: '#062f4c',
    secondary: '#294b62',
    accent: '#8c9eff',
    error: '#b71c1c',
    success: "#17A956"
  }
})

Vue.use(VueAnimateNumber)

new Vue({
  el: '#app',
  render: h => h(App),
});

// slick slider http://kenwheeler.github.io/slick/
$(document).ready(function(){
  $('.slider').slick({
      arrows: false,
      speed: 15000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
  });
});

// counter https://codepen.io/hi-im-si/pen/uhxFn
var a = 0;
$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});

// enable animations when in viewport: check if the element is in view https://codepen.io/SitePoint/pen/warKXE
var $animation_elements = $('.hidden-animation');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('fade-in-element');
    } else {
      $element.removeClass('fade-in-element');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
