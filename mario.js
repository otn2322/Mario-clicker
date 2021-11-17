var coins = 0;

var peach_value_each = 5;
var peachamount = 0;
var peachincrease = 0;
var peach_price = 10;

var shyguy_value_each = 100;
var shyguy_amount = 0;
var shyguyincrease = 0;
var shyguy_price = 1000;

var oneup_increase = 5;
var coinpower = 1;
var oneup_price = 500;

var ghost_value_each = 1000;
var ghost_amount = 0;
var ghost_increase = 0;
var ghost_price = 10000;

var toad_value_each = 5000;
var toad_amount = 0;
var toad_increase = 0;
var toad_price = 100000;

var mario_value_each = 2000;
var mario_amount = 0;
var mario_increase = 0;
var mario_price = 500000;

var bowserjr_value_each = 4000;
var bowserjr_amount = 0;
var bowserjr_increase = 0;
var bowserjr_price = 2500000;

var donkeykong_value_each = 40000;
var donkeykong_amount = 0;
var donkeykong_increase = 0;
var donkeykong_price = 10000000;



document.getElementById("peach_price").innerHTML = peach_price + "$";
document.getElementById("shyguy_price").innerHTML = shyguy_price + "$";
document.getElementById("oneup_price").innerHTML = oneup_price + "$";
document.getElementById("ghost_price").innerHTML = ghost_price + "$";
document.getElementById("toad_price").innerHTML = toad_price + "$";
document.getElementById("mario_price").innerHTML = mario_price + "$";
document.getElementById("bowserjr_price").innerHTML = bowserjr_price + "$";
document.getElementById("donkeykong_price").innerHTML = donkeykong_price + "$";




var intervalId = window.setInterval(function(){
    // kode som du vil skal kjøres hvert sekund feks, "update"
    document.getElementById("numscore").innerHTML = coins;
}, 1);


var intervalId2 = window.setInterval(function(){
    // leger verdi ifra peach in til coins
    peachincrease = peachamount * peach_value_each;
    coins += peachincrease;

    donkeykong_increase = donkeykong_amount * donkeykong_value_each;
    coins += donkeykong_increase;
}, 1000);


var intervalId4 = window.setInterval(function(){
    // Gjør at coinpower blir ilag med coins
    coins += coinpower;

    ghost_increase = ghost_amount * ghost_value_each;
    coins += ghost_increase;

    shyguyincrease = shyguy_amount * shyguy_value_each;
    coins += shyguyincrease;

}, 6000);

var intervalId6 = window.setInterval(function(){
    // leger verdi ifra toad in til coins
    toad_increase = toad_amount * toad_value_each;
    coins += toad_increase;
}, 3000);

var intervalId7 = window.setInterval(function(){
    // leger verdi ifra mario in til coins
    mario_increase = mario_amount * mario_value_each;
    coins += mario_increase;

    bowserjr_increase = bowserjr_amount * bowserjr_value_each;
    coins += bowserjr_increase;

}, 2000);


function amount_bought() {
    document.getElementById("peachamout").innerHTML = peachamount;
}


function coinbutton() {
   
   coins += coinpower;
   
}

function peach() {
if (coins >= peach_price){
    peachamount += 1;
    coins -= peach_price;
    peach_price *= 3;
    document.getElementById("peach_price").innerHTML = peach_price + "$";
    
}



}

function shyguy() {
if (coins >= shyguy_price) {
    shyguy_amount += 1;
    coins -= shyguy_price;
    shyguy_price *= 5;
    document.getElementById("shyguy_price").innerHTML = shyguy_price + "$";

}


}

function oneup() {
if (coins >= oneup_price) {
    coinpower += oneup_increase;
    coins -= oneup_price;
    oneup_price *= 10;
    document.getElementById("oneup_price").innerHTML = oneup_price + "$";

    
}
}

function ghost() {
    if (coins >= ghost_price) {
        ghost_amount += 1; 
        coins -= ghost_price;
        ghost_price *= 2;
        document.getElementById("ghost_price").innerHTML = ghost_price + "$";

    }
}

function toad() {
    if (coins >= toad_price) {
        toad_amount += 1;
        coins -= toad_price;
        toad_price *= 2;
        document.getElementById("toad_price").innerHTML = toad_price + "$"
    }
}

function mario() {
    if (coins >= mario_price) {
        mario_amount += 1;
        coins -= mario_price;
        mario_price *= 2;
        document.getElementById("mario_price").innerHTML = mario_price + "$"
    }
}

function bowserjr(){
    if (coins >= bowserjr_price) {
        bowserjr_amount += 1;
        coins -= bowserjr_price;
        bowserjr_price *= 2;
        document.getElementById("bowserjr_price").innerHTML = bowserjr_price + "$"
    }
}

function donkeykong() {
    if (coins >= donkeykong_price) {
        donkeykong_amount += 1; 
        coins -= donkeykong_price;
        donkeykong_price *= 2;
        document.getElementById("donkeykong_price").innerHTML = donkeykong_price + "$";

    }
}