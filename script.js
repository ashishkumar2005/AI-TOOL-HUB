document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    let debounceTimer;

    searchInput.addEventListener("input", () => {
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            const query = searchInput.value.toLowerCase().trim();

            cards.forEach(card => {
                const title = card.querySelector("h2")?.innerText.toLowerCase() || "";
                const linksText = Array.from(card.querySelectorAll("a"))
                    .map(link => link.innerText.toLowerCase())
                    .join(" ");

                const isMatch =
                    title.includes(query) || linksText.includes(query);

                card.classList.toggle("hidden", !isMatch);
            });
        }, 200); // debounce delay
    });
});
