// Navbar
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//       $(".navbar").addClass("navbar-scrolled");
//     } else {
//       $(".navbar").removeClass("navbar-scrolled");
//     }
//   });

// Navbar


// Testimonials
const wrapper = document.querySelector(".testimonial-wrapper");
const slides = document.querySelectorAll(".testimonial-slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let index = 0;
const totalSlides = slides.length;

// Move slider function
function moveSlider(direction) {
    if (direction === "next") {
        index = (index + 1) % totalSlides;
    } else {
        index = (index - 1 + totalSlides) % totalSlides;
    }

    let translateValue = index * -50; // Moves by 50% for 2 slides
    if (window.innerWidth <= 768) {
        translateValue = index * -100; // Moves by 100% for 1 slide on small screens
    }

    wrapper.style.transform = `translateX(${translateValue}%)`;
}

// Event Listeners
rightArrow.addEventListener("click", () => moveSlider("next"));
leftArrow.addEventListener("click", () => moveSlider("prev"));

// Autoplay Function
let autoSlide = setInterval(() => moveSlider("next"), 3000);

// Pause autoplay on hover
document.querySelector(".testimonial-slider-container").addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

document.querySelector(".testimonial-slider-container").addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => moveSlider("next"), 3000);
});


// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
// 