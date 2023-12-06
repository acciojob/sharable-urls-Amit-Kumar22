// your code here
 document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // Get values from the form
      var nameValue = document.getElementById('name').value;
      var yearValue = document.getElementById('year').value;

      // Construct the new URL with the query string
      var newUrl = 'https://localhost:8080/?name=' + encodeURIComponent(nameValue) + '&year=' + encodeURIComponent(yearValue);

      // Update the h3 element with the new URL
      document.getElementById('url').textContent = newUrl;
    });