// Get all the image elements within the gallery
const imgs = document.querySelectorAll('.image-gallery .image-box img');

// Add an event listener to each image element
imgs.forEach(img => {
  img.addEventListener('click', function() {
    // Get the modal window element
    const modal = document.getElementById('myModal');

    // Get the image element inside the modal window
    const modalImage = document.getElementById('img01');

    // Get the caption element inside the modal window
    const captionText = document.getElementById('caption');

    // Set the source of the image element to the clicked image
    modalImage.src = this.src;

    // Set the caption of the modal window to the alt text of the clicked image
    captionText.innerHTML = this.alt;

    // Display the modal window
    modal.style.display = 'block';

    // Add an event listener to the close button to close the modal window
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    // Add an event listener to the modal window to close it when the user clicks outside of it
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
});
