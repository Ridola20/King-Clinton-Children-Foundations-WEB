let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

setInterval(() => { plusSlides(1); }, 15000); // Auto slide every 5 seconds

function showModal(button) {
  const modal = document.getElementById("modal");
  const fullText = button.previousElementSibling.innerHTML;
  modal.style.display = "flex";
  document.querySelector(".modal .full-text").innerHTML = fullText;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
