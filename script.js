const container = document.querySelector("#container");
const btn = document.querySelector(".button")

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

createGrid();