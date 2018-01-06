//Copyright (c) 2017 All rights reserved
//Found in the LICENSE file

function click(e) {
   chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundImage='url(" + images[e.target.id] 
        + "'"});
   window.close();
}

var images = {
   staring away = 'http://i64.tinypic.com/t6fec4.jpg'
   bright lights = 'http://i66.tinypic.com/1z4ev7o.jpg'
   yellow background = 'http://i64.tinypic.com/t6fec4.jpg'
   red laser = 'http://i64.tinypic.com/2zgda1v.jpg'
document.addEventListener(DOMContentLoaded', function() {
   var divs=document.querySelectorAll('div');
   for (var i=0; i<divs,length; i++) {
      divs[i].addEventListener(click,click);
}
   });
}
}
