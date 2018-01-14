chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(null, {
    file: 'main.js'
  });
  chrome.tabs.insertCSS(null, {
    file: 'outline.css'
  });
});
