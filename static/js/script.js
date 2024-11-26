let slideIndex = 1;

try {
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

  setInterval(() => { plusSlides(1); }, 10000); // Auto slide every 10 seconds

} catch (error) {
  console.log("Error running slide JS script: " + error);
}

try {
  function showModal(button) {
    const modal = document.getElementById("modal");

    // Get the header text relative to the clicked button
    const card = button.closest(".card");
    const header = card.querySelector(".title").innerHTML;
    const fullText = card.querySelector(".write-up").innerHTML; 

    modal.style.display = "flex";
    document.querySelector(".modal .full-text").innerHTML = fullText;
    document.querySelector(".modal .header").innerHTML = header;
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  } 
} catch (error) {
  console.log("Error running text Modal JS script: " + error);
}

let toggle_state = "OFF";
try {
  function toggleMenu() {
    const menu = document.querySelector('header .wrapper .two nav ul');
    var closebtn = document.querySelector('.menu-toggle svg.close-icon');
    var menubtn = document.querySelector('.menu-toggle svg.menu-icon');

    if (toggle_state === "OFF") {
      menu.classList.add('show');  // Show the list
      toggle_state = "ON";
      closebtn.style.display = "block";
      menubtn.style.display = "none";
    } else {
      menu.classList.remove('show');  // Hide the list
      toggle_state = "OFF";
      closebtn.style.display = "none";
      menubtn.style.display = "block";
    }
  }
} catch (error) {
  console.log("Error running Menu Toggle JS script: " + error);
}

try {
  // PRELOADER
  window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none"; 
  });
} catch (error) {
  console.log("Error running Preloader JS script: " + error);
}


try {
  // Close modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
} catch (error) {
 console.log("Error running Preloader JS script: ");
}