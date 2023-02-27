/**
 *   Mini User List
 *   App Description
 * - Add onSubmit handler on form
 * - Validate input values
 * - Show error message if input is invalid
 * - Hide error message on input change
 * - Create user with input values
 * - Render user card in users container
 * - Allow remove && star/unstar functionality on user card
 * - Allow creation of user card with pre-defined array
 */

const form = document.getElementById("my-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const imageInput = document.getElementById("image");
const error = document.getElementById("error");

form.addEventListener("submit", onsubmit);

//Helper Functions
function isValidInput(name, email, image) {
  if (name == "") {
    return false;
  }

  if (!email.includes("@")) {
    return false;
  }
  if (!image.includes("https")) {
    return false;
  }
  return true;
}

//form submit handler

function onsubmit(event) {
  event.preventDefault();

  const userName = nameInput.value;
  const userEmail = emailInput.value;
  const userImage = imageInput.value;

  const isValidValues = isValidInput(userName, userEmail, userImage);

  if (!isValidValues) {
    error.textContent = "Please fill inputs with valid values";
    error.classList.add("error");
  }

  console.log(isValidValues);
}
