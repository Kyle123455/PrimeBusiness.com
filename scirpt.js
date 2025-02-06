document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("click", () => {
            window.location.href = card.getAttribute("data-link");
        });
    });
});
