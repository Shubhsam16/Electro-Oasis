// JavaScript code for slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("nav-dot");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  // Set timeout for the next slide
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Add event listener to navigation dots
let navDots = document.getElementsByClassName("nav-dot");
for (let i = 0; i < navDots.length; i++) {
  navDots[i].addEventListener("click", function() {
    let currentSlide = slideIndex;
    slideIndex = i + 1;
    showSlides();
  });
}

