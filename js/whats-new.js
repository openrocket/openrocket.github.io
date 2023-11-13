// What's new
function fillWhatsNew(version, targetElementId) {
    const targetElement = document.getElementById(targetElementId);

    // Define the URL for the markdown file based on the version
    const markdownUrl = `/whats-new/wn-${version}.html`;

    // Fetch the markdown content
    fetch(markdownUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Markdown file ${markdownUrl} not found`);
            }
            return response.text();
        })
        .then(content => {
            // Check if the target element exists
            if (targetElement) {
                targetElement.innerHTML = content;

                // Process divs for images/videos if needed
                processMediaElement(targetElement);
            }
        })
        .catch(error => {
            console.error('Error fetching the markdown:', error);
            // Optionally hide or alter the target element in case of an error
            if (targetElement) {
                targetElement.innerHTML = `<p>Content not available.</p>`;
            }
        });
}