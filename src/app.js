/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  randomize();
};

function randomize() {
  var arrNum = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var suitArr = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
  var randomizeIndex = Math.floor(Math.random() * arrNum.length);
  var randomizeSuit = Math.floor(Math.random() * suitArr.length);

  var suits = document.getElementsByClassName("icon");
  var numb = document.getElementsByClassName("number");

  suits[0].innerHTML = suitArr[randomizeSuit];
  suits[1].innerHTML = suitArr[randomizeSuit];
  numb[0].innerHTML = arrNum[randomizeIndex];

  var testDiamOrHeart =
    suitArr[randomizeSuit] === "&diams;" ||
    suitArr[randomizeSuit] === "&hearts;";

  if (testDiamOrHeart) {
    suits[0].style.color = "red";
    suits[1].style.color = "red";
  }
}
