// Loads the 3D avatar (three.js + a 1.1 MB model) only where it's shown at full size:
// wide screens with a mouse. Phones and tablets keep the lighter 2.5D version from orb.js.
if (window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 860) {
  import("./avatar3d-model.js");
}
