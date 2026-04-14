document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        observer.observe(card);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 150); // delay per card
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});