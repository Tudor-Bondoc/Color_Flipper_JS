const colors = ["red", "blue", "yellow", "green", "#e3dcdc"];
const btn = document.getElementById("buton");
const color = document.querySelector(".current-clr");
function change_clr() {
    const randomNumber = getRandomNumber(0, 4);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}
btn.addEventListener("click", change_clr);
function getRandomNumber (min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

const bs = document.getElementById("bs");
bs.addEventListener("click", function() {
    const user = document.getElementById("user");
    const userColor = user.value;
    document.body.style.backgroundColor = userColor;
    color.textContent = userColor;
});