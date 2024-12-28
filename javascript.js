function createGrid(col, row) {

    let grid = document.createElement("div");

    grid.classList.add("grid");

    let i = 0, j = 0;

    let cont = document.querySelector(".container");

    cont.appendChild(grid);

    for (i=0;i<col;i++)
    {
        let column_item = document.createElement("div");

        column_item.classList.add("column-item");

        for (j=0;j<row;j++)
        {
            let row_item = document.createElement("div");

            row_item.classList.add("row-item");

            row_item.style.opacity = 0.1;

            row_item.addEventListener("mouseover", (event) => {
                row_item.style.backgroundColor = "black";

                let x = parseFloat(row_item.style.opacity);

                if (x<1) row_item.style.opacity = x + 0.2;
            })

            column_item.appendChild(row_item);
        }

        grid.appendChild(column_item);
    }
}

function deleteGrid() {
    let cont = document.querySelector(".container");

    let grid = document.querySelector(".grid");

    cont.removeChild(grid);
}

let button = document.querySelector("#input");

button.addEventListener("click", () => {
    let gridSize = prompt("Enter a grid size between 15 and 100: ");

    if(gridSize<15 || gridSize>100 || !Number.isInteger(Number(gridSize))) {
        alert("Invalid input");
        return;}

    deleteGrid();

    createGrid(Number(gridSize), Number(gridSize));
})

createGrid(16,16);