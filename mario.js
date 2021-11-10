var coins = 100000;

var peach_value_each = 5;
var peachamout = 0;
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


document.getElementById("peach_price").innerHTML = peach_price + "$";
document.getElementById("shyguy_price").innerHTML = shyguy_price + "$";
document.getElementById("oneup_price").innerHTML = oneup_price + "$";
document.getElementById("ghost_price").innerHTML = ghost_price + "$";




var intervalId = window.setInterval(function(){
    // kode som du vil skal kjøres hvert sekund feks, "update"
    document.getElementById("numscore").innerHTML = coins;
}, 1);


var intervalId2 = window.setInterval(function(){
    // leger verdi ifra peach in til coins
    peachincrease = peachamout * peach_value_each;
    coins += peachincrease;
}, 1000);


var intervalId3 = window.setInterval(function(){
    // leger verdi ifra shyguy in til coins
    shyguyincrease = shyguy_amount * shyguy_value_each;
    coins += shyguyincrease;

}, 6000);


var intervalId4 = window.setInterval(function(){
    // Gjør at coinpower blir ilag med coins
    coins += coinpower;
}, 6000);

var intervalId5 = window.setInterval(function(){  
    // 
    ghost_increase = ghost_amount * ghost_value_each;
    coins += ghost_increase;
   }, 6000);



function coinbutton() {
   
   coins += coinpower;
   
}

function peach() {
if (coins >= peach_price){
    peachamout += 1;
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
