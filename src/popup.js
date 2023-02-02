msg('popup');
var shippingLinkListElement;

/**
 * Log the specified message in the background.js console
 * @param {string} m  Message to log.
 */
function msg(m) {
  chrome.runtime.sendMessage({message: m});
}

window.onload = function () {
  shippingLinkListElement = document.getElementById('shippingLinkList');
};



/*
 * 
 * HTML element functions
 * 
 */

function createLinkElement(url, txt) {
  const link = document.createElement('a');
  link.href = url;
  link.title = txt;
  link.target = '_blank';
  link.appendChild(document.createTextNode(txt));
  return link;
}

function createFolderElement(txt) {
  const listElement = document.createElement('li');
  const divElement = document.createElement('div');
  const iElement = document.createElement('i');
  iElement.className = 'fa fa-folder';
  divElement.appendChild(iElement);
  divElement.appendChild(document.createTextNode(' ' + txt));
  listElement.appendChild(divElement);
  return listElement;
}

function createShippingLinkListElement(bookmark) {
  const listElement = document.createElement('li');
  listElement.appendChild(createLinkElement(bookmark.url, bookmark.title));
  return listElement;
}
