console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


 //onclick change screen from title to emotions
    var title= document.getElementById('title').onclick = function (e) {
      console.log('clicked title');
      e.target.style.visibility = 'hidden';
      document.getElementById('emotionsAll').style.display = 'block';
    }

    var vibrant= document.getElementById('vibrant').onclick = function () {
      var x = document.getElementById ('vibrant');
      var y = document.getElementById('emotionsAll');
      var z =document.getElementById('vibe2');
      var slider=document.getElementById('slider');

      if (y.style.display === 'block') {
        y.style.display = 'none';
        z.style.display = 'block';
        slider.style.display = 'block';
      }
    }

      function updateSlider(slideAmount) {
        //get element
        var display = document.getElementById ("chosen");
        //show the amount
        display.innerHTML=slideAmount;

      //get the element
      var pic = document.getElementById("pic");
      //set the dimensions
      pic.style.width=slideAmount+"%";
      pic.style.height=slideAmount+"%";
      }

});
