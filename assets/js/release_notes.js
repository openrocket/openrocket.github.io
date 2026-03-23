document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with the data-version attribute
    const contentDivs = document.querySelectorAll('div[data-version]');

    contentDivs.forEach(div => {
        const version = div.getAttribute('data-version');
        fillWhatsNew(version, div.id);
    });
});