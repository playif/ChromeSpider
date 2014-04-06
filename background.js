/**
 * Created by Tim on 2014/4/6.
 */

chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript({file:'inject.js'});
});

chrome.runtime.onConnect.addListener(function(port) {
    //console.log(port.name == "knockknock");
    port.onMessage.addListener(function(msg) {
        console.log(msg);
        port.postMessage({ack: "200"});
    });
});