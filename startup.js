
let appconfig = {
    title: 'BarabanJS',
    screenMode:'auto',
    linux:'linux.css', 
    windows:'windows.css', 
    mac:'mac.css', 
    android:'android.css',
    iphone:'iphone.css', 
    ipad:'ipad.css',
     default:'default.css'
    };
        var app = new AppX(appconfig);
        app.Setup();