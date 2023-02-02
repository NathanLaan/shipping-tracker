try {
  //importScripts(['options.js']);
} catch (error) {
  clog(error);
}

//
// Pre-pad num < 10 with a "0".
//
function pad(num){
  return (num<10 ? "0" : "") + num;
}
//
// Return formatted timestamp: hh:mm:ss.
//
function getTimeFormatted() {
  const d = new Date();
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
//
// Console log with timestamp and message.
//
function clog(m) {
  console.log(getTimeFormatted() + " " + m);
}

chrome.runtime.onMessage.addListener((request, sender, callback) => {
  switch (request.message) {
    case 'add':
      //addLink(callback);
      break;
    default:
      clog(request.message);
  }
  /*
   * Return true to keep response function in scope for async calls
   * https://stackoverflow.com/questions/20077487/
   */
  return true;
});

chrome.runtime.onStartup.addListener(() => {
  clog('onStartup');
});

chrome.commands.onCommand.addListener((command) => {
  clog(`BGROUND Command: ${command}`);
});
