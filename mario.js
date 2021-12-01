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
var oneup_amount = 0;

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

var bowserjr_value_each = 10000;
var bowserjr_amount = 0;
var bowserjr_increase = 0;
var bowserjr_price = 5000000;

var donkeykong_value_each = 50000;
var donkeykong_amount = 0;
var donkeykong_increase = 0;
var donkeykong_price = 10000000;

var netherbomb_price = 1000000;





document.getElementById("peach_price").innerHTML = peach_price + "$";
document.getElementById("shyguy_price").innerHTML = shyguy_price + "$";
document.getElementById("oneup_price").innerHTML = oneup_price + "$";
document.getElementById("ghost_price").innerHTML = ghost_price + "$";
document.getElementById("toad_price").innerHTML = toad_price + "$";
document.getElementById("mario_price").innerHTML = mario_price + "$";
document.getElementById("bowserjr_price").innerHTML = bowserjr_price + "$";
document.getElementById("donkeykong_price").innerHTML = donkeykong_price + "$";
document.getElementById("netherbomb_price").innerHTML = netherbomb_price + "$";

document.getElementById("peach_amount").innerHTML = peachamount;
document.getElementById("shyguy_amount").innerHTML = shyguy_amount;
document.getElementById("oneup_amount").innerHTML = oneup_amount;
document.getElementById("ghost_amount").innerHTML = ghost_amount;
document.getElementById("toad_amount").innerHTML = toad_amount;
document.getElementById("mario_amount").innerHTML = mario_amount;
document.getElementById("bowserjr_amount").innerHTML = bowserjr_amount;
document.getElementById("donkeykong_amount").innerHTML = donkeykong_amount;







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

}, 1000);


function coinbutton() {
   
   coins += coinpower;
   
}

document.getElementById("peachee").addEventListener("click", function(){ 
if (coins >= peach_price){
    peachamount += 1;
    coins -= peach_price;
    peach_price *= 3;
    document.getElementById("peach_price").innerHTML = peach_price + "$";
    document.getElementById("peach_amount").innerHTML = peachamount;
    }
})


document.getElementById("shy").addEventListener("click", function(){ 
if (coins >= shyguy_price) {
    shyguy_amount += 1;
    coins -= shyguy_price;
    shyguy_price *= 5;
    document.getElementById("shyguy_price").innerHTML = shyguy_price + "$";
    document.getElementById("shyguy_amount").innerHTML = shyguy_amount;
    }
})

document.getElementById("1up").addEventListener("click", function(){ 
if (coins >= oneup_price) {
    coinpower += oneup_increase;
    coins -= oneup_price;
    oneup_price *= 10;
    document.getElementById("oneup_price").innerHTML = oneup_price + "$";
    document.getElementById("oneup_amount").innerHTML = oneup_amount;
    }
})

document.getElementById("ghost").addEventListener("click", function(){ 
    if (coins >= ghost_price) {
        ghost_amount += 1; 
        coins -= ghost_price;
        ghost_price *= 2;
        document.getElementById("ghost_price").innerHTML = ghost_price + "$";
        document.getElementById("ghost_amount").innerHTML = ghost_amount;
    }
})

document.getElementById("toad").addEventListener("click", function(){ 
    if (coins >= toad_price) {
        toad_amount += 1;
        coins -= toad_price;
        toad_price *= 2;
        document.getElementById("toad_price").innerHTML = toad_price + "$"
        document.getElementById("toad_amount").innerHTML = toad_amount;

    }
})

document.getElementById("mario").addEventListener("click", function(){ 
    if (coins >= mario_price) {
        mario_amount += 1;
        coins -= mario_price;
        mario_price *= 2;
        document.getElementById("mario_price").innerHTML = mario_price + "$"
        document.getElementById("mario_amount").innerHTML = mario_amount;

    }
})

document.getElementById("bow").addEventListener("click", function(){ 
    if (coins >= bowserjr_price) {
        bowserjr_amount += 1;
        coins -= bowserjr_price;
        bowserjr_price *= 2;
        document.getElementById("bowserjr_price").innerHTML = bowserjr_price + "$"
        document.getElementById("bowserjr_amount").innerHTML = bowserjr_amount;

    }
})


document.getElementById("donkeykong").addEventListener("click", function(){ 
    if (coins >= donkeykong_price) {
        donkeykong_amount += 1; 
        coins -= donkeykong_price;
        donkeykong_price *= 2;
        document.getElementById("donkeykong_price").innerHTML = donkeykong_price + "$";
        document.getElementById("donkeykong_amount").innerHTML = donkeykong_amount;

    }
})

document.getElementById("netherbomb").addEventListener("click", function(){ 
    if (coins >= netherbomb_price) {
        coins = 0;
        
    }
})


function getRandomPosition(element) {
	var x = document.getElementById ("venstre1").offsetHeight-element.clientHeight;
	var y = document.getElementById ("venstre1").offsetWidth-element.clientWidth;


	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}
window.onload = function() {
	var img = document.getElementById("mariostar");
	img.setAttribute("style", "position:absolute;");
	//img.setAttribute("src", "some-image.jpg");
	document.body.appendChild(img);
	var xy = getRandomPosition(img);
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
}


var intervalId6 = window.setInterval(function(){
    var img = document.getElementById("mariostar");
   img.style.visibility = "visible";
}, 3000);

