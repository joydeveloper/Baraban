'use strict';
const LINUX=0;
const WINDOWS=1;
const MAC=2;
const ANDROID=3;
const IPHONE=4;
const IPAD=5;

class AppX{
  constructor(appconfig) {
    this.appconfig = appconfig;
    window.addEventListener("load",this.Start);
  }
  Setup(){
    document.title = appconfig.name;
    this.AppendMainCss(this.GetDevice());
  }
  Start() {
  consolelog(null,'appstart');
  }
  Stop(){

}
Restart(){

}
GetDevice(){
  let userstring=navigator.userAgent;
  let devicenumber=-1;
  if (userstring.indexOf("Linux") != -1) {
    devicenumber=LINUX;
  } 
  if (userstring.indexOf("Windows") != -1) {
    devicenumber=WINDOWS;
  } 
  if (userstring.indexOf("Macintosh") != -1) {
    devicenumber=MAC;
  } 
  if (userstring.indexOf("Android") != -1) {
    devicenumber=ANDROID;
  } 
  if (userstring.indexOf("iPhone") != -1) {
    devicenumber=IPHONE;
  } 
  if (userstring.indexOf("iPad") != -1) {
    devicenumber=IPAD;
  } 
 return devicenumber;
}
AppendMainCss(devicenumber){
  switch (devicenumber) {
    case LINUX:
      loadCss(this.appconfig.linux)
      break;
      case WINDOWS:
        loadCss(this.appconfig.windows)
        break;
        case MAC:
          loadCss(this.appconfig.mac)
          break;
          case ANDROID:
            loadCss(this.appconfig.android)
            break;
            case IPHONE:
              loadCss(this.appconfig.iphone)
              break;
              case IPAD:
                loadCss(this.appconfig.ipad)
                break;
    default:
      loadCss('default.css')
  }
}
};

