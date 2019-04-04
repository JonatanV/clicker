console.log("Hello World");

let gameButton = document.getElementById("game");

let banKElement = document.getElementById("bank")

let powerUpsDiv = document.getElementById("powerups");

let bank=0;
let pupCost=10;

gameButton.addEventListener('click',function(){
    //console.log("click")
    bank +=1;
    gameButton.textContent=Math.floor(bank);
})

let powerUp = document.createElement("button");
powerUp.textContent = "Unlimited Power" 
powerUp.addEventListener('click',function(){
    if (bank >= pupCost){
        bank= bank - pupCost;
        pupCost = pupCost*1,5;
        bank = bank * 10;
        banKElement.textContent = "Du köpte en PowerUp"
    }else {
        console.log("Du har inte råd!");
        banKElement.textContent= "Du har inte råd"
    }
});

powerUpsDiv.appendChild(powerUp);