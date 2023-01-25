const {app, BrowserWindow} = require("electron");

function createWindow(){
    const win = new BrowserWindow({
        width: 500,
        height: 800,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#faf1e4',
            height: 20
        },
        frame: false,
        transparent: true,
        maximizable: false,
        resizable: false
    });
    win.loadURL("http://localhost:5173/");
}

app.whenReady().then(() => {
    createWindow();

    app.on("active", () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});