window.addEventListener("scroll", () => {
  const frames = document.querySelectorAll(".img");

  frames.forEach((img, i) => {
    const speed = 0.05 * (i + 1);
    img.style.transform = `scale(${1 + window.scrollY * speed * 0.0002})`;
  });
});
