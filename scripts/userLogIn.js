
/** console.log(document.cookie);
var cookie = 0;
var cookieMultiplicator = 1;
var cookiePrice = 10


function onGameButtonClick() {
    cookie += 1 * cookieMultiplicator;
    cookie = ~~ cookie;
}
function makeMoreExpensive() {
    if(cookie >= cookiePrice){
        cookie -= cookiePrice;
        cookie = ~~ cookie;
        cookiePrice = cookiePrice * 2;
        cookieMultiplicator *= 1.5;
    }
}
function setTexts() {
        document.getElementById("price").innerText = cookiePrice + "cookies";
        document.getElementById("cookieCounter").innerText = cookie;
        console.log("hjoj");
}
setInterval(() => {
    setTexts();
}, 100)
*/



//document.getElementById("shopSystem").style.height = document.getElementById("shopSystem").style.width + "px";
//console.log(document.getElementById("shopSystem").style.width + "px");

//const userSearchbar = document.getElementsByClassName('userSearchbar');
//const passwordSearchbar = document.getElementsByClassName('passwordSearchbar');
//alert("alert");
//confirm("confirm");

/** var user = prompt('user');
var password = prompt('password');

var userData = [,];
userData[0,0] = user
userData[0,1] = password

console.log(userData[0,1]);
console.log(password[0,1]);
*/



/** setTimeout(function(){
    console.log(wert);
}, 5000);
*/

/** function testFunktion() {
    console.log('test function');
}

testFunktion();
*/
