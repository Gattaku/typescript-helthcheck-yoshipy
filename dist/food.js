import { Score } from "./score.js";
export class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHnadler.bind(this));
    }
    clickEventHnadler() {
        this.element.classList.toggle("food--active");
        const score = Score.getInstance();
        score.render();
    }
}
