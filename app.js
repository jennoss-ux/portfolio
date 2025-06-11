const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    const icon = document.querySelector("header .material-symbols-outlined");

    if (!menu || !icon) return;

    menu.classList.toggle("active");
    icon.innerHTML = menu.classList.contains("active") ? "close" : "menu";
};



// Fermer le menu et scroller vers l'ancre
document.querySelectorAll(".header-menu .js").forEach(link => {
    link.addEventListener("click", (e) => {
        // Empêche le comportement par défaut
        e.preventDefault();

        // Cible la section (ex: #contact, #competences, etc.)
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        // Scroll fluide vers la section
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }

        // Ferme le menu mobile si ouvert
        const menu = document.querySelector(".header-menu");
        menu.classList.remove("active");
        document.querySelector("header .material-symbols-outlined").innerHTML = "menu";
    });
});