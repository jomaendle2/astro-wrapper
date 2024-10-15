import { useStore } from "@nanostores/react";
import { useEffect, useRef } from "react";
import { count } from "../state/state";
import { animateTextChange } from "../util/animation";
export function React() {
  const $count = useStore(count);
  const countRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const count = $count;
    const countRefElement = countRef.current;

    if (countRefElement && count) {
      animateTextChange(countRefElement);
    }
  });

  function increment() {
    count.set(count.get() + 1);
  }

  return (
    <div className="flex flex-col gap-4 h-full justify-center items-center">
      <img src="/assets/react.svg" className="w-32 h-32 object-contain" />

      <div>
        <p ref={countRef} className="inline-block transition-transform">
          {$count}
        </p>
      </div>

      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}
