import { useStore } from "@nanostores/react";
import { count } from "../state/state";
export function React() {
  const $count = useStore(count);
  return (
    <div>
      <img src="/assets/react.svg" className="max-w-32" />

      <div>{$count}</div>
    </div>
  );
}
