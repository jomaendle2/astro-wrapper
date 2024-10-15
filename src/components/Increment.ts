import { count } from "../state/state";
import { animateTextChange } from "../util/animation";

export class Increment extends HTMLElement {
  constructor() {
    super();

    const counterValueElement = this.querySelector(
      "#counter-value"
    ) as HTMLElement;

    count.subscribe((value) => {
      counterValueElement?.replaceChildren(
        document.createTextNode(String(value))
      );

      animateTextChange(counterValueElement);
    });
  }
}

customElements.define("astro-increment", Increment);
