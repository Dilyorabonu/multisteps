document.addEventListener("DOMContentLoaded", function () {
  const steps = Array.from(document.querySelectorAll(".step"));
  const nextBtn = document.querySelectorAll(".next-step");
  const prevBtn = document.querySelectorAll(".prev-step");
  const form = document.querySelector("form");

  let currentStep = 0;

  // Show the current step
  function showStep(step) {
    steps.forEach((item, index) => {
      if (index === step) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }

  // Move to the next step
  nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
      if (validateForm()) {
        currentStep++;
        if (currentStep > steps.length - 1) {
          currentStep = steps.length - 1;
          form.submit();
        } else {
          showStep(currentStep);
        }
      }
    });
  });

  // Move to the previous step
  prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
      currentStep--;
      if (currentStep < 0) {
        currentStep = 0;
      } else {
        showStep(currentStep);
      }
    });
  });

  // Form validation (basic example)
  function validateForm() {
    const inputs = steps[currentStep].querySelectorAll("input");
    let valid = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.classList.add("border-red-500");
        valid = false;
      } else {
        input.classList.remove("border-red-500");
      }
    });

    return valid;
  }

  // Initialize form
  showStep(currentStep);
});

document.querySelectorAll(".plan-option").forEach((option) => {
  option.addEventListener("click", function () {
    document.querySelectorAll(".plan-option").forEach((item) => {
      item.classList.remove("border-blue-700", "bg-blue-50");
    });
    this.classList.add("border-blue-700", "bg-blue-50");
  });
});

document
  .getElementById("billing-toggle")
  .addEventListener("change", function () {
    if (this.checked) {
      // Code to handle yearly pricing
    } else {
      // Code to handle monthly pricing
    }
  });

const selectedAddons = [];

document
  .querySelectorAll('.step input[type="checkbox"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const addonName = this.nextElementSibling.querySelector("h3").innerText;
      if (this.checked) {
        selectedAddons.push(addonName);
      } else {
        const index = selectedAddons.indexOf(addonName);
        if (index > -1) {
          selectedAddons.splice(index, 1);
        }
      }
      console.log(selectedAddons); // For debugging, remove in production
    });
  });

document.querySelector(".next-step").addEventListener("click", function () {
  // Get input fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  // Get error message elements
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");

  // Validation flags
  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.classList.remove("hidden");
    nameInput.classList.add("border-red-500");
    valid = false;
  } else {
    nameError.classList.add("hidden");
    nameInput.classList.remove("border-red-500");
  }

  // Validate Email
  if (emailInput.value.trim() === "") {
    emailError.classList.remove("hidden");
    emailInput.classList.add("border-red-500");
    valid = false;
  } else {
    emailError.classList.add("hidden");
    emailInput.classList.remove("border-red-500");
  }

  // Validate Phone
  if (phoneInput.value.trim() === "") {
    phoneError.classList.remove("hidden");
    phoneInput.classList.add("border-red-500");
    valid = false;
  } else {
    phoneError.classList.add("hidden");
    phoneInput.classList.remove("border-red-500");
  }

  // Proceed to next step if valid
  if (valid) {
    document.querySelector(".step").classList.add("hidden"); // Hide current step
    document.querySelectorAll(".step")[1].classList.remove("hidden"); // Show next step
  }
});
