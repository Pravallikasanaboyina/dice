// generating random numbers
var randomnum1=Math.floor((Math.random()*6)+1);
var randomnum2=Math.floor((Math.random()*6)+1);
// changing dice images based on random numbers
document.querySelectorAll("img")[0].setAttribute("src","dice"+randomnum1+".png");
document.querySelectorAll("img")[1].setAttribute("src","dice"+randomnum2+".png");
// changing h1 text for showing game result
if(randomnum1>randomnum2){
  document.querySelector("h1").innerHTML="🚩Player1 wins!";
}
else if(randomnum1<randomnum2){
  document.querySelector("h1").innerHTML="Player2 wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
