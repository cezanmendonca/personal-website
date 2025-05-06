const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  icon.style.left = `${Math.random() * 90}%`;
  icon.style.animationDuration = `${8 + Math.random() * 5}s`;
  icon.style.top = `${Math.random() * 100}vh`;
});
