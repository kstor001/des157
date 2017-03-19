console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


 //onclick change screen from title to emotions
    var title= document.getElementById('title').onclick = function (e) {
      e.target.style.visibility = 'hidden';
      document.getElementById('emotionsAll').style.display = 'block';
    }

    var emotionsAll=document.getElementById('emotionsAll').onclick = function () {
      var x = document.getElementById('vibrant');
      var y = document.getElementById('emotionsAll');
      var z = document.getElementById('vibe2');
      if(y.style.display === 'block') {
        y.style.display = 'none';
        z.style.display = 'block';
      }
    }

});
