
// Theme Change by various color js problem

const bgColors =["lightblue", "violet", "lightgreen", "purple", "skyblue", "cyan", "black", "white", "yellow"];

let currentColor = 0;

document.getElementById("bg-change").addEventListener("click", function(){
    
    for(let i = 0; i < bgColors.length; i++){
        if(i === currentColor){
            document.body.style.backgroundColor = bgColors[i];
            currentColor = (currentColor + 1) % bgColors.length;
            break;
        }
    }
});