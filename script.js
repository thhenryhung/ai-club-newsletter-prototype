const calendarButton = document.querySelector("[data-calendar-cta]");
const toast = document.querySelector("[data-toast]");
let toastTimer;

calendarButton?.addEventListener("click", () => {
  toast?.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast?.classList.remove("is-visible");
  }, 3200);
});
