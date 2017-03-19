console.log("reading");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    //on click change screen from title to emotions
    var title = document.getElementById("title");
    var emotionsAll = document.getElementById("emotionsAll");
    var vibrant = document.getElementById("vibrant");
    var depressed = document.getElementById("depressed");
    var anxious = document.getElementById("anxious");
    var indifferent = document.getElementById("indifferent");
    var other = document.getElementById("other");
    var agitated = document.getElementById("agitated");
    var yellow = document.getElementById("yellow");
    var blue = document.getElementById("blue");
    var red = document.getElementById("red");
    var orange = document.getElementById("orange");
    var green = document.getElementById("green");
    var purple = document.getElementById("purple");
    var vibe2 = document.getElementById("vibe2");
    var dep2 = document.getElementById("dep2");
    var anx2 = document.getElementById("anx2");
    var ind2 = document.getElementById("ind2");
    var agi2 = document.getElementById("agi2");
    var oth2 = document.getElementById("oth2");
    var slider = document.getElementById("slider");
    var range = document.getElementById("range");
    var option = document.getElementById("option");
    var chosen = document.getElementById("chosen");
    var tickmarks = document.getElementById("tickmarks");

    title.addEventListener("click", function() {
        title.style.display = "none";
        emotionsAll.style.display = "block";
    });

    vibrant.addEventListener("click", function() {
        vibrant.style.display = "none";
        emotionsAll.style.display = "none";
        yellow.style.display = "block";
        vibe2.style.display = "block";
        slider.style.display = "block";
    });

    depressed.addEventListener("click", function() {
        depressed.style.display = "none";
        emotionsAll.style.display = "none";
        red.style.display = "block";
        dep2.style.display = "block";
        slider.style.display = "block";
    });

    anxious.addEventListener("click", function() {
        anxious.style.display = "none";
        emotionsAll.style.display = "none";
        blue.style.display = "block";
        anx2.style.display = "block";
        slider.style.display = "block";
    });

    indifferent.addEventListener("click", function() {
        indifferent.style.display = "none";
        emotionsAll.style.display = "none";
        orange.style.display = "block";
        ind2.style.display = "block";
        slider.style.display = "block";
    });

    agitated.addEventListener("click", function() {
        agitated.style.display = "none";
        emotionsAll.style.display = "none";
        green.style.display = "block";
        agi2.style.display = "block";
        slider.style.display = "block";
    });

    other.addEventListener("click", function() {
        other.style.display = "none";
        emotionsAll.style.display = "none";
        purple.style.display = "block";
        oth2.style.display = "block";
        slider.style.display = "block";
    });

    /*range.addEventListener("click", function() {
      if (range == 5) {
        labels.style.height = "50px";
        labels.style.width = auto;
      }
    }); */



      tickmarks.addEventListener("click", function() {
          if (option == 10) {
              chosen.style.width = auto;
              chosen.style.height = auto;
          } else if (option == 9) {
              chosen.style.height = "90%";
              chosen.style.width = auto;
          } else if (option == 8) {
              chosen.style.width = auto;
              chosen.style.height = "80%";
          } else if (option == 7) {
              chosen.style.height = "70%" ;
              chosen.style.width = auto;
          } else if (option == 6) {
              chosen.style.height = "60%" ;
              chosen.style.width = auto;
          } else if (option == 5) {
              chosen.style.height = "50%" ;
              chosen.style.width = auto;
          } else if (option == 4) {
              chosen.style.height = "40%" ;
              chosen.style.width = auto;
          } else if (option == 3) {
              chosen.style.height = "30%" ;
              chosen.style.width = auto;
          } else if (option == 2) {
              chosen.style.height = "20%" ;
              chosen.style.width = auto;
          } else {
            chosen.style.height = "10%" ;

          }
      });

      /*      function updateSlider(slideAmount) {
              //get element
              var display = document.getElementById ("chosen");
              //show the amount
              display.innerHTML=slideAmount;


            //get the element
            var pic = document.getElementById("pic");
            //set the dimensions
            pic.style.width=slideAmount+"%";
            pic.style.height=slideAmount+"%";
          }*/

});
