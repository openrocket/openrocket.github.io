function addImageWithCaption(imagePath, captionText, width = 'auto', useShadow = false) {
    const currentScript = document.currentScript;

    const figure = document.createElement('figure');
    figure.className = "enlargeable-image";

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = captionText;
    img.style.width = width;
    img.onclick = function() { enlargeImage(this); };
    if (useShadow) {
        img.className = "figure-shadow";
    }
    figure.appendChild(img);

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = captionText;
    if (useShadow) {
        figcaption.className = "figure-shadow-caption";
    }
    figure.appendChild(figcaption);

    currentScript.parentNode.insertBefore(figure, currentScript);
}