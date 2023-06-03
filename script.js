function createGrid(units=16){
    const body = document.querySelector("body");
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    gridContainer.style.display = "flex";
    gridContainer.style.flexDirection = "column";
    gridContainer.style.flexGrow = 0;
    gridContainer.style.flexShrink = 0;
    gridContainer.style.flexBasis = "960px";
    body.appendChild(gridContainer);
    for (let row = 0; row < units; row++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";
        body.appendChild(row);
        for (let col = 0; col < units; col++)
        {
            const unit = document.createElement("div");
            unit.classList.add("unit");
            unit.style.borderStyle = "solid";
            unit.style.borderWidth = "thick";
            unit.style.borderColor = "red";
            unit.style.padding = "8px";
            unit.addEventListener("mouseover", (event) => 
            {
                event.target.style.backgroundColor = "blue";
            });
            row.appendChild(unit);
        }
    }
}

createGrid(16);