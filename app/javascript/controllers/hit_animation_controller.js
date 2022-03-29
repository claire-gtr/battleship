import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  executeAnimation() {
    this.element.children[0].classList.add("target-circle-hit");
    const imageHit = document.createElement("img");
    imageHit.setAttribute("src", "assets/ships/ship-hit-animation.png");
    imageHit.setAttribute("height", "24");
    imageHit.setAttribute("width", "24");
    imageHit.setAttribute("alt", "ship hit");
    imageHit.classList.add("target-circle-hit-image-fade");
    this.element.children[0].appendChild(imageHit);
  }
}