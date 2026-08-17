let xp = 0;
let health = 100;
let gold = 50;
let currentweapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const buttons1 = document.querySelector("#button1");
const buttons2 = document.querySelector("#button2");    
const buttons3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

buttons1.onclick = goStore;
buttons2.onclick = goCave;
buttons3.onclick = fightDragon;

function goStore() {
    buttons1.innerText = "Buy 10 health (10 gold)";
    buttons2.innerText = "Buy weapon (30 gold)";
    buttons3.iinerText = "go to town square";
    buttons1.onclick = buyHealth;
    buttons2.onclick = buyWeapon;
    buttons3.onclick = goTown;
    text.innerText = "You enter the store.";
}

function goCave() {
    console.log("going to cave.")
}

function fightDragon() {
    console.log("fighting dragon.")
}

