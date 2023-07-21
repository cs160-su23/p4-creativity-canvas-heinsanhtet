document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let drawing = false;
    let rotation = 0;
    let scale = 1;
  
    const handlePanStart = () => {
      drawing = true;
    };
  
    const handlePanEnd = () => {
      drawing = false;
    };
  
    const handlePan = (event) => {
      if (drawing) {
        const x = event.changedPointers[0].clientX;
        const y = event.changedPointers[0].clientY;
  
        // Your drawing logic here...
        // For example, draw a small circle at the touch point
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
      }
    };
  
    const handleRotate = () => {
      rotation += 90;
      canvas.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    };
  
    const handlePinch = (event) => {
      scale = event.scale;
      canvas.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    };
  
    const handleTap = () => {
      // Handle tap event here
      // For example, show a message when tapped
      alert("Image tapped!");
    };
  
    // Add Hammer.js listeners
    const mc = new Hammer(canvas, {});
    mc.on("panstart", handlePanStart);
    mc.on("panend", handlePanEnd);
    mc.on("pan", handlePan);
    mc.on("rotate", handleRotate);
    mc.on("pinch", handlePinch);
    mc.on("tap", handleTap);
  });
  
  function showPicture() {
    // Implement the logic to show the picture here
    alert("Show Picture");
  }
  
  function rotatePicture() {
    // Implement the logic to rotate the picture here
    alert("Rotate Picture");
  }
  
  function pinchPicture() {
    // Implement the logic to pinch the picture here
    alert("Pinch Picture");
  }
  
  function tapPicture() {
    // Implement the logic to handle tap on the picture here
    alert("Tap Picture");
  }
  