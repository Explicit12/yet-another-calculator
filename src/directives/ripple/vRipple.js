export default {
  mounted: (el, binding) => {
    el.classList.add("ripple-container");
    el.addEventListener("click", ripple);
    el.addEventListener("touchstart", ripple, { passive: true });

    function ripple(event) {
      let offsetX = null;
      let offsetY = null;

      if (event instanceof TouchEvent) {
        offsetX = event.touches[0].clientX;
        offsetY = event.touches[0].clientY;
      } else {
        event.preventDefault();
        offsetX = event.offsetX;
        offsetY = event.offsetY;
      }

      const ripple = document.createElement("div");

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });

      ripple.classList.add("ripple");
      ripple.style.top = offsetY + "px";
      ripple.style.left = offsetX + "px";
      ripple.style.background = binding.value;

      el.append(ripple);
    }
  },

  beforeUnmount: (el) => {
    el.classList.remove("ripple-container");
  },
};
