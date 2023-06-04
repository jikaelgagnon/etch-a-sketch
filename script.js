function getRandomColor() {
    const num = Math.round(0xffffff * Math.random());
    const r = num >> 16;
    const g = num >> 8 & 255;
    const b = num & 255;
    return `rgb(${r},${g},${b})`;
}

function createGrid(units=16){
    const body = document.querySelector("body");
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    gridContainer.style.display = "flex";
    gridContainer.style.flexDirection = "column";
    gridContainer.style.width = "800px";
    gridContainer.style.height = "800px";
    gridContainer.style.borderStyle = "solid";
    gridContainer.style.borderWidth = "thick";
    gridContainer.style.borderColor = "red";
    body.appendChild(gridContainer);
    for (let row = 0; row < units; row++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";
        row.style.flexBasis = "100%";
        gridContainer.appendChild(row);
        for (let col = 0; col < units; col++)
        {
            const unit = document.createElement("div");
            unit.classList.add("unit");
            unit.style.display = "flex";
            unit.style.flexBasis = "100%";
            unit.addEventListener("mouseover", (event) => 
            {
                event.target.style.backgroundColor = "blue";
            });
            row.appendChild(unit);
        }
    }
}

function addGridDimButton(){
    const body = document.querySelector("body");
    const gridDimButton = document.createElement("button");
    gridDimButton.textContent = "Change Grid Dimensions";
    body.appendChild(gridDimButton);
    gridDimButton.addEventListener("click", () => {
        let size = +prompt("Enter the number of squares per side (must be in range [1,100])");;
        while (size < 1 || size > 100) 
        {
            size = +prompt("Sorry, number of squares per side must be in range [1,100]. Please try again.")
        }
        const gridContainer = document.querySelector(".grid-container");
        gridContainer.remove();
        createGrid(size);
    })
}

function main() {
    addGridDimButton();
    createGrid();
}

main();
