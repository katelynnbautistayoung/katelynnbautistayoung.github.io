document.addEventListener("DOMContentLoaded", () => {
  const centercards = document.querySelectorAll(".centercard, .card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Optional: animate only once
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  centercards.forEach(card => {
    observer.observe(card);
  });
});