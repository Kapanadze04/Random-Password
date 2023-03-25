const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")

const passwordLength = 15;


function getPass() {
    pass1El.textContent = generatePass();
    pass2El.textContent = generatePass();
}

function generatePass() {
    let pass = " ";
    for(let i = 0; i < passwordLength; i++) {
        pass += randomPass();
    }
    return pass;
}

function randomPass() {
    let randomIndex = Math.floor( Math.random() * characters.length )
    return characters[randomIndex];
}

