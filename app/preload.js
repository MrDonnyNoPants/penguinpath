const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('penguinpath', {
  detectSources: () => ipcRenderer.invoke('sources:detect'),
  search: (term) => ipcRenderer.invoke('search:query', term),
});
