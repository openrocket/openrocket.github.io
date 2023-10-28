/**
 * Add an image to the page.
 * 
 * Example usage, for an image with shadow:
 *          addImageWithCaption("images/my-image.png", "My image caption", "50%", true)
 * 
 * @param {*} imagePath path to the image file
 * @param {*} captionText caption text for the image
 * @param {*} width width of the image. Default is 'auto'.
 * @param {*} useShadow if true, the image will have a shadow. Default is false.
 */
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

/**
 * Add a warning message to the page.
 * 
 * Example usage:
 *      addWarningMessage("This is a **warning message**.", true)
 *      addWarningMessage("This is normal text.", false)
 * 
 * @param {*} messageText the text of the warning message. This may be markdown.
 * @param {*} isMarkdown if true, the message text will be interpreted as markdown text and formatted accordingly. Use false for normal text.
 */
function addWarningMessage(messageText, isMarkdown = false) {
    const currentScript = document.currentScript;

    // Create the div container for the warning message
    const warningDiv = document.createElement('div');
    warningDiv.className = "warning-message";

    // Create the icon for the warning message
    const warningIcon = document.createElement('i');
    warningIcon.className = "icon-warning";
    warningIcon.textContent = "⚠️";
    warningDiv.appendChild(warningIcon);

    // Convert messageText from markdown to HTML if needed
    const messageHtml = isMarkdown ? marked.parse(messageText) : messageText;
    warningDiv.innerHTML += " " + messageHtml;

    // Insert the warning message before the current script tag
    currentScript.parentNode.insertBefore(warningDiv, currentScript);
}