// Function to toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }
  // Smooth scrolling
document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('a.scroll');
  
    for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
      var target = document.querySelector(this.hash);
      var headerHeight = document.querySelector('nav').offsetHeight;
      var targetPosition = target.offsetTop - headerHeight;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var duration = 1000; // Duration in milliseconds
      var start_time = null;
  
      function animation(currentTime) {
        if (start_time === null) start_time = currentTime;
        var elapsed_time = currentTime - start_time;
        var progress = elapsed_time / duration;
        var ease = easeInOutCubic(progress);
  
        window.scrollTo(0, startPosition + distance * ease);
  
        if (elapsed_time < duration) {
          requestAnimationFrame(animation);
        }
      }
  
      // Easing function
      function easeInOutCubic(t) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      }
  
      requestAnimationFrame(animation);
    }
  });
  