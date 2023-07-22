// my-drawing-app.js

// Setup Paper.js with the canvas
paper.setup('my-canvas');

// Create a simple drawing tool
var tool = new paper.Tool();

// Define a mousedown event (when the user clicks)
tool.onMouseDown = function(event) {
    // Begin a new path at the point where the user clicked
    path = new paper.Path();
    path.strokeColor = 'black';
    path.add(event.point);
}

// Define a mousedrag event (when the user clicks and drags)
tool.onMouseDrag = function(event) {
    // Add a point to the path at the current mouse position
    path.add(event.point);
}

// Define a mouseup event (when the user releases the mouse button)
tool.onMouseUp = function(event) {
    // Simplify the path to smooth it out and reduce the number of points
    path.simplify(10);
}