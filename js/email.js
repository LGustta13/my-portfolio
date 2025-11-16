window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('service_elybqb7', 'template_8894ixp', this)
        .then(() => {
            alert('SUCCESS!');
        }, (error) => {
            alert('FAILED...', error);
        });
  });
}