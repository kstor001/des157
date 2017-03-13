console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


 //onclick change screen from title to emotions
    var title= document.getElementById('title').onclick = function (e) {
      e.target.style.visibility = 'hidden';
      document.getElementById('emotionsAll').style.display = 'block';
    };

    
});
