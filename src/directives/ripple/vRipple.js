import { debounce } from "lodash-es";

let rippleColor = null;
let targetElement = null;

function playRipple(event) {
  event.preventDefault();
  const { offsetX, offsetY } = event;

  // inherits styles from target element to avoid side effects
  const targetComputedStyles = window.getComputedStyle(targetElement);
  const saveStyles = {
    display: targetComputedStyles.display,
    gridArea: targetComputedStyles.gridArea,
    boxShadow: targetComputedStyles.boxShadow,
    borderRadius: targetComputedStyles.borderRadius,
  };

  const rippleWrapper = document.createElement("span");
  rippleWrapper.classList.add("ripple-wrapper");
  Object.assign(rippleWrapper.style, saveStyles);

  targetElement.after(rippleWrapper);
  rippleWrapper.append(targetElement);

  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.backgroundColor = rippleColor;
  ripple.style.top = offsetY + "px";
  ripple.style.left = offsetX + "px";

  targetElement.after(ripple);

  setTimeout(() => {
    rippleWrapper.after(targetElement);
    rippleWrapper.remove();
  }, 250);
}

export default {
  mounted: (el, binding) => {
    el.addEventListener("click", () => {
      rippleColor = binding.value;
      targetElement = el;
    });
    el.addEventListener("click", debounce(playRipple, 250));
  },
  beforeUnmount: (el) => {
    el.removeEventListener("click", playRipple);
  },
};
