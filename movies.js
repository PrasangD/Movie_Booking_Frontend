let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
}


let slideIndex1 = 0;
showSlide();

function showSlide() {
  let i;
  let slides1 = document.getElementsByClassName("slide1");
  let dots1 = document.getElementsByClassName("dot1");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}
  slides1[slideIndex1-1].style.display = "block";
  setTimeout(showSlide, 3000); // Change image every 3 seconds

  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  dots1[slideIndex1-1].className += " active";
}