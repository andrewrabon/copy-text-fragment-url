import { clipboard } from '@bumble/clipboard';

chrome.contextMenus.create({
  title: 'Copy Text Fragment URL',
  id: 'copy-text-fragment-url',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === 'copy-text-fragment-url') {
    clipboard.writeText(`${info.pageUrl}#:~:text=${encodeURIComponent(info.selectionText)}`);
  }
});
