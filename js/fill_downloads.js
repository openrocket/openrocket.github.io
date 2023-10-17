function getVersion() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('vers')
}

/**
 * Returns the configuration object from downloads_config.js, according to the passed version
 * @param {string} version 
 * @returns JS object 
 */
function getConfigObj(version) {
    return downloads_config.find(obj => {
        return obj.name === version
    })
}

function getLatestVersion() {
    return downloads_config[0].name;
}

/**
 * Sets the text of the dropdown button to the targetted version
 * @param {string} version The targetted OpenRocket version
 */
function selectDropdownVersion(version) {
    let dropbtn = document.getElementById('dropbtn');
    dropbtn.innerHTML = `${version}<i class="fa-solid fa-angle-down" style="margin-left: 15px;"></i>`
}

/**
 * Fills the download content of a specific OS
 * @param {string} version The targeted OpenRocket version
 * @param {JS object} configObj The configuration object for the targeted version
 * @param {string} OSName The OS to target
 */
function fillOSContent(version, configObj, OSName, ...architectures) {
    let content = document.getElementById(`content-${OSName}`);
    let fillContent = document.getElementById(`fillContent-${OSName}`);
    let btn = content.getElementsByTagName('a')[0];
    let instr = document.getElementById(`instructions-${OSName}`);

    // Check for architectures
    let hasArchitectures = architectures.some(arch => configObj.files[`${OSName}_${arch.replace(/\s+/g, '')}`]);

    // Hide this OS element if there is no information about it in the configObj
    if (!hasArchitectures && !configObj.files[OSName]) {
        content.style.display = 'none';
        return;
    }

    if (hasArchitectures) {
        // Hide the default button
        btn.style.display = 'none';

        // Create a new button for each architecture
        architectures.forEach(arch => {
            const archKey = `${OSName}_${arch.replace(/\s+/g, '')}`;
            if (configObj.files[archKey]) {
                fillContent.style.position = "relative";

                // Create label with architecture name
                const archLabel = document.createElement('h5');
                archLabel.style.display = 'inline-block';
                archLabel.innerHTML = arch;
                fillContent.append(archLabel);

                // Create a download button
                const archBtn = document.createElement('a');
                archBtn.className = "btn btn-primary btn-lg";
                archBtn.style.display = 'inline-block';
                archBtn.style.position = "absolute";
                archBtn.style.left = "10em";
                archBtn.role = "button";
                archBtn.href = `https://github.com/openrocket/openrocket/releases/download/release-${version}/${configObj.files[archKey]}`;
                archBtn.innerHTML = `<i class="fa-solid fa-download" style="margin-right: 1.5rem"></i>Download ${configObj.files[archKey]}`;
                fillContent.append(archBtn);
                fillContent.append(document.createElement('br'));
            }
        });
    } else {
        // Update the download button content
        btn.href = `https://github.com/openrocket/openrocket/releases/download/release-${version}/${configObj.files[OSName]}`;
        btn.innerHTML = `<i class="fa-solid fa-download" style="margin-right: 1.5rem"></i>Download ${configObj.files[OSName]}`;
    }

    // Add the instructions
    const OSInstr = configObj.instructions[OSName];
    let instrContent = document.createElement('zero-md');
    instrContent.src = OSInstr;

    // Format the element using the main css
    let template = document.createElement('template');
    let link = document.createElement('link');
    link.rel = 'stylesheet';  // Fixed typo here from 'stylsheet' to 'stylesheet'
    link.href = '/css/main.css';
    template.append(link);
    instrContent.append(template);

    instr.append(instrContent);
}

/**
 * Fills in the necessary information in the source code buttons
 * @param {string} version The targetted OpenRocket version
 * @param {string} format The source code format ('zip' or 'tar.gz')
 */
function fillSourceCode(version, format) {
    let elem = document.getElementById(`source-${format}`)
    elem.href = `https://github.com/openrocket/openrocket/archive/refs/tags/release-${version}.${format}`;
    elem.innerHTML = `<i class="fa-solid fa-download" style="margin-right: 1.5rem"></i>Download release-${version}.${format}`;
}

function fillDownloadsDropdown() {
    // Get the dropdown content element
    let dropdownContent = document.getElementById('dropdown-content');

    // Loop through the downloads_config and add each version to the dropdown
    downloads_config.forEach(version => {
        let versionLink = document.createElement('a');
        versionLink.href = `downloads.html?vers=${version.name}`;
        versionLink.innerHTML = version.name;

        // If this version is the latest, bold it
        if (version.name === CURRENT_VERSION) {    // CURRENT_VERSION is passed to the script by the HTML page
            versionLink.innerHTML = `<b>${version.name}</b>`;
        }

        dropdownContent.appendChild(versionLink);
    });
}

window.onload = function() {
    const version = getVersion();

    fillDownloadsDropdown();
    
    if ((typeof version === 'undefined') || ( version == null)) {
        // Redirect to latest version
        window.location.replace(`downloads.html?vers=${getLatestVersion()}`);
    }

    let configObj = getConfigObj(version);

    if ((typeof configObj === 'undefined') || (configObj == null)) {
        var content = document.getElementById('downloads-content');
        content.style.display = 'none';
        selectDropdownVersion('INVALID VERSION');
        return
    }

    selectDropdownVersion(version);

    fillOSContent(version, configObj, 'Windows');
    fillOSContent(version, configObj, 'macOS', "Intel", "Apple Silicon");
    fillOSContent(version, configObj, 'Linux');
    fillOSContent(version, configObj, 'JAR');

    fillSourceCode(version, 'zip');
    fillSourceCode(version, 'tar.gz');
}

