const container = document.querySelector("#container");

function createGrid(){
	for(let i=0; i<4; i++){
		const column = document.createElement("div");
		column.className = "column";
		container.appendChild(column);
	}
}