const username = "Taylor";  // change the value in quotes to be your name

let names = document.getElementsByClassName("name");
let namesLength = names.length - 1;

for (let i = 0; i <= namesLength; i++) {
    names[i].textContent = `${username[0].toUpperCase()}${username.slice(1,)} `;
}

