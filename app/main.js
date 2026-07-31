const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const backend = require('./backend');

function createWindow() {
  const win = new BrowserWindow({
    width: 960,
    height: 680,
    backgroundColor: '#0b1418',
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}

ipcMain.handle('sources:detect', () => backend.detectSources());

ipcMain.handle('search:query', async (_event, term) => {
  const sources = await backend.detectSources();
  const results = {};
  const errors = {};

  const jobs = [
    ['apt', backend.searchApt],
    ['flatpak', backend.searchFlatpak],
    ['snap', backend.searchSnap],
  ];

  await Promise.all(
    jobs.map(async ([key, fn]) => {
      if (!sources[key]) return;
      try {
        results[key] = await fn(term);
      } catch (err) {
        errors[key] = err.message;
        results[key] = [];
      }
    })
  );

  return { sources, results, errors };
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
