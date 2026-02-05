const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.querySelector("#container-password-one .password-one");
let passwordTwo = document.querySelector("#container-password-two .password-two");



function generate(){
    
    passwordOne.textContent="";
    passwordTwo.textContent="";
    
    for(let i=0; i<16; i++){
        
        let indexOne = Math.floor(Math.random() * characters.length)
        let indexTwo = Math.floor(Math.random() * characters.length)
        
        passwordOne.textContent += characters[indexOne]; 
        passwordTwo.textContent += characters[indexTwo];  
    }
const iconOne = document.querySelector("#container-password-one .copy-icon");
const iconTwo = document.querySelector("#container-password-two .copy-icon");

iconOne.style.opacity = 1;
iconTwo.style.opacity = 1;

iconOne.style.pointerEvents="auto"
iconTwo.style.pointerEvents="auto"
}

/*function copy() {
  const text = document.querySelector("#container-password-one .password-one").textContent;
  navigator.clipboard.writeText(text);
  console.log("Copied:", text);
}*/

function copyOne() {
  const textOne = passwordOne.textContent;
  navigator.clipboard.writeText(textOne); 
  console.log("Copied:", textOne);
  const msg = document.getElementById("copy-message");
  msg.style.opacity = 1;

}

function copyTwo() {
  const textTwo = passwordTwo.textContent;
  navigator.clipboard.writeText(textTwo);
  console.log("Copied:", textTwo);
  const msg = document.getElementById("copy-message");
  msg.style.opacity = 1;
}



