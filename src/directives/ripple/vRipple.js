import { debounce } from "lodash-es";

let rippleColor = null;

function playRipple(event) {
  const { offsetX, offsetY, target } = event;

  // inherit styles from target element to avoid side effects
  const targetComputedStyles = window.getComputedStyle(target);
  const saveStyles = {
    gridArea: targetComputedStyles.gridArea,
    boxShadow: targetComputedStyles.boxShadow,
    borderRadius: targetComputedStyles.borderRadius,
  };

  const rippleWrapper = document.createElement("span");
  rippleWrapper.classList.add("ripple-wrapper");
  Object.assign(rippleWrapper.style, saveStyles);

  target.after(rippleWrapper);
  rippleWrapper.append(target);

  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.backgroundColor = rippleColor;
  ripple.style.top = offsetY + "px";
  ripple.style.left = offsetX + "px";

  target.after(ripple);

  setTimeout(() => {
    rippleWrapper.after(target);
    rippleWrapper.remove();
  }, 250);
}

export default {
  mounted: (el, binding) => {
    el.addEventListener("click", () => (rippleColor = binding.value));
    el.addEventListener("click", debounce(playRipple, 250));
  },
  beforeUnmount: (el, binding) => {
    el.removeEventListener("click", () => (rippleColor = binding.value));
    el.removeEventListener("click", playRipple);
  },
};
