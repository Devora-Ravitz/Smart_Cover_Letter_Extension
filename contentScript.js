document.addEventListener('mouseup', function () {
  let selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    chrome.runtime.sendMessage({
      type: 'selectedText',
      text: selectedText
    });
  }
});
