// LAZY LOADING

// Select all images and SVGs on the page
const images = document.querySelectorAll('img, svg');

// Set options for the IntersectionObserver
const options = {
  rootMargin: '0px',
  threshold: 0.1
};

// Create an IntersectionObserver object with a callback function
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.src;
      if (src) {
        image.src = src;
        image.removeAttribute('data-src');
      }
      observer.unobserve(image);
    }
  });
}, options);

// Observe each image and SVG element
images.forEach(image => {
  observer.observe(image);
});