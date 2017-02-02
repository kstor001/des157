console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

//capture imgs into variables
var tekken=document.getElementById('tekken');

tekken.addEventListener('mouseover', function() {
  //hover reduces scale
  tekken.width = '100';
  tekken.height='134';
  //change position on hover
  tekken.style.marginLeft = "30px";
  tekken.style.marginTop = "140px";
});

tekken.addEventListener('mouseout', function() {
  //hover returns to original scale
  tekken.width = '200';
  tekken.height='267';
  //return position to original state
  tekken.style.marginLeft = "90px";
  tekken.style.marginTop = "50px";
});



});
