// Event listener der venter på, at hele DOM er indlæst før den udfører en funktion
document.addEventListener('DOMContentLoaded', function() {

    // Henter elementet med id 'menu-btn' og gemmer det i en konstant variabel
    const menuBtn = document.getElementById('menu-btn');

    // Henter elementet med id 'nav' og gemmer det i en konstant variabel
    const nav = document.getElementById('nav');

    // Henter body-elementet og gemmer det i en konstant variabel
    const body = document.body;

    // Tilføjer en 'click' event listener til menuBtn-elementet
    menuBtn.addEventListener('click', function() {

        // Skifter 'active' klassen på menuBtn-elementet
        menuBtn.classList.toggle('active');

        // Skifter 'active' klassen på nav-elementet
        nav.classList.toggle('active');

        // Skifter 'no-scroll' klassen på body-elementet
        body.classList.toggle('no-scroll');
    });
});
