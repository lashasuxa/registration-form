/**
 *   Mini User List
 *   App Description
 * - Add onSubmit handler on form
 * - Validate input values
 * - Show error message if input is invalid
 * - Hide error message on input change
 * - Create user with input values
 * - Render user card in users container

 */

const form = document.getElementById("my-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const imageInput = document.getElementById("image");
const error = document.getElementById("error");
const users = document.getElementById("users");

const inputs = [nameInput, emailInput, imageInput];

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  input.addEventListener("input", function () {
    if (!hasAppError) return; //early exit
    error.textContent = "";
    error.classList.remove("error");
    hasAppError = false;
  });
}

// aplication variables
let hasAppError = false;

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
    hasAppError = true;
    return; //early exit
  }

  const userContainer = document.createElement("div");
  userContainer.classList.add("userContainer");
  userContainer.id = userEmail;

  const userNameTag = document.createElement("h1");
  userNameTag.textContent = userName;
  userContainer.appendChild(userNameTag);

  const userEmailTag = document.createElement("h4");
  userEmailTag.textContent = userEmail;
  userContainer.appendChild(userEmailTag);

  const userImageTag = document.createElement("img");
  userImageTag.src = userImage;
  userImageTag.classList.add("userImage");
  userContainer.appendChild(userImageTag);

  users.appendChild(userContainer);

  console.log(isValidValues);
}
