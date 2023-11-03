const signupBtn = document.getElementById('signupBtn');
const signinBtn = document.getElementById('signinBtn');
const nameField = document.getElementById('nameField');
const title = document.getElementById('title');

signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disableBtn");
    signinBtn.classList.remove("disableBtn");

}

signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disableBtn");
    signinBtn.classList.add("disableBtn");
}
