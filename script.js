document.getElementById('inquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  alert(`Thank you, ${name}! Your request has been received. Our counselor will call you shortly.`);
  
  this.reset();
});