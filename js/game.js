console.log("HEllo World");

let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerupsDiv  = document.getElementById("powerups");

let bank = 0;
let powerupvalue = 0;
let pupCost = 10;
let pupCost2 = 20;
let clickValue = 1;
let pupCost3 = 200;

gameButton.addEventListener('click',function(){
    bank+=clickValue;
    gameButton.textContent = Math.floor(bank);
});

let powerup = document.createElement("button");
powerup.textContent = "Great "+pupCost;
powerup.addEventListener('click', function(){
    if (bank >= pupCost){
        bank = bank-pupCost;
        pupCost = pupCost*7;
        bank = bank*10;
        powerup.textContent = "Great " + pupCost;
        bankElement.textContent = "Du köpte en powerUp!"
    } else{
        bankElement.textContent = "Du har inte råd!" 
    }
});

powerupsDiv.appendChild(powerup);
    
    let powerup2 = document.createElement("button");
    powerup2.textContent = "sick "+ pupCost2;
    powerup2.addEventListener('click', function(){
        if (bank >= pupCost2){
            bank = bank-pupCost2;
            pupCost2 = pupCost2*7;
            clickValue=clickValue*2;
            powerup2.textContent = "Sick  " + pupCost2;
            bankElement.textContent = "Du köpte en powerUp!"
        } else{
            bankElement.textContent = "Du har inte råd!" 
        }
    });
    powerupsDiv.appendChild(powerup2);
    
    
    let powerup3 = document.createElement("button");
        powerup3.textContent= "ting " + pupCost3;   
        powerup3.addEventListener('click', () => {
            if (bank >= pupCost3) {
                bank -= pupCost3;
                powerupvalue+=0.3;
                pupCost3 = pupCost3 * 10;
                powerup3.textContent= "ting "+pupCost3;

            }
        });
    
    function step() {
        bank += powerupvalue;
        game.textContent = Math.floor(bank);
        window.requestAnimationFrame(step);
    }
    
    window.requestAnimationFrame(step);
    
    powerupsDiv.appendChild(powerup3);