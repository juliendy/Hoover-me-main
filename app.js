const container = document.getElementById("container");
const colors = [
    // "#86E272",
    // "#F7A4E0",
    // "#6BB4F9",
    // "#FFE669",      // OLD COLOURS
    // "#FFA041",
    // "#FF3D3E",
    // "#DAA4FF",
    "#46A094",
    "#6BBD99",
    "#AECFA4",
    "#C4E8C2",
    "#3B7197",
    "#4A8DB7",
    "#74BDE0",
    "#A1E1FA",
    "#326789",
    "#78A6C8",
    "#E9EEF2",
    "#E65C4F",
    "#0295A9",
    "#12ADC1",
    "#FDD037",
    "#FFFFFF",
    "#244D61",
    "#5689C0",
    "#75E2FF",
    "#EAEBED",
    "#41436A",
    "#974063",
    "#F54768",
    "#FF9677",
    "#2E424D",
    "#5B8291",
    "#98DAD9",
];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));
    // console.log('square: ', square);
    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = ` 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = ` 0 0 2px #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}