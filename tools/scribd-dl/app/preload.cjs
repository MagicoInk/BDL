const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('scribd', {
  download: (urls, outDir) => ipcRenderer.invoke('download', { urls, outDir }),
  cancel: () => ipcRenderer.invoke('cancel'),
  chooseFolder: (current) => ipcRenderer.invoke('choose-folder', current),
  defaultFolder: () => ipcRenderer.invoke('default-folder'),
  openPath: (p) => ipcRenderer.invoke('open-path', p),
  showFile: (p) => ipcRenderer.invoke('show-file', p),
  onProgress: (cb) => ipcRenderer.on('progress', (_e, data) => cb(data)),
});
