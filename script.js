const container = document.querySelector("#container");
const clear = document.querySelector(".btn2");
const nGrid = document.querySelector(".btn1");

nGrid.addEventListener("click", deleteGrid);
nGrid.addEventListener("click", newGrid);


function grid(){
    for(let i=0; i<16; i++){
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
    
        for(let j=0; j<16; j++){
            let column = document.createElement("div");
            column.className = "column";
            row.appendChild(column);
            column.addEventListener("mousemove", ()=> column.style.backgroundColor = "blue");
            
            clear.addEventListener("click", ()=> column.style.backgroundColor = "white");
        }
    }
    
}

function newGrid(){
    
    const div = document.createElement("div");
    div.setAttribute("id", "container")
    document.body.appendChild(div);
    const container = document.querySelector("#container");

    let num = prompt("number");

    if(num > 100){
        alert("That Number is too big");
    }

    else {
        for(let i=0; i<num; i++){
            let row = document.createElement("div");
            row.className = "row";
            container.appendChild(row);
    
            for(let j=0; j<num; j++){
                let column = document.createElement("div");
                column.className = "column";
                row.appendChild(column);
                column.addEventListener("mousemove", ()=> column.style.backgroundColor = "blue");
                
                clear.addEventListener("click", ()=> column.style.backgroundColor = "white");
            }
        }
    }

}

function deleteGrid(){
    const container = document.querySelector("#container");
    container.remove();
}

grid();