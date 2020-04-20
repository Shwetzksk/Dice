var randomNumber1 = Math.floor(Math.random()*6)+1;

var image1 ="images/dice"+randomNumber1 +".png";

document.querySelector("img.img1").setAttribute("src",image1);

// var image1= document.querySelectorAll("img")[0];
// image1.setAttribute("src",n); "another way"

var randomNumber2=Math.floor(Math.random()*6)+1;

var image2="images/dice"+randomNumber2 +".png";

document.querySelector("img.img2").setAttribute("src",image2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 🥳Hurray! Player 1 is the winner";
  document.querySelector("h1").style.color="yellow";
}else if (randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Hurray! Player 2 is the winner 🥳 🚩";
  document.querySelector("h1").style.color="#ffecc7";
} else {
  document.querySelector("h1").innerHTML="It's a tie 😉";
  document.querySelector("h1").style.color="#f4eeff";
}
