console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

//capture imgs into variables
//Tekken 4
var tekken=document.getElementById('tekken');
var jin=document.getElementById ('jin');
var tek4=document.getElementById ('tek4');

//tekken disc hover functions
tekken.addEventListener('mouseover', function() {
  //hover reduces scale
  tekken.width = '180';
  tekken.height='180';
  //change position on hover
  //place disc on top of other images with z-index
  tekken.style.zIndex = "1";
  tekken.style.marginLeft = "10px";
  tekken.style.marginTop = "-25px";
  //show jin image on hover
  jin.style.display= "block";
  //show paragraph description on hover
  tek4.style.display= "block";

});

tekken.addEventListener('mouseout', function() {
  //hover returns to original scale
  tekken.width = '300';
  tekken.height='300';
  //return position to original state
  tekken.style.marginLeft = "90px";
  tekken.style.marginTop = "70px";
  //hide hover image once mouseout
  jin.style.display= "none";
  //hide paragraph tek4 when mouseout
  tek4.style.display= "none";
});

//jin img source: http://orig15.deviantart.net/ffc8/f/2009/253/e/5/jin_kazama_front_by_blood_huntress.png
//sora img source: http://vignette4.wikia.nocookie.net/kingdomhearts/images/a/ad/Data-Sora_KHREC.png/revision/latest?cb=20140609170637
//kratos img source:http://1.bp.blogspot.com/-KhkP_EOBhjY/UQtadUE4wvI/AAAAAAAAAqI/Jh3lM1ANk1s/s1600/kratos-2.png
//leon img source: http://vignette3.wikia.nocookie.net/residentevil/images/7/7f/Leon_holding_knife_RE4.png/revision/latest?cb=20140921225716
//tidus img source: http://s644.photobucket.com/user/Tidus12141990/media/Tidus.png.html
//dante img source: http://4.bp.blogspot.com/-h91Jno5UsrQ/TjVR9OE_J7I/AAAAAAAAA5c/6iniBwLwmF0/s1600/483_render_dante_dmc.png


//kingdom hearts section hover settings begin here
//capture imgs into variables
var kingdom=document.getElementById('kingdom');
var sora=document.getElementById ('sora');
var khpara=document.getElementById ('khpara');

//kingdom disc hover functions
  kingdom.addEventListener('mouseover', function() {
  //hover reduces scale
  kingdom.width = '130';
  kingdom.height='130';
  //change position on hover
  //place disc on top of other images with z-index
  kingdom.style.zIndex = "1";
  kingdom.style.marginLeft = "440px";
  kingdom.style.marginTop = "330px";
  //show sora image on hover
  sora.style.display= "block";
  //show paragraph description on hover
  khpara.style.display= "block";
  khpara.style.width= '230px';

});

kingdom.addEventListener('mouseout', function() {
  //hover returns to original scale
  kingdom.width = '211';
  kingdom.height='210';
  //return position to original state
  kingdom.style.marginLeft = "550px";
  kingdom.style.marginTop = "120px";
  //hide hover image once mouseout
  sora.style.display= "none";
  //hide paragraph khpara when mouseout
  khpara.style.display= "none";
});

//God of War section hover settings begin here
//capture imgs into variables
var war=document.getElementById('war');
var kratos=document.getElementById ('kratos');
var godpara=document.getElementById ('godpara');

//god of war disc hover functions
  war.addEventListener('mouseover', function() {
  //hover reduces scale
  war.width = '130';
  war.height='173';
  //change position on hover
  //place disc on top of other images with z-index
  war.style.zIndex = "1";
  war.style.marginLeft = "920px";
  war.style.marginTop = "330px";
  //show kratos image on hover
  kratos.style.display= "block";
  kratos.style.zIndex = "-1";
  //show paragraph description on hover
  godpara.style.display= "block";
  godpara.style.width= '150px';

});

  war.addEventListener('mouseout', function() {
  //hover returns to original scale
  war.width = '210';
  war.height='280';
  //return position to original state
  war.style.marginLeft = "950px";
  war.style.marginTop = "105px";
  //hide hover image once mouseout
  kratos.style.display= "none";
  //hide paragraph godpara when mouseout
  godpara.style.display= "none";
});


//capture imgs into variables
//Resident Evil 4
var evil=document.getElementById('evil');
var leon=document.getElementById ('leon');
var re4para=document.getElementById ('re4para');

//evil disc hover functions
  evil.addEventListener('mouseover', function() {
  //hover reduces scale
  evil.width = '130';
  evil.height='173';
  //change position on hover
  //place disc on top of other images with z-index
  evil.style.zIndex = "1";
  evil.style.marginLeft = "40px";
  evil.style.marginTop = "640px";
  //show leon image on hover
  leon.style.display= "block";
  //show paragraph description on hover
  re4para.style.display= "block";

});

  evil.addEventListener('mouseout', function() {
  //hover returns to original scale
  evil.width = '210';
  evil.height='280';
  //return position to original state
  evil.style.marginLeft = "130px";
  evil.style.marginTop = "505px";
  //hide hover image once mouseout
  leon.style.display= "none";
  //hide paragraph tek4 when mouseout
  re4para.style.display= "none";
});


//capture imgs into variables
//Final Fantasy X
var fantasy=document.getElementById('fantasy');
var tidus=document.getElementById ('tidus');
var fantasypara=document.getElementById ('fantasypara');

//fantasy disc hover functions
  fantasy.addEventListener('mouseover', function() {
  //hover reduces scale
  fantasy.width = '130';
  fantasy.height='130';
  //change position on hover
  //place disc on top of other images with z-index
  fantasy.style.zIndex = "1";
  fantasy.style.marginLeft = "510px";
  fantasy.style.marginTop = "700px";
  //show tidus image on hover
  tidus.style.display= "block";
  //show paragraph description on hover
  fantasypara.style.display= "block";

});

  fantasy.addEventListener('mouseout', function() {
  //hover returns to original scale
  fantasy.width = '210';
  fantasy.height='210';
  //return position to original state
  fantasy.style.marginLeft = "550px";
  fantasy.style.marginTop = "530px";
  //hide hover image once mouseout
  tidus.style.display= "none";
  //hide paragraph tek4 when mouseout
  fantasypara.style.display= "none";
});

//capture imgs into variables
//Devil May Cry 3
var devil=document.getElementById('devil');
var dante=document.getElementById ('dante');
var dmcpara=document.getElementById ('dmcpara');

//devil disc hover functions
  devil.addEventListener('mouseover', function() {
  //hover reduces scale
  devil.width = '130';
  devil.height='132';
  //change position on hover
  //place disc on top of other images with z-index
  devil.style.zIndex = "1";
  devil.style.marginLeft = "930px";
  devil.style.marginTop = "700px";
  //show dante image on hover
  dante.style.display= "block";
  //show paragraph description on hover
  dmcpara.style.display= "block";

});

  devil.addEventListener('mouseout', function() {
  //hover returns to original scale
  devil.width = '207';
  devil.height='210';
  //return position to original state
  devil.style.marginLeft = "950px";
  devil.style.marginTop = "530px";
  //hide hover image once mouseout
  dante.style.display= "none";
  //hide paragraph tek4 when mouseout
  dmcpara.style.display= "none";
});









});
