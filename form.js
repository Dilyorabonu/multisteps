let currentStep = 1;
let selectedPlan = "";
let billingOption = "Monthly";
let selectedAddOns = [];

function nextStep(step) {
  document.getElementById(`step${currentStep}`).classList.add("hidden");
  document.getElementById(`step${step}`).classList.remove("hidden");
  currentStep = step;
}

function prevStep(step) {
  document.getElementById(`step${currentStep}`).classList.add("hidden");
  document.getElementById(`step${step}`).classList.remove("hidden");
  currentStep = step;
}

function selectPlan(plan) {
  selectedPlan = plan;
  document.querySelectorAll(".step #step2 div").forEach((div) => {
    div.classList.remove("border-purple-600");
    div.classList.add("border-gray-300");
  });
  event.target.closest("div").classList.add("border-purple-600");
}

function setBilling(billing) {
  billingOption = billing;
}

function toggleAddon(addon) {
  if (selectedAddOns.includes(addon)) {
    selectedAddOns = selectedAddOns.filter((item) => item !== addon);
  } else {
    selectedAddOns.push(addon);
  }
}

function submitForm() {
  const summary = `
        Selected Plan: ${selectedPlan} (${billingOption})
        Add-Ons: ${selectedAddOns.join(", ")}
    `;
  document.getElementById("summary").innerText = summary;
}
