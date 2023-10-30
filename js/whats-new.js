// ------------------------------------------- IMAGES -------------------------------------------

/**
 * Common function to create a figure element with an image and caption.
 * 
 * @param {string} imagePath path to the image file
 * @param {string} captionText caption text for the image
 * @param {boolean} useShadow if true, the image will have a shadow. Default is false.
 * @returns The created figure element
 */
function createFigure(imagePath, captionText, useShadow = false) {
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

    const figcaption = document.createElement('div');
    figcaption.className = "figure-caption";
    figcaption.textContent = captionText;
    if (useShadow) {
        figcaption.className += " figure-shadow-caption";
    }
    figure.appendChild(figcaption);

    return figure;
}

function addImageAligned(direction, imagePath, captionText, width = 'auto', useShadow = false, containerDiv) {
    const className = direction === 'right' ? "figure-right figure-rn" : "figure-left figure-rn";
    containerDiv.className = className;
    containerDiv.style.width = width;

    const figure = createFigure(imagePath, captionText, useShadow);
    containerDiv.appendChild(figure);
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

    const figcaption = document.createElement('div');
    figcaption.className = "figure-caption";
    figcaption.textContent = captionText;
    if (useShadow) {
        figcaption.className += " figure-shadow-caption";
    }
    figure.appendChild(figcaption);

    return figure;
}

function addVideoAligned(direction, videoPath, captionText, width = 'auto', useControls = true, useShadow = false, containerDiv) {
    const className = direction === 'right' ? "figure-right" : "figure-left";
    containerDiv.className = className;
    containerDiv.style.width = width;

    const videoElement = createVideo(videoPath, captionText, useControls, useShadow);
    containerDiv.appendChild(videoElement);
}

// ------------------------------------------- OTHER -------------------------------------------

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

function processWhatsNewContentDiv(parentDiv) {
    // Handle images
    parentDiv.querySelectorAll('[data-image-align]').forEach(elem => {
        const direction = elem.getAttribute('data-image-align');
        const path = elem.getAttribute('data-image-path');
        const caption = elem.getAttribute('data-image-caption');
        const width = elem.getAttribute('data-image-width') || 'auto';
        const useShadow = elem.getAttribute('data-image-shadow') === 'true';

        addImageAligned(direction, path, caption, width, useShadow, elem);
    });

    // Handle videos
    parentDiv.querySelectorAll('[data-video-align]').forEach(elem => {
        const direction = elem.getAttribute('data-video-align');
        const videoPath = elem.getAttribute('data-video-path');
        const captionText = elem.getAttribute('data-video-caption');
        const width = elem.getAttribute('data-video-width') || 'auto';
        const useControls = elem.getAttribute('data-video-controls') !== 'false';
        const useShadow = elem.getAttribute('data-video-shadow') === 'true';

        addVideoAligned(direction, videoPath, captionText, width, useControls, useShadow, elem);
    });

    // Handle section breaks
    parentDiv.querySelectorAll('[data-section-break="true"]').forEach(elem => {
        addSectionBreak(elem);
    });
}