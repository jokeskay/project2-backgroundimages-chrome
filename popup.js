//Copyright (c) 2017 All rights reserved
//Found in the LICENSE file

function getCurrentTabUrl(callback) {
   var queryInfo = {
    active: true,
    currentWindow: true
  };
  
  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

function click(e) {
   chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundImage='url(" + images[e.target.id] 
        + "'"});
   window.close();
}

var images = {
   staring away = 'http://i64.tinypic.com/t6fec4.jpg'
   bright lights = 'http://i66.tinypic.com/1z4ev7o.jpg'
   yellow background = 'http://i64.tinypic.com/t6fec4.jpg'
   red laser = 'http://i64.tinypic.com/2zgda1v.jpg'

function changeBackground(images) {
  var script = 'document.body.style.backgroundColor="' + color + '";';
  chrome.tabs.executeScript({
    code: script
  });
}

function getSavedBackgroundColor(url, callback) {
  chrome.storage.sync.get(url, (items) => {
    callback(chrome.runtime.lastError ? null : items[url]);
  });
}

function saveBackgroundColor(url, color) {
  var items = {};
  items[url] = color;
  chrome.storage.sync.set(items);
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var dropdown = document.getElementById('dropdown');
    getSavedBackgroundColor(url, (savedColor) => {
      if (savedColor) {
        changeBackgroundColor(savedColor);
        dropdown.value = savedColor;
      }
    });
    dropdown.addEventListener('change', () => {
      changeBackgroundColor(dropdown.value);
      saveBackgroundColor(url, dropdown.value);
    });
  });
});
