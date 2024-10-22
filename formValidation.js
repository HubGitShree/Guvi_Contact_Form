var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();                 // Prevents the default behaviour of the form
    var isValid = true;
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError === null || nameError === void 0 ? void 0 : nameError.classList.remove("hidden");
        nameInput.classList.add("border-red-500");
        isValid = false;
    }
    else {
        nameError === null || nameError === void 0 ? void 0 : nameError.classList.add("hidden");
        nameInput.classList.remove("border-red-500");
    }
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError === null || emailError === void 0 ? void 0 : emailError.classList.remove("hidden");
        emailInput.classList.add("border-red-500");
        isValid = false;
    }
    else {
        emailError === null || emailError === void 0 ? void 0 : emailError.classList.add("hidden");
        emailInput.classList.remove("border-red-500");
    }
    // var contactInput = document.getElementById("contactNumber");
    // var contactError = document.getElementById("contactError");
    // if (contactInput.value.trim() === "") {
    //     contactError === null || contactError === void 0 ? void 0 : contactError.classList.remove("hidden");
    //     contactInput.classList.add("border-red-500");
    //     isValid = false;
    // }
    // else {
    //     contactError === null || contactError === void 0 ? void 0 : contactError.classList.add("hidden");
    //     contactInput.classList.remove("border-red-500");
    // }


    var contactInput = document.getElementById("contactNumber");
var contactError = document.getElementById("contactError");
var contactValue = contactInput.value.trim();
var isValid = true;

if (contactValue === "") {
    contactError?.classList.remove("hidden");
    contactInput.classList.add("border-red-500");
    isValid = false;
} else {
    var contactRegex = /^\d{10,}$/; // Regular expression to check for at least 10 digits
    if (!contactRegex.test(contactValue)) {
        contactError?.classList.remove("hidden");
        contactInput.classList.add("border-red-500");
        isValid = false;
    } else {
        contactError?.classList.add("hidden");
        contactInput.classList.remove("border-red-500");
    }
}
    var messageInput = document.getElementById("message");
    var messageError = document.getElementById("messageError");
    if (messageInput.value.trim() === "") {
        messageError === null || messageError === void 0 ? void 0 : messageError.classList.remove("hidden");
        messageInput.classList.add("border-red-500");
        isValid = false;
    }
    else {
        messageError === null || messageError === void 0 ? void 0 : messageError.classList.add("hidden");
        messageInput.classList.remove("border-red-500");
    }
    if (isValid) {
        submitForm();
    }
});
function submitForm() {
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contactNumber: document.getElementById("contactNumber").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    ///////////////        ///////////////////////        //////////// MOCKAPI HANDLING ///////////        ////////////////////////        ///////////////////////
    fetch('https://6715e89533bc2bfe40bb8198.mockapi.io/ContactFormSubmissions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(function (response) {
        if (response.ok) {
            alert('Form Submitted Successfully');
        }
        else {
            alert('Submission Failed');
        }
    })
        .catch(function () {
        alert('Submission Failed');
    });
}
