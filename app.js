let tg = window.Telegram.WebApp;

tg.expand()

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("You pressed button 1");
        item="1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("You pressed button 2");
        item="2";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent(mainButtonClicked, function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.firstname}
${tg.initDataUnsafe.user.lastname}`

usercard.appendChild(p);
 
