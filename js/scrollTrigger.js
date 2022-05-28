// SCROLL TRIGGER
const noScriptSafetyEl = document.querySelectorAll("h2");
noScriptSafetyEl.forEach((node) => {
  node.style.opacity = 0;
});

const scrollTrigger = (selector) => {
  let elements = document.querySelectorAll(selector);
  elements.forEach((el) => addObserver(el));
};

const addObserver = (el) => {
  const options = {
    threshold: 0.5,
  };

  let observer = new IntersectionObserver((entries, options) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("heading-animation");
        entry.target.style.opacity = "100%";
      }
    });
  }, options);
  observer.observe(el);
};

scrollTrigger("h2");
