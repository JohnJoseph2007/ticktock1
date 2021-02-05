var mx, my;
var rmap, gmap, bmap;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  mx = mouseX;
  my = mouseY;
  bm = (mx+my)/2;
  rmap = map(mx, 0, 400, 0, 255);
  gmap = map(my, 0, 400, 0, 255);
  bmap = map(bm, 0, 400, 0, 255);
  background(mx, my, bm);
}