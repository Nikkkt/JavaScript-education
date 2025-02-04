document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawCanvas');

    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    const ctx = canvas.getContext('2d');
    const shapeSelect = document.getElementById('shapeSelect');
    const colorInput = document.getElementById('colorInput');

    let startX, startY;
    let isDrawing = false;
    let currentColor = colorInput.value;
    const drawnShapes = [];

    function drawShape(x, y, width, height, shape, color) {
        ctx.fillStyle = color;
        ctx.beginPath();

        if (shape === 'rectangle') {
            ctx.rect(x, y, width, height);
        } else if (shape === 'circle') {
            const radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
            ctx.arc(x + width / 2, y + height / 2, radius, 0, Math.PI * 2);
        } else if (shape === 'triangle') {
            ctx.moveTo(x, y);
            ctx.lineTo(x + width, y);
            ctx.lineTo(x + width / 2, y + height);
            ctx.closePath();
        }

        ctx.fill();
    }

    function redrawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawnShapes.forEach(shape => {
            drawShape(shape.startX, shape.startY, shape.width, shape.height, shape.shape, shape.color);
        });
    }

    canvas.addEventListener('mousedown', (e) => {
        startX = e.offsetX;
        startY = e.offsetY;
        isDrawing = true;
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;

        redrawCanvas();

        const endX = e.offsetX;
        const endY = e.offsetY;
        const width = endX - startX;
        const height = endY - startY;

        drawShape(startX, startY, width, height, shapeSelect.value, currentColor);
    });

    canvas.addEventListener('mouseup', (e) => {
        if (!isDrawing) return;

        const endX = e.offsetX;
        const endY = e.offsetY;
        const width = endX - startX;
        const height = endY - startY;

        drawnShapes.push({ startX, startY, width, height, shape: shapeSelect.value, color: currentColor });

        redrawCanvas();

        isDrawing = false;
    });

    colorInput.addEventListener('input', (e) => {
        currentColor = e.target.value;
    });
});
