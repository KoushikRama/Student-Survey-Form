// Name: Koushik Rama
// G#: G01508456
  
  
document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("surveyForm");

form.onsubmit = function(e) {
    e.preventDefault(); // Prevent default form submission
    let errors = [];

    // Name validation: only letters
    const name = document.getElementById("fullname");
    if(!/^[A-Za-z\s]+$/.test(name.value.trim())) {
    errors.push("Full Name must contain only letters.");
    name.value = "";
    }

    // Street validation: letters, numbers, spaces, #, - , .
    const street = document.getElementById("street");
    if(!/^[A-Za-z0-9\s#\.-]+$/.test(street.value.trim())) {
    errors.push("Street Address contains invalid characters.");
    street.value = "";
    }

    // Zip validation: numbers only (optional)
    const zip = document.getElementById("zip");
    if(zip.value.trim() !== "" && !/^\d+$/.test(zip.value.trim())) {
    errors.push("Zip code must contain only numbers.");
    zip.value = "";
    }

    // Email validation
    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value.trim())) {
    errors.push("Email address is invalid.");
    email.value = "";
    }

    // Checkbox validation: at least 2 checked
    const checkboxes = document.querySelectorAll('input[name="liked"]:checked');
    if(checkboxes.length < 2) {
    errors.push("Please select at least two things you liked about the campus.");
    document.querySelectorAll('input[name="liked"]').forEach(cb => cb.checked = false);
    }

    // Radio validation: one must be selected
    const radioSelected = document.querySelector('input[name="interest"]:checked');
    if(!radioSelected) {
    errors.push("Please select how you became interested in the university.");
    }

    // Show errors if any
    if(errors.length > 0) {
    alert(errors.join("\n"));
    return false;
    }

    // If everything is valid, you can submit the form or show success
    alert("Form submitted successfully!");
    form.reset(); // optional: clear form after success
};
});
