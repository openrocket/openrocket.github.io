function setDownloadTextByOS(btn) {
    const icon = btn.getElementsByTagName("i")[0];
    const btnText = btn.getElementsByTagName("span")[0];
    const btnInitText = btnText.innerHTML;
    const os = navigator.userAgent;

    // I really f*cking hate how I solved this... I need to get site.current_version from
    // _config.yml, so I just yank it from the initial button text...
    // Please, if you're more knowledgeable than I am, fix my monstrosity...
    const version = btnInitText.substr(10);

    if (os.indexOf("Win") != -1) {
        icon.className = "fa-brands fa-windows";
        btnText.innerHTML = btnInitText + " for Windows";
        btn.href = `downloads.html?vers=${version}#content-Windows`;
    } else if (os.indexOf("Mac") != -1) {
        icon.className = "fa-brands fa-apple";
        btnText.innerHTML = btnInitText + " for macOS";
        btn.href = `downloads.html?vers=${version}#content-macOS`;
    } else if (os.indexOf("Linux") != -1) {
        icon.className = "fa-brands fa-linux";
        btnText.innerHTML = btnInitText + " for Linux";
        btn.href = `downloads.html?vers=${version}#content-Linux`;
    } else {
        icon.className = "fa-solid fa-download";
        btnText.innerHTML = btnInitText;
        btn.href = `downloads.html?vers=${version}`;
    }
}

const btns = document.getElementsByClassName("btn-download");
for (const btn of btns) {
    setDownloadTextByOS(btn);
}
