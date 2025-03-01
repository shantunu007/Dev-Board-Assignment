
const completeButtons = document.querySelectorAll(".complete-button");

const increaseElement = document.getElementById("increase");
let increaseValue = parseInt(increaseElement.innerText);

const counterElement = document.getElementById("counter");

let counterValue = parseInt(counterElement.innerText);
const container = document.getElementById("history-container");

const titles = [
    "Fix Mobile Button Issue",
    "Add Dark Mode",
    "Optimize Home Page",
    "Add New Emoji",
    "Integrate Open AI API",
    "Improve Job Searching"

]

let titleIndex = 0;

for (const button of completeButtons) {
    button.addEventListener("click", function() {
        alert("Board Updated Successfully");
        
        if(increaseValue > 0){
            increaseValue++;
            increaseElement.innerText = increaseValue;
            button.disabled = true;


        }
        if (counterValue > 0) { 
            counterValue--;
            counterElement.innerText = counterValue;
            button.disabled = true;
        }
        if(titleIndex < titles.length){
            const div = document.createElement("div");
            div.classList.add("bg-blue-100");
            div.classList.add("my-3");
            div.classList.add("px-3");
            div.classList.add("py-6");
            div.classList.add("rounded-xl");
            div.classList.add("w-80");
            div.classList.add("mx-auto");
            div.innerHTML = `
                <p>You have completed the ${titles[titleIndex]}</p>
            `

            container.appendChild(div);

            titleIndex++;
        }
    });
}

document.getElementById("clear-button").addEventListener("click", function(){
    container.innerHTML = "";
})
