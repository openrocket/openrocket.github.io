// Constants
const downloads_config_path = '/assets/downloads_config.json';

// Utility functions

function getVersion() {
    const urlParams = new URLSearchParams(window.location.search);
    let vers = urlParams.get('vers');

    if (!vers || vers === 'latest') {
        vers = CURRENT_VERSION;
    }

    return vers;
}

/**
 * Returns the configuration object from downloads_config.yml, according to the passed version
 * @param {string} version 
 * @returns JSON object 
 */
async function getConfigObj(version) {
    try {
        const response = await fetch(downloads_config_path);
        const data = await response.json();
        return data.find(obj => obj.name === version);
    } catch (e) {
        console.error('Error loading JSON file', e);
    }
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

    fetch(downloads_config_path)
        .then(response => response.json())
        .then(data => {
            data.forEach(version => {
                const versionLink = document.createElement('a');
                versionLink.href = `downloads.html?vers=${version.name}`;
                versionLink.innerHTML = (version.name === CURRENT_VERSION) ? `<b>${version.name}</b> <i>(latest)</i>` : version.name;
                dropdownContent.appendChild(versionLink);
            });
        })
        .catch(error => {
            console.error('Error loading JSON file', error);
        });
}

/**
 * Fills the download content of a specific OS
 * @param {string} version The targeted OpenRocket version
 * @param {JSON object} configObj The configuration object for the targeted version
 * @param {string} OSName The OS to target
 * @param {string} title The titleText to be displayed on the site, or null if OSName should be used for the title
 * @param {string} faIcon The name of the Font Awesome icon to use in the title, or an empty string if no icon is needed
 * @param {...string} architectures Optional architecture parameters (e.g., "x86_64", "Arm64")
 */
function fillOSContent(version, configObj, OSName, titleText, faIcon, ...architectures) {
    const content = document.getElementById(`content-${OSName}`);
    
    // Check if we have architecture-specific files
    const hasArchitectures = architectures.length > 0 && 
        architectures.some(arch => configObj.files[`${OSName}_${arch.replace(/\s+/g, '')}`]);

    // Title
    const title = document.createElement('h3');
    title.className = 'downloads-os-title';
    if (faIcon !== '') {
        const icon = document.createElement('i');
        icon.className = `fa-brands fa-${faIcon}`;
        title.appendChild(icon);
    }
    titleString = titleText == null ? OSName : titleText;
    title.appendChild(document.createTextNode(` ${titleString}`));

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

    // Hide the section if no downloads are available
    if (!hasArchitectures && !configObj.files[OSName]) {
        content.style.display = 'none';
        return;
    }

    // Handle architecture-specific downloads if they exist
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
        // Use the default button for single architecture
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

            // Inject dark-mode CSS into zero-md's Shadow DOM.
            // zero-md renders inside Shadow DOM so global CSS cannot reach it.
            // A <template> child is zero-md v2's official way to inject custom styles.
            // :host-context() checks ancestor document state so the rules respond
            // automatically whenever the html.dark-mode class is toggled.
            const dmTemplate = document.createElement('template');
            dmTemplate.innerHTML = `<style>
              /* Smooth transition when toggling theme */
              :host-context(html.theme-transitioning) p,
              :host-context(html.theme-transitioning) li,
              :host-context(html.theme-transitioning) td,
              :host-context(html.theme-transitioning) th,
              :host-context(html.theme-transitioning) h1,
              :host-context(html.theme-transitioning) h2,
              :host-context(html.theme-transitioning) h3,
              :host-context(html.theme-transitioning) h4,
              :host-context(html.theme-transitioning) code,
              :host-context(html.theme-transitioning) pre,
              :host-context(html.theme-transitioning) a,
              :host-context(html.theme-transitioning) blockquote {
                transition: background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease !important;
              }

              /* Dark mode overrides */
              :host-context(html.dark-mode) p,
              :host-context(html.dark-mode) li,
              :host-context(html.dark-mode) strong,
              :host-context(html.dark-mode) em,
              :host-context(html.dark-mode) u,
              :host-context(html.dark-mode) span {
                color: #e5e7eb;
              }
              :host-context(html.dark-mode) h1,
              :host-context(html.dark-mode) h2,
              :host-context(html.dark-mode) h3,
              :host-context(html.dark-mode) h4,
              :host-context(html.dark-mode) h5,
              :host-context(html.dark-mode) h6 {
                color: #e5e7eb;
                border-bottom-color: #374151;
              }
              :host-context(html.dark-mode) a {
                color: #60a5fa;
              }
              :host-context(html.dark-mode) table {
                color: #e5e7eb;
              }
              :host-context(html.dark-mode) th {
                background-color: #2d3748 !important;
                color: #e5e7eb !important;
                border-color: #374151 !important;
              }
              :host-context(html.dark-mode) td {
                color: #e5e7eb !important;
                border-color: #374151 !important;
              }
              :host-context(html.dark-mode) tr:nth-child(even) {
                background-color: #1f2937;
              }
              /* Override inline <style> from the markdown files with !important */
              :host-context(html.dark-mode) code {
                color: #f9a8d4 !important;
                background-color: #2d3748 !important;
              }
              :host-context(html.dark-mode) pre {
                background-color: #1f2937 !important;
                color: #e5e7eb !important;
              }
              :host-context(html.dark-mode) blockquote {
                border-left-color: #374151;
                color: #9ca3af;
              }
              :host-context(html.dark-mode) hr {
                background-color: #374151;
              }
            </style>`;
            instrContent.appendChild(dmTemplate);

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

// Main function
window.onload = async function() {
    const version = getVersion();

    fillDownloadsDropdown();

    try {
        const configObj = await getConfigObj(version);
        if (!configObj) {
            document.getElementById('downloads-content').style.display = 'none';
            selectDropdownVersion('INVALID VERSION');
            return;
        }

        selectDropdownVersion(version);
        fillOSContent(version, configObj, 'Windows', null, 'windows', "x86_64", "Arm64");
        fillOSContent(version, configObj, 'macOS', null, 'apple', "Intel", "Apple Silicon");
        fillOSContent(version, configObj, 'Linux', null, 'linux', "x86_64", "Arm64");
        fillOSContent(version, configObj, 'JAR', 'JAR (not recommended)', 'java');
        fillSourceCode(version, 'zip');
        fillSourceCode(version, 'tar.gz');

        fillWhatsNew(version, 'content-whats-new');
    } catch (e) {
        console.error('Error in loading config', e);
        // Handle the error or display a message
    }
}
