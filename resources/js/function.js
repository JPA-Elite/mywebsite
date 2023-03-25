const root = document.documentElement;
const eye = document.getElementById("eyeball");
const beam = document.getElementById("beam");
const passwordInput = document.getElementById("password");
const fname = document.getElementById("fname");
const sname = document.getElementById("sname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const submit = document.getElementById("submit");
const input = document.querySelectorAll(".input-wrapper input");
const popover = document.querySelectorAll(".popover");
const bg_music = document.getElementById("myAudio");
const beep = document.getElementById("beep");
const login = document.getElementById("login");
var mailformat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
root.addEventListener("mousemove", (e) => {
  let rect = beam.getBoundingClientRect();
  let mouseX = rect.right + rect.width / 2;
  let mouseY = rect.top + rect.height / 2;
  let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
  let degrees = rad * (20 / Math.PI) * -1 - 350;

  root.style.setProperty("--beamDegrees", `${degrees}deg`);
});

eye.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("show-password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.style.fontWeight = "bold";
  passwordInput.focus();
});

input.forEach((e) => {
  e.addEventListener("focus", function () {
    popover.forEach((pop) => {
      pop.style.display = "none";
    });
  });

  e.addEventListener("click", function () {
    Beep();
  });
});
email.addEventListener("keyup", (e) => {
  if (!email.value.match(mailformat)) {
    email.style.borderColor = "red";
  } else {
    email.style.borderColor = "green";
  }
});
submit.addEventListener("click", (e) => {
  Login();
  if (fname.value == "" && fname.value.length <= 25) {
    fname.parentElement.children[1].style.display = "block";
    fname.parentElement.children[1].innerHTML = "Input this field!";
    e.preventDefault();
  }
  if (fname.value != "" && fname.value.length > 25) {
    fname.parentElement.children[1].style.display = "block";
    fname.parentElement.children[1].innerHTML =
      "Too large exceeds 25 characters!";
    e.preventDefault();
  }
  if (sname.value == "" && sname.value.length <= 25) {
    sname.parentElement.children[1].style.display = "block";
    sname.parentElement.children[1].innerHTML = "Input this field!";
    e.preventDefault();
  }
  if (sname.value != "" && sname.value.length > 25) {
    sname.parentElement.children[1].style.display = "block";
    sname.parentElement.children[1].innerHTML =
      "Too large exceeds 25 characters!";
    e.preventDefault();
  }

  if (email.value == "") {
    email.parentElement.children[1].style.display = "block";
    email.parentElement.children[1].innerHTML = "Input this field!";
    e.preventDefault();
  }
  if (!email.value.match(mailformat) && email.value != "") {
    email.parentElement.children[1].style.display = "block";
    email.parentElement.children[1].innerHTML = "Invalid Email";
    e.preventDefault();
  }
  if (address.value == "") {
    address.parentElement.children[1].style.display = "block";
    e.preventDefault();
  }

  if (password.value == "") {
    password.parentElement.children[1].style.display = "block";
    password.parentElement.children[1].innerHTML = "Input this field!";
    e.preventDefault();
  }

  if (cpassword.value == "") {
    cpassword.parentElement.children[1].style.display = "block";
    cpassword.parentElement.children[1].innerHTML = "Input this field!";
    e.preventDefault();
  }
  if (password.value != cpassword.value) {
    password.parentElement.children[1].style.display = "block";
    cpassword.parentElement.children[1].style.display = "block";
    password.parentElement.children[1].innerHTML = "Password not match!";
    cpassword.parentElement.children[1].innerHTML = "Password not match!";
    e.preventDefault();
  }
});

function Theme() {
  bg_music.volume = 0.8;
}

// let switch_count = 0;
var btn = document.getElementById("button_music");
btn.addEventListener("click", function() {
    Theme();
    bg_music.play();
 
});

function Beep() {
  beep.volume = 0.8;
  beep.play();
}

function Login() {
  login.volume = 0.1;
  login.play();
}

Theme();
