let elems = document.getElementsByClassName("num");

let desk = document.getElementsByClassName("desk-bg");

let level = document.getElementsByClassName(
  "mobile-confirmation--subtitle small"
);

let tNow = new Date();

let day = tNow.getDay();
let hour = tNow.getHours();
let mins = tNow.getMinutes();
let time = hour * 100 + mins;

const tSlots = [800, 1330, 1800];

const sSlots = ["08301300", "13301730", "18002230"];

elems[day - 1].classList.add("current");

if (time > tSlots[0] && time < tSlots[1]) {
  for (let i = 0; i < 8; i++) {
    elems[i + 7].innerHTML = sSlots[0][i];
    elems[i + 15].innerHTML = sSlots[0][i];
  }
} else if (time > tSlots[1] && time < tSlots[2]) {
  for (let i = 0; i < 8; i++) {
    elems[i + 7].innerHTML = sSlots[1][i];
    elems[i + 15].innerHTML = sSlots[1][i];
  }
} else {
  for (let i = 0; i < 8; i++) {
    elems[i + 7].innerHTML = sSlots[2][i];
    elems[i + 15].innerHTML = sSlots[2][i];
  }
}

var myrng = new Math.seedrandom(mins);

let randLevel = Math.ceil(myrng() * 4 + 6);

let randDesk = randLevel + "." + Math.ceil(myrng() * 15);

desk[0].innerHTML = randDesk;
