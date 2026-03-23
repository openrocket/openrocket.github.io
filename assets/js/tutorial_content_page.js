/**
 * Replaces all divs with data attributes for images and videos with the appropriate media.
 */
function replaceMedia() {
    const tutorialContentDiv = document.getElementById('tutorial-content');

    // Process divs for images/videos
    processMediaElement(tutorialContentDiv);
}

document.addEventListener('DOMContentLoaded', replaceMedia);

window.addEventListener('scroll', function() {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myProgressBar").style.width = scrolled + "%";

    // Check which section is currently visible
    const sections = document.querySelectorAll('h3'); // Assuming sections are marked by h2
    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            document.getElementById("currentSection").textContent = section.textContent;
            break; // We found the visible section, no need to continue
        }
    }
});