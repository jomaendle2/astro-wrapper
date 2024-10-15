export function animateTextChange(element?: HTMLElement | null) {
  if (!element) {
    return;
  }

  requestAnimationFrame(() => {
    element.classList.add("scale-[5]");
    setTimeout(() => {
      element.classList.remove("scale-[5]");
    }, 200);
  });
}
