const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let currentIcon = null; // This will store the current dragged icon

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

// Handle dragging icons
const iconsPalette = document.getElementById("iconPalette");
const draggableIcons = document.querySelectorAll(".draggableIcon");

// Make icons draggable
draggableIcons.forEach(icon => {
    icon.addEventListener("dragstart", (e) => {
        currentIcon = icon; // Store the dragged icon
        e.dataTransfer.setData("text", icon.src); // Store the icon image source
    });
});

// Allow the canvas to accept the dragged icon
canvas.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow the drop by preventing the default handling
});

canvas.addEventListener("drop", (e) => {
    e.preventDefault();
    
    // Get the position of the drop on the canvas
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;

    // Create a new image and draw it on the canvas
    if (currentIcon) {
        const img = new Image();
        img.src = currentIcon.src; // Use the source of the dragged icon
        
        img.onload = () => {
            // Once the image is loaded, draw it on the canvas
            ctx.drawImage(img, offsetX - img.width / 2, offsetY - img.height / 2); // Center the image at the drop point
        };
    }
});
