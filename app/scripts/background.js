// browser.runtime.onInstalled.addListener((details) => {
//   console.log('previousVersion', details.previousVersion)
// })

// console.log(`'Allo 'Allo! Event Page`)

browser.contextMenus.create({
  id: "go-collins",
  title: "Search on Collins"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "go-collins") {
    browser.tabs
      .executeScript({
        // file: `/scripts/content-script.js`,
        // TODO: deal with selection in <input />
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
        code: `window.getSelection().toString()`,
        allFrames: true
      })
      .then(function(resolved) {
        // debugger
        console.log(resolved);
        browser.tabs.create({
          active: true,
          url: `https://www.collinsdictionary.com/dictionary/english/${resolved}`
        })
      });
  }
});
