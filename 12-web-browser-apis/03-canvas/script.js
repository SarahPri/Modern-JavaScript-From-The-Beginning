const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');


//Draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// Draw Circle
ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// Drawing Lines
ctx.beginPath();
ctx.strokeStyle = 'blue'
ctx.lineWidth = 5
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke()

