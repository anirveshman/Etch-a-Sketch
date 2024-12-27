let i = 0, j = 0;

let cont = document.querySelector(".container");

for (i=0;i<16;i++)
{
    let column_item = document.createElement("div");

    column_item.classList.add("column-item");

    for (j=0;j<16;j++)
    {
        let row_item = document.createElement("div");

        row_item.classList.add("row-item");

        row_item.addEventListener("mouseover", (event) => {
            row_item.style.backgroundColor = "black";
        })

        column_item.appendChild(row_item);
    }

    cont.appendChild(column_item);
}