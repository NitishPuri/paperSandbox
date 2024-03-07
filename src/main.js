window.onload = async function () {
  const module = await import("paper");
  const paper = module.default;

  // Setup Paper.js with the canvas
  paper.setup(document.getElementById("myCanvas"));

  paper.view.viewSize = new paper.Size(1000, 400);

  let circlePath = new paper.Path.Circle({
    center: new paper.Point(70, 100),
    radius: 50,
  });
  // circlePath.fillColor = "red";
  circlePath.strokeColor = "red";

  console.log("circlePath.area", circlePath.area);
  // circlePath.fillColor =
  // circlePath.remove();

  let circlePath2 = new paper.Path.Circle({
    center: new paper.Point(140, 100),
    radius: 50,
  });
  // circlePath2.fillColor = "blue";
  circlePath2.strokeColor = "blue";
  console.log("circlePath2.area", circlePath2.area);
  // circlePath2.remove();

  let addPath = circlePath.clone();
  addPath.translate(new paper.Point(0, 110));
  let addPath2 = circlePath2.clone();
  addPath2.translate(new paper.Point(0, 110));
  addPath = addPath.unite(addPath2);
  addPath2.remove();
  console.log("addPath.area", addPath.area);
  addPath.fillColor = "green";

  let subtractPath = addPath.clone();
  subtractPath.translate(new paper.Point(0, 110));
  subtractPath.strokeColor = null;
  subtractPath.fillColor = null;
  let subtractPath2 = circlePath2.clone();
  subtractPath2.translate(new paper.Point(0, 220));
  subtractPath = subtractPath.subtract(subtractPath2);
  subtractPath2.remove();
  subtractPath.fillColor = "red";
  subtractPath.strokeColor = "black";
  console.log("subtractPath.area", subtractPath.area);

  let subtractPath3 = addPath.clone();
  subtractPath3.translate(new paper.Point(0, 220));
  subtractPath3.strokeColor = null;
  subtractPath3.fillColor = null;
  let subtractPath4 = circlePath2.clone();
  subtractPath4.translate(new paper.Point(0, 330));
  subtractPath4.strokeColor = null;
  let subtractPath5 = subtractPath4.subtract(subtractPath3);
  subtractPath5.fillColor = "blue";
  // let subtractPath6 = subtractPath3.subtract(subtractPath4);
  // subtractPath6.fillColor = "green";
  // subtractPath3 = subtractPath3.subtract(subtractPath4);
  // subtractPath3.remove();
  console.log("subtractPath5.area", subtractPath5.area);
  // console.log("subtractPath6.area", subtractPath6.area);
  // subtra

  // let

  // addPath.fillColor = "green";
  // let addPath = circlePath.unite(circlePath2);
  // addPath.remove();
  // addPath.fillColor = "green";

  // let circlePath3 = new paper.Path.Circle({
  //   center: new paper.Point(210, 100),
  //   radius: 50,
  // });
  // circlePath3.fillColor = "green";

  // let subtractPath = circlePath.subtract(circlePath2, {
  //   insert: true,
  //   trace: true,
  // });
  // console.log(subtractPath);
  // subtractPath.style.fillColor = "red";
  // circlePath2.fillColor = "white";

  paper.view.draw();
};
