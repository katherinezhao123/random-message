var sommer = document.querySelector('.summer');
var winter = document.querySelector('.winter');
var word = document.querySelector('h2');
var fall = document.querySelector('.fall');
var spring = document.querySelector('.spring');

console.log(fall);
console.log(sommer);
console.log(winter);
console.log(word);
console.log(spring);

sommer.addEventListener("click", doSomethingA);
function doSomethingA () {
  console.log("click the button");
word.innerHTML=("Woohooo! You like tans and relaxing on the beach with a coconut!");}

winter.addEventListener("click", doSomethingB);
function doSomethingB () {
    console.log("click the button");
    word.innerHTML=("Cozying up next to the fireplace with a mug of hot cocoa sounds like a dream to me too!");}

fall.addEventListener("click", doSomethingC);
function doSomethingC () {
  console.log("click the button");
  word.innerHTML=("Perfect season for wearing the cutest clothes! but school starts, so...");}

spring.addEventListener("click", doSomethingD);
function doSomethingD () {
  console.log("click the button");
  word.innerHTML=("Season of pollen and blooming flowers!");}
