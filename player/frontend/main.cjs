const {app, BrowserWindow} = require("electron");

function createWindow(){
    const win = new BrowserWindow({
        width: 700,
        height: 2000,
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