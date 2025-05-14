const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const bgPicker = document.getElementById("bgPicker");
const textInput = document.getElementById("textInput");
const fontSizeInput = document.getElementById("fontSize");
const lineWidthInput = document.getElementById("lineWidth");
const modeLabel = document.getElementById("modeLabel");

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let mode = "draw"; // draw or text

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setBackground(bgPicker.value);
}

function setBackground(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function startDrawing(x, y) {
    if (mode === "draw") {
        isDrawing = true;
        [lastX, lastY] = [x, y];
    } else if (mode === "text") {
        drawText(x, y);
    }
}

function drawLine(x, y) {
    if (!isDrawing || mode !== "draw") return;
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = parseInt(lineWidthInput.value) || 2;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    [lastX, lastY] = [x, y];
}

function drawText(x, y) {
    const text = textInput.value.trim();
    const fontSize = parseInt(fontSizeInput.value) || 24;
    if (text) {
        ctx.fillStyle = colorPicker.value;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText(text, x, y);
    }
}

function stopDrawing() {
    isDrawing = false;
}

function toggleMode() {
    mode = mode === "draw" ? "text" : "draw";
    modeLabel.textContent = mode === "draw" ? "Gambar" : "Teks";
}

function clearCanvas() {
    setBackground(bgPicker.value);
}

// Mouse events
canvas.addEventListener("mousedown", e => startDrawing(e.clientX, e.clientY));
canvas.addEventListener("mousemove", e => drawLine(e.clientX, e.clientY));
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Touch events
canvas.addEventListener("touchstart", e => {
    const touch = e.touches[0];
    startDrawing(touch.clientX, touch.clientY);
});
canvas.addEventListener(
    "touchmove",
    e => {
        const touch = e.touches[0];
        drawLine(touch.clientX, touch.clientY);
        e.preventDefault();
    },
    { passive: false }
);
canvas.addEventListener("touchend", stopDrawing);

bgPicker.addEventListener("input", () => setBackground(bgPicker.value));
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
