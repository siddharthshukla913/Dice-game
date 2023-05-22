var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceimage = "dice" + randomNumber1 + ".png"; 

var randomImageSource = "images/" + randomDiceimage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceimage = `dice${randomNumber2}.png`;

var randomImageSource = "images/" + randomDiceimage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);