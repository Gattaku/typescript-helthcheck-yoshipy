import { Foodable } from "./interface";
import { Score } from "./score";

export class Food implements Foodable {
    constructor(public element: HTMLDivElement) {
        element.addEventListener("click", this.clickEventHnadler.bind(this));
    }
    clickEventHnadler() {
        this.element.classList.toggle("food--active");
        const score = Score.getInstance();
        score.render()
    }
}