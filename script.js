const container = document.querySelector("#container");
const btn = document.querySelector(".button");

btn.addEventListener("click", deleteGrid);
btn.addEventListener("click", newGrid);

function createGrid(){
	for(let i=0; i<4; i++){
		const column = document.createElement("div");
		column.className = "column";
		container.appendChild(column);

		for(let j=0; j<4; j++){
			const row = document.createElement("div");
			row.className = "row";
			column.appendChild(row);
		}
	}
}

function newGrid(){
	let col = prompt("col");
	let row =  prompt("row");

	const div = document.createElement("div");
	div.setAttribute("id", "container")
	document.body.appendChild(div);
	const newContainer = document.querySelector("#container");

	for(let i=0; i<col; i++) {
	    const column = document.createElement("div");
	    column.className = "column";
	    newContainer.appendChild(column);

	    for(let j=0; j<row; j++){
	        const row = document.createElement("div");
	        row.className =  "row";
	        column.appendChild(row);
	    }
	}   
}

function deleteGrid(){
    const container = document.querySelector("#container");
    container.remove();
}

createGrid();