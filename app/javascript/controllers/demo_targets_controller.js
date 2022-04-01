import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    const boxF3 = document.querySelectorAll(`[data-xy="F3"]`)[1];
    boxF3.children[0].classList.add("target-circle");
    const boxF5 = document.querySelectorAll(`[data-xy="F5"]`)[1];
    boxF5.children[0].classList.add("target-circle");
    const boxC6 = document.querySelectorAll(`[data-xy="C6"]`)[1];
    boxC6.children[0].classList.add("target-circle");
    const boxH6 = document.querySelectorAll(`[data-xy="H6"]`)[1];
    boxH6.children[0].classList.add("target-circle");
    const boxH9 = document.querySelectorAll(`[data-xy="H9"]`)[1];
    boxH9.children[0].classList.add("target-circle");
    const boxG7 = document.querySelectorAll(`[data-xy="G7"]`)[1];
    boxG7.children[0].classList.add("target-circle");
    const boxF4 = document.querySelectorAll(`[data-xy="F4"]`)[1];
    boxF4.children[0].classList.add("target-circle");
    boxF4.children[0].classList.add("target-circle-hit");
    const boxG4 = document.querySelectorAll(`[data-xy="G4"]`)[1];
    boxG4.children[0].classList.add("target-circle");
    boxG4.children[0].classList.add("target-circle-hit");
    const boxC7 = document.querySelectorAll(`[data-xy="C7"]`)[1];
    boxC7.children[0].classList.add("target-circle");
    boxC7.children[0].classList.add("target-circle-hit");
    const boxD7 = document.querySelectorAll(`[data-xy="D7"]`)[1];
    boxD7.children[0].classList.add("target-circle");
    boxD7.children[0].classList.add("target-circle-hit");

    const currentBoxC4 = document.querySelectorAll(`[data-xy="C4"]`)[0];
    currentBoxC4.children[0].classList.add("target-circle");
    const currentBoxF5 = document.querySelectorAll(`[data-xy="F5"]`)[0];
    currentBoxF5.children[0].classList.add("target-circle");
    const currentBoxG6 = document.querySelectorAll(`[data-xy="G6"]`)[0];
    currentBoxG6.children[0].classList.add("target-circle");
    const currentBoxF8 = document.querySelectorAll(`[data-xy="F8"]`)[0];
    currentBoxF8.children[0].classList.add("target-circle");
    const currentBoxE10 = document.querySelectorAll(`[data-xy="E10"]`)[0];
    currentBoxE10.children[0].classList.add("target-circle");

    const currentBoxC2 = document.querySelectorAll(`[data-xy="C2"]`)[0];
    currentBoxC2.innerHTML = `
    <div class="ship ship-positionned destroyer">
      <div class='ship-layout ship-back' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826705/back-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
      <div class='ship-layout ship-middle' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826782/middle-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
      <div class='ship-layout' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826789/front-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
    </div>
    `
    const currentBoxC6 = document.querySelectorAll(`[data-xy="C6"]`)[0];
    currentBoxC6.innerHTML = `
    <div class="ship ship-positionned submarine">
      <div class='ship-layout ship-back' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826705/back-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
      <div class='ship-layout ship-middle' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826782/middle-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
      <div class='ship-layout' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826863/front-submarine-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
    </div>
    `
    const currentBoxF4 = document.querySelectorAll(`[data-xy="F4"]`)[0];
    currentBoxF4.innerHTML = `
    <div class="ship ship-positionned ship-positionned-vertical-cruiser cruiser">
      <div class='ship-layout ship-back' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826705/back-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
      <div class='ship-layout' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826789/front-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
    </div>
    `

    const currentBoxI6 = document.querySelectorAll(`[data-xy="I6"]`)[0];
    currentBoxI6.innerHTML = `
    <div class="ship ship-positionned ship-positionned-vertical-battleship battleship">
      <div class='ship-layout ship-back' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826705/back-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
      <div class='ship-layout ship-middle' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826782/middle-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
      <div class='ship-layout ship-middle' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826782/middle-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
      <div class='ship-layout' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826789/front-default.png')">
        <div class="ship-circle ship-circle-default">
        </div>
      </div>
    </div>
    `

    const currentBoxG10 = document.querySelectorAll(`[data-xy="G10"]`)[0];
    currentBoxG10.innerHTML = `
    <div class="ship ship-positionned ship-positionned-vertical-aircraft aircraft">
      <div class='ship-layout ship-back' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826852/back-aircraft-default.png')">
        <div class="target-circle target-circle-hit">
        </div>
      </div>
      <div class='ship-layout ship-middle' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826782/middle-default.png')">
        <div class="target-circle target-circle-hit">
        </div>
      </div>
      <div class='ship-layout ship-middle' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826782/middle-default.png')">
        <div class="target-circle target-circle-hit">
        </div>
      </div>
      <div class='ship-layout ship-middle' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826782/middle-default.png')">
        <div class="target-circle target-circle-hit">
        </div>
      </div>
      <div class='ship-layout' style="background-image:url('https://res.cloudinary.com/degmknxek/image/upload/v1648826858/front-aircraft-default.png')">
        <div class="target-circle target-circle-hit">
        </div>
      </div>
    </div>
    `

  }
}