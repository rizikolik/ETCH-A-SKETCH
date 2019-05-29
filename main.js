const container    = document.getElementById("containerid");
const newcell      = document.getElementById("new");
const clear        = document.getElementById("clear");
let beginningCells =16;
let r="";
let g="";
let b="";
let rgb="";




clear.addEventListener("click", clearCells);
newcell.addEventListener("click", createNewCells);


//BEGİNNİNG 
createCells(beginningCells);

function createCells(num) {
   for (let i = 0; i < num; i++) {
        let line = document.createElement("div");
        line.classList.add("lines");
        for (let j = 0; j < num; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cells");
            cell.style.width = (15/ num)+ "em";
            cell.style.height = (15/ num) + "em";
            cell.style.border ="2px solid black";
            cell.addEventListener("mouseover", changeColor);
            cell.addEventListener('touchmove', changeColor);
            line.appendChild(cell);

        }
        line.style.display="inline-block";
       
        container.appendChild(line);
    }
}




function changeColor(event){
     event.preventDefault()
    if(!this.classList.contains("colored")){
        r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    rgb=(r+","+g+","+b)
    
    //console.log("rgb("+rgb+")"); //I used this for test
    this.style.background="rgb("+rgb+")";
    this.classList.add("colored");
    }
    
}

function clearCells() {
    const numberofrows=document.querySelectorAll(".cells");
    for(let i=0;i<numberofrows.length;i++){
        numberofrows[i].style.background="white";
    }
    
}

///CREATE NEW GRİD  AS USER DEMAND
function createNewCells(){
 let   dimension=window.prompt("please enter a number between 1-64",beginningCells);
    if(isNaN(dimension)){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        createCells(16);
    }else if(dimension<1||dimension>64){
        window.alert("Please enter a number between 1-64");
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
       
        createCells(16);
    }else{
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
       
        createCells(dimension);
    }

}