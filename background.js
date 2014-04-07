/**
 * Created by Tim on 2014/4/6.
 */
//var i = 0;

//var spider=(function(){
//
//}());

var crawlerTabs = [];


function createCrawlerTab() {
    chrome.tabs.create({url: 'blank:', active: false, pinned: true}, function (tab) {
        crawlerTabs.add(tab.id);
    });
}

chrome.tabs.onRemoved.addListener(function (tab) {
    if ($.inArray(tab.id, crawlerTabs)) {
        //TODO remove logic
        remove(tab, crawlerTabs);
    }
});

function remove(obj, array) {
    return $.grep(array, function (value) {
        return value != obj;
    });
}
//setInterval(loop, 2000);

//window.open("background.html#0", "bg", "background");

function loop() {


//    chrome.tabs.captureVisibleTab(function (dataURL) {

    chrome.tabs.create({url: 'http://s.weibo.com/weibo/%E5%8C%97%E4%BA%AC', active: false}, function (tab) {
//            chrome.windows.create({tabId: tab.id,  focused: false}, function (window) {
//                chrome.windows.update(window.id, {state: 'minimized'});

//            chrome.tabs.highlight({tabs:tab.id},function(){
//
//            });
        chrome.tabs.executeScript(tab.id, {file: 'inject.js'});
        i += 1;

//        var iframe=$('<iframe>');
//        iframe.prop('src','http://stackoverflow.com/questions/15532791/getting-around-x-frame-options-deny-in-a-chrome-extension');
//        iframe.appendTo($('body'));
//        iframe.width=500;
//        iframe.height=500;


//        setTimeout(function () {
//            var notification = webkitNotifications.createNotification("",
//                    "Simple Background App " + i,
//                    "A background window has been created" + tab.status);
//            notification.show();
//            chrome.tabs.remove(tab.id);
//            iframe.remove();
//        }, 2000);


//            });

    });


//    });

}

function removeCurrentTab() {
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.remove(tab.id);
    });

}


chrome.tabs.onUpdated.addListener(function () {

});

//chrome.webRequest.onHeadersReceived.addListener(
//    function(info) {
//        var headers = info.responseHeaders;
//        for (var i=headers.length-1; i>=0; --i) {
//            var header = headers[i].name.toLowerCase();
//            if (header == 'x-frame-options' || header == 'frame-options') {
//                headers.splice(i, 1); // Remove header
//            }
//        }
//        return {responseHeaders: headers};
//    },
//    {
//        urls: [ '*://*/*' ], // Pattern to match all http(s) pages
//        types: [ 'sub_frame' ]
//    },
//    ['blocking', 'responseHeaders']
//);

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({file: 'inject.js'});
    //alert(i);
//    var notification = webkitNotifications.createNotification("",
//            "Simple Background App " + i,
//        "A background window has been created");
//    notification.show();
//    chrome.tabs.captureVisibleTab(function (dataURL) {
//        chrome.tabs.create({url: dataURL});
//    });
//    chrome.tabs.highlight(null,tab);
//    var iframe=$('<iframe>').text('HI').appendTo($('body'));

});

chrome.runtime.onConnect.addListener(function (port) {
    //console.log(port.name == "knockknock");
    var tab = port.sender.tab;

    port.onMessage.addListener(function (msg) {
        console.log(msg);
        port.postMessage({ack: "200"});

        switch (msg) {
            case 'fin':
                //chrome.tabs.remove(tab.id);
                break;
            default :
                break;
        }

    });
});