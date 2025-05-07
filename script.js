// Reservation popup messages
const reservations = [
  'Someone in Bronx, NY just reserved a 2018 Chrysler 300.',
  '5 people are viewing the 2022 Hyundai Sonata right now.',
  'A customer in Queens just booked a Mazda CX-9 Grand Touring.',
  '2 people browsing the 2017 Nissan Altima.',
  'A Brooklyn client just locked in a Chrysler 300S for the weekend.'
];

let currentReservationIndex = 0;
const reservationText = document.getElementById('reservation-text');

// Cycle popup messages every 5 seconds
setInterval(() => {
  currentReservationIndex = (currentReservationIndex + 1) % reservations.length;
  reservationText.textContent = reservations[currentReservationIndex];
}, 5000);

// Smooth scroll to availability section
function scrollToAvailability() {
  const availabilitySection = document.querySelector('.date-picker');
  availabilitySection.scrollIntoView({ behavior: 'smooth' });
}

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial-slider blockquote');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((quote, i) => {
    quote.classList.toggle('active', i === index);
  });
}

// Initialize first testimonial
showTestimonial(currentTestimonial);

// Cycle testimonials every 6 seconds
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 6000);

// Parallax scroll effect on hero background
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});