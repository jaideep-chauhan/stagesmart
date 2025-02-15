
function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
    showTime();
}, 1000);




document.addEventListener('DOMContentLoaded', function () {
    const testimonialContent = document.querySelector('.testimonial-content');
    const speed = 2; 
    
  
    const clone = testimonialContent.cloneNode(true);
    testimonialContent.parentElement.appendChild(clone);

    let position = 0;

    function slideTestimonials() {
        position -= speed;
        if (Math.abs(position) >= testimonialContent.offsetWidth) {
            position = 0; 
        }
        testimonialContent.parentElement.style.transform = `translateX(${position}px)`;
    }

    setInterval(slideTestimonials, 20); 
});

function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = img.src; 
    modal.style.display = "flex"; 
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none"; 
}

document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.querySelector('.quote-form');
    if (quoteForm) {  
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            const emailBody = `
                Name: ${data.name}
                Email: ${data.email}
                Phone: ${data.countryCode} ${data.phone}
                Address: ${data.address}
            `;
            
            window.location.href = `mailto:styleandstage08@gmail.com?subject=Quote Request from ${data.name}&body=${encodeURIComponent(emailBody)}`;
        });
    }
});
