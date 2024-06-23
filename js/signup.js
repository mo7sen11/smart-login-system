// HTML Elements
var userPassword = document.getElementById("userPassword");
var userEmail = document.getElementById("userEmail");
var userName = document.getElementById("userName");
var signUpBtn = document.getElementById("signUpBtn");
var backLogin = document.getElementById("backLogin");
var showPassword=document.getElementById('showPassword');

// Variables
var emailRegex = /^[a-zA-Z0-9]{3,}@(gmail|yahoo)\.com$/;
var passwordRegex = /\w{8,}/;
var nameRegex = /^[^0-9][a-zA-Z_]{2,10}[0-9]*$/;
var usersList;

// Get users from local storage
if (localStorage.getItem("user") != null) {
  usersList = JSON.parse(localStorage.getItem("user"));
} else {
  usersList = [];
}

// Function to add a new user
function addUser() {
  var user = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPassword: userPassword.value
  };
  usersList.push(user);
  localStorage.setItem("user", JSON.stringify(usersList));
  clearInputs();
}

// Function to clear input fields
function clearInputs() {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
  userName.classList.remove('is-valid');
  userEmail.classList.remove('is-valid');
  userPassword.classList.remove('is-valid');
}

// Function to check if input fields are empty
function checkEmptyInputs() {
  if (
    userName.value == "" ||
    userEmail.value == "" ||
    userPassword.value == ""
  ) {
    document
      .querySelector(".emptyError")
      .classList.replace("d-none", "d-block");
    return false;
  } else {
    document
      .querySelector(".emptyError")
      .classList.replace("d-block", "d-none");
    return true;
  }
}

// Function to check if email already exists
function checkEmailExist(email) {
  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].userEmail == email) {
      return true;
    }
  }
  return false;
}

// Event listener for back to login button
backLogin.addEventListener("click", function () {
  window.location.replace('https://mo7sen11.github.io/smart-login-system/index.html');
});

// Function to validate email format
function checkValidEmail(email) {
  if (emailRegex.test(email)) {
    document
      .querySelector(".emailValidation")
      .classList.replace("d-block", "d-none");
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
  } else {
    document
      .querySelector(".emailValidation")
      .classList.replace("d-none", "d-block");
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
  }
}

// Event listener for email input field
userEmail.addEventListener("blur", function () {
  checkValidEmail(userEmail.value);
});

// Function to validate password format
function checkValidPassword(password) {
  if (passwordRegex.test(password)) {
    document
      .querySelector(".passwordValidation")
      .classList.replace("d-block", "d-none");
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
  } else {
    document
      .querySelector(".passwordValidation")
      .classList.replace("d-none", "d-block");
    userPassword.classList.add("is-invalid");
    userPassword.classList.remove("is-valid");
  }
}

// Event listener for password input field
userPassword.addEventListener("blur", function () {
  checkValidPassword(userPassword.value);
});

// Function to validate name format
function checkValidName(name) {
  if (nameRegex.test(name)) {
    document
      .querySelector(".nameValidation")
      .classList.replace("d-block", "d-none");
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
  } else {
    document
      .querySelector(".nameValidation")
      .classList.replace("d-none", "d-block");
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
  }
}

// Event listener for name input field
userName.addEventListener("blur", function () {
  checkValidName(userName.value);
});

// Event listener for sign up button
signUpBtn.addEventListener("click", function () {
  if (checkEmptyInputs() == true) {
    if (checkEmailExist(userEmail.value) == false) {
      addUser();
      document.querySelector(".success").classList.replace("d-none", "d-block");
      document.querySelector(".existError").classList.replace("d-block", "d-none");
      // To hide Success notification
      setTimeout(function() {
        document.querySelector(".success").classList.replace("d-block", "d-none");
        window.location.replace('https://mo7sen11.github.io/smart-login-system/index.html');
      }, 2000);
      
    } else {
      document.querySelector(".existError").classList.replace("d-none", "d-block");
      document.querySelector(".success").classList.replace("d-block", "d-none");
    }
  }
});
//Event listener for show password button
showPassword.addEventListener('click',function(){
    if(showPassword.checked==true)
        {
            userPassword.setAttribute('type','text')
        }
        else
        {
            userPassword.setAttribute('type','password')
        }
})