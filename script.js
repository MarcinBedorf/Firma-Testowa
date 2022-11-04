const contactBtn = document.querySelectorAll(".contact-button");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const navContactBtn = document.querySelector("#nav-contact-btn");

for (i = 0; i < contactBtn.length; i++) {
    contactBtn[i].addEventListener('click', activatePopup);
    closeBtn.addEventListener('click', removePopup);
    navContactBtn.addEventListener('click', activatePopup);
}

function activatePopup() {
    popup.classList.add("active");
}

function removePopup() {
    popup.classList.remove("active")
}

const form = document.querySelector('form');

form.querySelector("button").addEventListener('click', function () {
    form.requestSubmit();
})

form.addEventListener('submit', function (e) {
    console.log("Submitting form");
    popup.classList.remove("active");
    form.reset();
})