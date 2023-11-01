/**
 * Common function to create a figure element with an image and caption.
 * 
 * @param {string} imagePath path to the image file
 * @param {string} captionText caption text for the image
 * @param {boolean} useShadow if true, the image will have a shadow. Default is false.
 * @returns The created figure element
 */
function createImage(imagePath, captionText, useShadow = false) {
    const figure = document.createElement('figure');
    figure.className = "enlargeable-image";

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = captionText;
    img.onclick = function() { enlargeImage(this); };
    if (useShadow) {
        img.className = "figure-shadow";
    }
    figure.appendChild(img);

    addCaption(captionText, useShadow, figure);

    return figure;
}

/**
 * Add an image to a placeholder div.
 * 
 * @param {HTMLElement} placeholderDiv the div with the image data attributes.
 * @param {string} align how the image should be aligned: 'left', 'center' or 'right'. Default is 'center'.
 * @param {boolean} isInline whether the image is inline (text wraps around it) or not. Default is false.
 * @param {string} imagePath path to the image file
 * @param {string} captionText caption text for the image
 * @param {string} width width of the image (e.g. '50%'). Default is 'auto'.
 * @param {boolean} useShadow if true, the image will have a shadow. Default is false.
 */
function addImageToPlaceholder(placeholderDiv, align = 'center', isInline = false, imagePath, captionText, width = 'auto', useShadow = false) {
    formatPlaceholderDiv(placeholderDiv, isInline, align, width);

    const figure = createImage(imagePath, captionText, useShadow);
    placeholderDiv.appendChild(figure);
}

// ------------------------------------------- VIDEOS -------------------------------------------
/**
 * Common function to create a video element with a caption.
 * 
 * @param {string} videoPath path to the video file
 * @param {string} captionText caption text for the video
 * @param {boolean} useControls if true, the video will have player controls. Default is true.
 * @param {boolean} useShadow if true, the video will have a shadow. Default is false.
 * @returns The created video element
 */
function createVideo(videoPath, captionText, useControls = true, useShadow = false) {
    const figure = document.createElement('figure');
    figure.className = "enlargeable-video";

    const video = document.createElement('video');
    video.src = videoPath;
    video.controls = useControls;

    if (useShadow) {
        video.className = "figure-shadow";
    }

    figure.appendChild(video);

    addCaption(captionText, useShadow, figure);

    return figure;
}

/**
 * Add a video to a placeholder div.
 * 
 * @param {HTMLElement} placeholderDiv the div with the video data attributes.
 * @param {string} align how the image should be aligned: 'left', 'center' or 'right'. Default is 'center'.
 * @param {boolean} isInline whether the image is inline (text wraps around it) or not. Default is false.
 * @param {string} videoPath path to the image file
 * @param {string} captionText caption text for the image
 * @param {string} [width='auto'] width of the image (e.g. '50%'). Default is 'auto'.
 * @param {boolean} [useControls=true] if true, the video will have player controls. Default is true.
 * @param {boolean} useShadow if true, the image will have a shadow. Default is false.
 */
function addVideoToPlaceholder(placeholderDiv, align = 'center', isInline = false, videoPath, captionText, width = 'auto', useControls = true, useShadow = false) {
    formatPlaceholderDiv(placeholderDiv, isInline, align, width);

    const figure = createVideo(videoPath, captionText, useControls, useShadow);
    placeholderDiv.appendChild(figure);
}

// ------------------------------------------- OTHER -------------------------------------------
function addCaption(captionText, useShadow, figure) {
    const figcaption = document.createElement('div');
    figcaption.className = "figure-caption";

    // Create a span element to hold the captionText
    const captionSpan = document.createElement('span');
    captionSpan.textContent = captionText;
    figcaption.appendChild(captionSpan);

    if (useShadow) {
        figcaption.className += " figure-shadow-caption";
    }

    figure.appendChild(figcaption);
}

function formatPlaceholderDiv(placeholderDiv, isInline, align, width) {
    placeholderDiv.classList.add('figure-container');
    if (isInline === true) {
        const className = "inline-figure-container-" + align;
        placeholderDiv.classList.add(className);
    } else {
        const className = "figure-container-" + align;
        placeholderDiv.classList.add(className);
    }
    placeholderDiv.style.width = width;
}

/**
 * Add a section break to clear floating elements.
 * @param {HTMLElement} placeholderDiv the div with the data-section-break attribute.
 */
function addSectionBreak(placeholderDiv) {
    const sectionBreakDiv = document.createElement('div');
    sectionBreakDiv.style.clear = "both";
    
    placeholderDiv.parentNode.insertBefore(sectionBreakDiv, placeholderDiv);
    placeholderDiv.remove();
}

/**
 * Add a warning message to the page.
 * 
 * Example usage:
 *      addWarningMessage("This is a **warning message**.", true)
 *      addWarningMessage("This is normal text.", false)
 * 
 * @param {string} messageText the text of the warning message. This may be markdown.
 * @param {boolean} isMarkdown if true, the message text will be interpreted as markdown text and formatted accordingly. Use false for normal text.
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

/**
 * Add an image or video based on the provided div's attributes.
 *
 * @param {HTMLElement} divElement The div element containing the necessary data attributes.
 */
function processMediaElement(divElement) {
    // Handle images
    divElement.querySelectorAll('[data-image-path]').forEach(placeholder => {
        const align = placeholder.getAttribute('data-image-align') || 'center'; // Default to 'center'
        const isInline = placeholder.getAttribute('data-image-inline') === 'true' || false; // Default to false
        const path = placeholder.getAttribute('data-image-path');
        const caption = placeholder.getAttribute('data-image-caption');
        const width = placeholder.getAttribute('data-image-width') || 'auto';
        const useShadow = placeholder.getAttribute('data-image-shadow') === 'true' || false; // Default to false

        addImageToPlaceholder(placeholder, align, isInline, path, caption, width, useShadow);
    });

    // Handle videos
    divElement.querySelectorAll('[data-video-path]').forEach(placeholder => {
        const align = placeholder.getAttribute('data-video-align') || 'center'; // Default to 'center'
        const isInline = placeholder.getAttribute('data-video-inline') === 'true' || false; // Default to false
        const path = placeholder.getAttribute('data-video-path');
        const caption = placeholder.getAttribute('data-video-caption');
        const width = placeholder.getAttribute('data-video-width') || 'auto';
        const useControls = placeholder.getAttribute('data-video-controls') !== 'false';    // Default to true
        const useShadow = placeholder.getAttribute('data-video-shadow') === 'true' || false; // Default to false

        addVideoToPlaceholder(placeholder, align, isInline, path, caption, width, useControls, useShadow);
    });

    // Handle section breaks
    divElement.querySelectorAll('[data-section-break="true"]').forEach(placeholder => {
        addSectionBreak(placeholder);
    });
}