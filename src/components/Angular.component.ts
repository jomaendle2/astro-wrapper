import {
  Component,
  effect,
  ElementRef,
  EventEmitter,
  inject,
  Output,
  viewChild,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NANOSTORES, NanostoresService } from "@nanostores/angular";
import { count } from "../state/state";
import { animateTextChange } from "../util/animation";

@Component({
  standalone: true,
  selector: "app-angular",
  imports: [],
  template: `
    <img src="/assets/ng.png" class="max-w-32" />

    <div>
      <p #countRef class="transition-transform inline-block">
        {{ count() }}
      </p>
    </div>

    <div>
      <button (click)="increment.emit()">Increment</button>
    </div>
  `,
  providers: [{ provide: NANOSTORES, useClass: NanostoresService }],
  host: { class: "flex flex-col gap-4 h-full items-center justify-center" },
})
export class Angular {
  nanostores = inject(NanostoresService);

  count = toSignal(this.nanostores.useStore(count));

  countRef = viewChild<ElementRef<HTMLElement>>("countRef");

  @Output()
  increment = new EventEmitter<void>();

  constructor() {
    effect(() => {
      const count = this.count();
      const countRef = this.countRef()?.nativeElement;

      if (countRef && count) {
        animateTextChange(countRef);
      }
    });
  }
}
