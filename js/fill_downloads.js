// Utility functions

function getVersion() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('vers');
}

/**
 * Returns the configuration object from downloads_config.js, according to the passed version
 * @param {string} version 
 * @returns JS object 
 */
function getConfigObj(version) {
    return downloads_config.find(obj => obj.name === version);
}

// Dropdown functions

/**
 * Sets the text of the dropdown button to the targeted version
 * @param {string} version The targetted OpenRocket version
 */
function selectDropdownVersion(version) {
    const dropbtn = document.getElementById('dropbtn');
    dropbtn.innerHTML = `${version}<i class="fa-solid fa-angle-down" style="margin-left: 15px;"></i>`;
}

function fillDownloadsDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    downloads_config.forEach(version => {
        const versionLink = document.createElement('a');
        versionLink.href = `downloads.html?vers=${version.name}`;
        versionLink.innerHTML = (version.name === CURRENT_VERSION) ? `<b>${version.name}</b>` + " <i>(latest)</i>" : version.name;
        dropdownContent.appendChild(versionLink);
    });
}

/**
 * Fills the download content of a specific OS
 * @param {string} version The targeted OpenRocket version
 * @param {JS object} configObj The configuration object for the targeted version
 * @param {string} OSName The OS to target
 * @param {string} faIcon The name of the Font Awesome icon to use in the title, or an empty string if no icon is needed
 */
function fillOSContent(version, configObj, OSName, faIcon, ...architectures) {
    const content = document.getElementById(`content-${OSName}`);
    const hasArchitectures = architectures.some(arch => configObj.files[`${OSName}_${arch.replace(/\s+/g, '')}`]);

    // Title
    const title = document.createElement('h3');
    title.className = 'downloads-os-title';
    if (faIcon !== '') {
        const icon = document.createElement('i');
        icon.className = `fa-brands fa-${faIcon}`;
        title.appendChild(icon);
    }
    title.appendChild(document.createTextNode(` ${OSName}`));

    // Extract existing content
    let extractedContent = [];
    while(content.firstChild) {
        extractedContent.push(content.firstChild);
        content.removeChild(content.firstChild);
    }

    // Add the title first
    content.appendChild(title);

    // Add the extracted content back
    extractedContent.forEach(node => {
        content.appendChild(node);
    });

    if (!hasArchitectures && !configObj.files[OSName]) {
        content.style.display = 'none';
        return;
    }

    if (hasArchitectures) {
        architectures.forEach(arch => {
            const archKey = `${OSName}_${arch.replace(/\s+/g, '')}`;
            if (configObj.files[archKey]) {
                // Create label with architecture name
                const archLabel = document.createElement('h5');
                archLabel.classList.add('arch-label');
                archLabel.innerHTML = arch;
                content.appendChild(archLabel);

                // Create a download button
                const archBtn = createDownloadButton(version, configObj.files[archKey]);
                archBtn.classList.add('arch-btn');
                content.appendChild(archBtn);
                content.appendChild(document.createElement('br'));
            }
        });
    } else {
        // Use the default button
        const btn = createDownloadButton(version, configObj.files[OSName]);
        content.appendChild(btn);
    }

    // Instructions Button
    const instructionsBtn = document.createElement('button');
    instructionsBtn.type = 'button';
    instructionsBtn.className = 'collapsible collapsible-download';
    instructionsBtn.innerHTML = `Show ${OSName} installation instructions`;
    content.appendChild(instructionsBtn);

    // Instructions Content
    const instr = document.createElement('div');
    instr.id = `instructions-${OSName}`;
    instr.className = 'collapsible-content';
    const OSInstr = configObj.instructions[OSName];
    addInstructions(instr, OSInstr, version);
    content.appendChild(instr);

    // Attach event listeners for the new collapsible elements
    attachCollapsibleListeners();
}

function handleArchitectures(btn, version, configObj, OSName, architectures) {
    architectures.forEach(arch => {
        const archKey = `${OSName}_${arch.replace(/\s+/g, '')}`;
        if (configObj.files[archKey]) {
            btn.href = `https://github.com/openrocket/openrocket/releases/download/release-${version}/${configObj.files[archKey]}`;
            btn.innerHTML = `<i class="fa-solid fa-download" style="margin-right: 1.5rem"></i>Download ${configObj.files[archKey]}`;
        }
    });
}

function handleDefaultOS(btn, version, configObj, OSName) {
    btn.href = `https://github.com/openrocket/openrocket/releases/download/release-${version}/${configObj.files[OSName]}`;
    btn.innerHTML = `<i class="fa-solid fa-download" style="margin-right: 1.5rem"></i>Download ${configObj.files[OSName]}`;
}

function addInstructions(instr, OSInstr, version) {
    fetch(OSInstr)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Replace the placeholder with the actual version
            const replacedData = data.replaceAll('${VERSION}$', version);

            // Create the zero-md and script elements
            const instrContent = document.createElement('zero-md');
            const markdownContent = document.createElement('script');
            markdownContent.type = 'text/markdown';
            markdownContent.textContent = replacedData;

            // Append the script to zero-md and zero-md to the instr element
            instrContent.appendChild(markdownContent);
            instr.appendChild(instrContent);
        })
        .catch(error => {
            console.error("Error in addInstructions:", error);
        });
}

function createDownloadButton(version, file) {
    const btn = document.createElement('a');
    btn.className = "btn btn-primary btn-lg";
    btn.href = `https://github.com/openrocket/openrocket/releases/download/release-${version}/${file}`;
    btn.innerHTML = `<i class="fa-solid fa-download" style="margin-right: 1.5rem"></i>Download ${file}`;
    return btn;
}

/**
 * Fills in the necessary information in the source code buttons
 * @param {string} version The targetted OpenRocket version
 * @param {string} format The source code format ('zip' or 'tar.gz')
 */
function fillSourceCode(version, format) {
    const elem = document.getElementById(`source-${format}`);
    elem.href = `https://github.com/openrocket/openrocket/archive/refs/tags/release-${version}.${format}`;
    elem.innerHTML = `<i class="fa-solid fa-download" style="margin-right: 1.5rem"></i>Download release-${version}.${format}`;
}

// What's new
function fillWhatsNew(version) {
    const whatsNewDiv = document.getElementById('whats-new');
    const whatsNewBtn = document.getElementById('button-whats-new');

    // Define the URL for the markdown file based on the version
    const markdownUrl = `/whats-new/wn-${version}.html`;

    // Fetch the markdown content
    fetch(markdownUrl)
        .then(response => {
            if (!response.ok) {
                whatsNewDiv.style.display = 'none';
                whatsNewBtn.style.display = 'none';
                throw new Error(`Markdown file ${markdownUrl} not found`);
            }
            return response.text();
        })
        .then(content => {
            // If you have a markdown-to-HTML converter, use it here.
            // For this example, we're directly setting the markdown content.
            const whatsNewDiv = document.getElementById('content-whats-new');
            if (whatsNewDiv) {
                whatsNewDiv.innerHTML = content;

                // Process divs for images
                processWhatsNewContentDiv(whatsNewDiv);
            }
        })
        .catch(error => {
            console.error('Error fetching the markdown:', error);
        });
}

// Main function
window.onload = function() {
    const version = getVersion();

    fillDownloadsDropdown();

    if (!version) {
        window.location.replace(`downloads.html?vers=${getLatestVersion()}`);
        return;
    }

    const configObj = getConfigObj(version);
    if (!configObj) {
        document.getElementById('downloads-content').style.display = 'none';
        selectDropdownVersion('INVALID VERSION');
        return;
    }

    selectDropdownVersion(version);
    fillOSContent(version, configObj, 'Windows', 'windows');
    fillOSContent(version, configObj, 'macOS', 'apple', "Intel", "Apple Silicon");
    fillOSContent(version, configObj, 'Linux', 'linux');
    fillOSContent(version, configObj, 'JAR', 'java');
    fillSourceCode(version, 'zip');
    fillSourceCode(version, 'tar.gz');

    fillWhatsNew(version);
}
