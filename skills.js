document.addEventListener("DOMContentLoaded", function () {

    const skills = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const value = entry.target.getAttribute("data-progress");
                entry.target.style.width = value + "%";
            }
        });
    }, { threshold: 0.3 });

    skills.forEach(skill => observer.observe(skill));

});