import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NANOSTORES, NanostoresService } from "@nanostores/angular";
import { count } from "../state/state";

@Component({
  standalone: true,
  selector: "app-angular",
  imports: [],
  template: `
    <img src="/assets/ng.png" class="max-w-32" />

    <div>
      {{ count() }}
    </div>
  `,
  providers: [{ provide: NANOSTORES, useClass: NanostoresService }],
})
export class Angular {
  nanostores = inject(NanostoresService);

  count = toSignal(this.nanostores.useStore(count));
}
