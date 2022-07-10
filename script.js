const container = document.querySelector('#container');
let color = "black";

function createGrid(x){
    let wideSize = 500/x;
    let tallSize = 500/x;
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    for (let i = 0; i < x; i++){
        for (let j = 0; j < x; j++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid');
            container.insertAdjacentElement('beforeend', newDiv);
            newDiv.style.width=`${wideSize}px`;
            newDiv.style.height=`${tallSize}px`;
            newDiv.addEventListener("mouseover", changeColor);
        }
    }
}
createGrid(16);

function boardSize(input){
    if (input < 1){
        alert("Too low! Number must be greater 1.");
    }
    else if (input > 99){
        alert("Too high! Number must be less than 100.")
    }
    createGrid(input);
}

function coloring(choice){
    color = choice;
}

function changeColor() {
    if (color === 'rainbow'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else if (color === 'black'){
        this.style.backgroundColor = 'black';
    }
    else if (color === 'white'){
        this.style.backgroundColor = 'white';
    }
}

function resetBoard(){
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

