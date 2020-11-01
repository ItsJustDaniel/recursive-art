const canvas = document.getElementById("canvas");
const canvasWidthTree = (canvas.width = window.innerWidth);
const canvasHeightTree = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");
let num = 0;
const drawFractalTree = (x, y, len, angle, branchWidth, green) => {
  ctx.lineWidth = branchWidth;
  ctx.beginPath();

  ctx.save();

  ctx.translate(x, y);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.strokeStyle = `rgb(139,${green},19)`;
  ctx.stroke();
  if (len < 10) {
    ctx.restore();
    return;
  }
  drawFractalTree(0, -len, len * 0.8, -17, branchWidth * 0.8, green + 8);
  drawFractalTree(0, -len, len * 0.8, +17, branchWidth * 0.8, green + 8);

  ctx.restore();

};
drawFractalTree(canvas.width / 2, canvas.height, 136, 0, 10, 69);
