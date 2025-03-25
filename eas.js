const container = document.querySelector(".container");
const divlist = [];
const div = [];
let a = 0;
for (let i = 0; i < 16; i++) {
    divlist[i] = document.createElement("div");
    divlist[i].className="divlist"+i;
    container.appendChild(divlist[i]);
    const nest = document.querySelector(".divlist"+i);
    
    
    for (let j = 0; j < 16; j++){
        
        div[j] = document.createElement("div");
        div[j].style.backgroundColor= "green";
        div[j].style.height = "10px";
        div[j].style.borderWidth = "1px";
        div[j].style.borderColor = "#070b11";
        div[j].style.borderStyle = "solid";
        div[j].style.height = "10px";
        div[j].style.width = "10px";
        div[j].style.padding = "1px";
        div[j].style.margin = "1px";
        div[j].className = "divlist"+i+"div"+j;
        // div[j].textContent = a;
        // a++;
        nest.appendChild(div[j]);
        const eventList = document.querySelector(".divlist"+i+"div"+j);
        eventList.addEventListener("mouseover" , () => {
            console.log("divlist"+i+"div"+j);
            console.log(eventList.style.backgroundColor);
            
            if (eventList.style.backgroundColor == 'green') {
                eventList.style.backgroundColor = 'yellow';
            }
            else {
                eventList.style.backgroundColor = 'pink';
            }
            
        });
    }
    
}

function colorPick(){

}