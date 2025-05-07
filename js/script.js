$(function () {
    const canvas = $("#canvasBox")[0];
    const ctx = canvas.getContext("2d");
  
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    const steg = 10;
  
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
  
    // Lyssna på tangenttryck
    $(document).on("keydown", function (event) {
      if (event.key === "ArrowUp") y -= steg;
      else if (event.key === "ArrowDown") y += steg;
      else if (event.key === "ArrowLeft") x -= steg;
      else if (event.key === "ArrowRight") x += steg;
      else return;
  
      ctx.strokeStyle = "black";
      ctx.lineTo(x, y);
      ctx.stroke();
  
      // Rita markören
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();
    });
  
    // Reset-knapp
    $("#reset").on("click", function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      x = canvas.width / 2;
      y = canvas.height / 2;
  
      ctx.beginPath();
      ctx.moveTo(x, y);
    });
  });
  