/**
 * Created by Tim on 2014/4/7.
 */


$('document').ready(function(){

    chrome.runtime.getBackgroundPage(function(bg){
        initPopup(bg.spider);
        //console.log(bg);
    });




    $('#newTabButton').click(function () {
        chrome.tabs.create({url: 'http://stackoverflow.com/questions/4479260/change-height-of-popup-window', active: false}, function (tab) {
            chrome.tabs.executeScript(tab.id, {file: 'inject.js'});
        });
    });


});


function initPopup(engine){

}



//$('#new')








