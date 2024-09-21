document.addEventListener("DOMContentLoaded", function() {
        const btn = document.getElementById("backToTopBtn");

        window.addEventListener("scroll", function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        });

        btn.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });