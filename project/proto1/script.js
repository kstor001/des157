console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //get elements by ID and create variables
    var title=document.getElementById ('title');
    var emotionsAll=document.getElementByClass ('emotionsAll');
    var prompt=document.getElementById ('prompt');
    var vibrant=document.getElementById ('vibrant');
    var anxious=document.getElementById ('anxious');
    var indifferent=document.getElementById ('indifferent');
    var depressed=document.getElementById ('depressed');
    var agitated=document.getElementById ('agitated');
    var other=document.getElementById ('other');

    document.getElementById("title").onclick = function (e) {
      e.target.style.visibility = 'hidden';
    };

  /*  //create toggleContent() function
    function toggleContent(){
      //get variable
      var title=document.getElementByClass ('title');

      //get current display setting
      var displaySetting = title.style.display;
    }

    //make title screen disappear when someone clicks anywhere on screen
    if (displaySetting == 'block') {
      //hide visible title
      title.style.display='none';
    } */



});
