const { app, BrowserWindow } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        transparent: true, // Torna a janela transparente
        alwaysOnTop: true, // Mantém a janela sempre no topo
        frame: false, // Remove bordas
        backgroundColor: '#00000000', // Fundo totalmente transparente
        resizable: false, // Impede o redimensionamento
        webPreferences: {
            nodeIntegration: true
        },
        roundedCorners: true,
    });

    const { screen } = require('electron');
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width } = primaryDisplay.workAreaSize;

    mainWindow.setBounds({ x: (width - 150) / 2, y: 0, width: 130, height: 50 });

    mainWindow.loadFile('index.html');
});
