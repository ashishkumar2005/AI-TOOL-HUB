document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("keyup", function() {
        let filter = this.value.toLowerCase();

        cards.forEach(card => {
            let title = card.querySelector("h2").innerText.toLowerCase();
            let links = Array.from(card.querySelectorAll("a")).map(a => a.innerText.toLowerCase());

            if (title.includes(filter) || links.some(link => link.includes(filter))) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});