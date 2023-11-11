const mainSection = document.querySelector("main");
const thankYouSection = document.querySelector(".thank-you");
const submitButton = document.querySelector(".submit-btn");
const numbers = document.querySelectorAll(".rate");
const selectionText = document.querySelector(".final-text");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numbers.forEach((otherNumber) => {
      otherNumber.classList.remove("active");
    });

    number.classList.add("active");

    selectionText.textContent =
      "You selected " + number.innerHTML + " out of 5";
  });
});

submitButton.addEventListener("click", () => {
  mainSection.style.display = "none";
  thankYouSection.style.display = "flex";
});
