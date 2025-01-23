const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;

// Set drawing styles
ctx.strokeStyle = "black"; // Default color
ctx.lineWidth = 2; // Default line thickness

// Event listeners for drawing
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
});

// Clear Canvas Button
document.getElementById("clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save Drawing Button
document.getElementById("saveDrawing").addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "strategy.png";
    link.href = canvas.toDataURL();
    link.click();
});
