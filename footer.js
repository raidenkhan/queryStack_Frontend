const copyrightDate = document.querySelector(".copyright-date");

let today = new Date();
copyrightDate.textContent = today.getFullYear();
