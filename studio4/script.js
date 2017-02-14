console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var time = getDate();
    console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());



    var elements = document.getElementsByTagName('li');
    var tipTimer, tipId;

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', function(event) {
            tipId = document.getElementById(this.id + "Tip");
            tipTimer = setTimeout(showMsg, 500);
        });

        elements[i].addEventListener('mouseout', function() {
            clearTimeout(tipTimer);
            tipId.style.opacity = 0;
        });
    }

    function showMsg() {
        tipId.style.opacity = 1;
    }




});
