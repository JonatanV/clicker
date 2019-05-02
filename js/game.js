console.log("HEllo World");

let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerupsDiv  = document.getElementById("powerups");

let bank = 0;
let powerupvalue = 0;
let pupCost = 10;
let pupCost2 = 20;
let clickValue1=1;
let clickValue = 0;
let clickValue2 = 0;
let pupCost3 = 200;
let pupCost4 = 1000;

gameButton.addEventListener('click',function(){
    bank+=clickValue1;
    gameButton.textContent = Math.floor(bank);
});

let powerup = document.createElement("button");
powerup.textContent = "Great "+pupCost;
powerup.addEventListener('click', function(){
    if (bank >= pupCost){
        bank = bank-pupCost;
        pupCost = pupCost*12;
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
                clickValue++;
                powerupvalue+=0.3*clickValue;
                pupCost3 = pupCost3 * 10;
                powerup3.textContent= "ting "+pupCost3;
                bankElement.textContent = "Du köpte en powerUp!"
            } else{
                bankElement.textContent = "Du har inte råd!" 
            }
        });
    
    function step() {
        bank += powerupvalue;
        game.textContent = Math.floor(bank);
        window.requestAnimationFrame(step);
    }
    
    window.requestAnimationFrame(step);
    
    powerupsDiv.appendChild(powerup3);

    let powerup4 = document.createElement("button");
        powerup4.textContent= "tang " + pupCost4;   
        powerup4.addEventListener('click', () => {
            if (bank >= pupCost4){ 
                bank -= pupCost4;
                clickValue++;
                powerupvalue+=0.6 * clickValue2;
                pupCost4 = pupCost4 * 11 * clickValue;
                powerup4.textContent= "ting "+pupCost4;
                bankElement.textContent = "Du köpte en powerUp!"
            } else{
                bankElement.textContent = "Du har inte råd!" 
            }
        });
    
    function step() {
        bank += powerupvalue;
        game.textContent = Math.floor(bank);
        window.requestAnimationFrame(step);
    }
    
    window.requestAnimationFrame(step);
    
    powerupsDiv.appendChild(powerup4);