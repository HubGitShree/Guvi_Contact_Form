// for my learning purpose, I have created a form validation using typescript.
// https://youtu.be/30LWjhZzg50   <- refer this video for form validation

const contactForm = document.getElementById("contactForm") as HTMLFormElement;

// to not submit the page , use prevent default . 
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  // HTMLInputElement is used to get the value of the input field
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const nameError = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
    nameError?.classList.remove("hidden");
    nameInput.classList.add("border-red-500");
    isValid = false;
  } else {
    //  oprional chaining is used to check if the element is present or not 
    nameError?.classList.add("hidden");
    nameInput.classList.remove("border-red-500");
  }

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    //  refer elancharan sir's video date 17 oct 24
    emailError?.classList.remove("hidden");
    emailInput.classList.add("border-red-500");
    isValid = false;
  } else {
    emailError?.classList.add("hidden");
    emailInput.classList.remove("border-red-500");
  }

  const contactInput = document.getElementById("contactNumber") as HTMLInputElement;
  const contactError = document.getElementById("contactError");
  if (contactInput.value.trim() === "") {
    contactError?.classList.remove("hidden");
    contactInput.classList.add("border-red-500");
    isValid = false;
  } else {
    contactError?.classList.add("hidden");
    contactInput.classList.remove("border-red-500");
  }

  const messageInput = document.getElementById("message") as HTMLTextAreaElement;
  const messageError = document.getElementById("messageError");
  if (messageInput.value.trim() === "") {
    messageError?.classList.remove("hidden");
    messageInput.classList.add("border-red-500");
    isValid = false;
  } else {
    messageError?.classList.add("hidden");
    messageInput.classList.remove("border-red-500");
  }

  if (isValid) {
    submitForm();
  }
});

function submitForm() {
  const formData = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    contactNumber: (document.getElementById("contactNumber") as HTMLInputElement).value,
    subject: (document.getElementById("subject") as HTMLInputElement).value,
    message: (document.getElementById("message") as HTMLTextAreaElement).value,
  };

///////////////        ///////////////////////        //////////// MOCKAPI HANDLING ///////////        ////////////////////////        ///////////////////////
// Document link : https://mockapi.io/docs
fetch('https://6715e89533bc2bfe40bb8198.mockapi.io/ContactFormSubmissions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if (response.ok) {
      alert('Form Submitted Successfully');
    } else {
      alert('Submission Failed');
    }
  })
  .catch(() => {
    alert('Submission Failed');
  });
}
