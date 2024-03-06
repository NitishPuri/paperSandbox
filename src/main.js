window.onload = async function () {
  const module = await import("paper");
  const paper = module.default;

  // Setup Paper.js with the canvas
  paper.setup(document.getElementById("myCanvas"));

  paper.view.viewSize = new paper.Size(800, 400);

  // Create a rectangle shaped path at the center of the view:
  var path = new paper.Path.Rectangle({
    center: paper.view.center,
    size: new paper.Size(80, 50),
  });

  // Fill the path with a color
  path.fillColor = "black";
};
