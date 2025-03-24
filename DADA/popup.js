function listenForClicks() {
    document.getElementById("dadafyButton").addEventListener("click", (e) => {
        browser.tabs.executeScript({ file: "DADA.js" })
    })
}

listenForClicks();
