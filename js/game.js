console.log("HEllo World");

let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerupsDiv  = document.getElementById("powerups");

let bank = 0;
let pupCost = 10;
let pupCost2 = 20;
let clickValue = 1;

gameButton.addEventListener('click',function(){
    bank+=clickValue;
    gameButton.textContent = Math.floor(bank);
});

let powerups = document.createElement("button");
    powerups.textContent = "Great "+pupCost;
    powerups.addEventListener('click', function(){
        if (bank >= pupCost){
            bank = bank-pupCost;
            pupCost = pupCost*7;
            bank = bank*10;
            powerups.textContent = "Great " + pupCost;
            bankElement.textContent = "Du köpte en powerUp!"
        } else{
            bankElement.textContent = "Du har inte råd!" 
        }
    });
 
    powerupsDiv.appendChild(powerups);

    let powerup = document.createElement("button");
    powerup.textContent = "sick "+ pupCost2;
    powerup.addEventListener('click', function(){
        if (bank >= pupCost2){
            bank = bank-pupCost2;
            pupCost2 = pupCost2*7;
            clickValue=clickValue*2;
            powerup.textContent = "Sick  " + pupCost2;
            bankElement.textContent = "Du köpte en powerUp!"
        } else{
            bankElement.textContent = "Du har inte råd!" 
        }
    });
 
    powerupsDiv.appendChild(powerup);
    
    
