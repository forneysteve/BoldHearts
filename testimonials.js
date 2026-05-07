// Testimonials carousel functionality

let currentTestimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const totalTestimonials = testimonialCards.length;

// Show specific testimonial
function showTestimonial(index) {
  // Remove active class from all cards and dots
  testimonialCards.forEach(card => card.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Add active class to current card and dot
  testimonialCards[index].classList.add('active');
  dots[index].classList.add('active');
  
  currentTestimonialIndex = index;
}

// Navigate to specific testimonial
function currentTestimonial(index) {
  showTestimonial(index);
}

// Next testimonial
function nextTestimonial() {
  let index = currentTestimonialIndex + 1;
  if (index >= totalTestimonials) {
    index = 0;
  }
  showTestimonial(index);
}

// Previous testimonial
function prevTestimonial() {
  let index = currentTestimonialIndex - 1;
  if (index < 0) {
    index = totalTestimonials - 1;
  }
  showTestimonial(index);
}

// Add event listeners to buttons
document.querySelector('.testimonial-next').addEventListener('click', nextTestimonial);
document.querySelector('.testimonial-prev').addEventListener('click', prevTestimonial);

// Auto-rotate testimonials every 8 seconds
setInterval(nextTestimonial, 8000);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    nextTestimonial();
  } else if (e.key === 'ArrowLeft') {
    prevTestimonial();
  }
});
