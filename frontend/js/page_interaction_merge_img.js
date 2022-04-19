var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
var imageObj3 = new Image();
imageObj1.src = "/js/boredApes.jpeg"
imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0.5, 0.5, 19, 19);
   imageObj2.src = "/js/tzLogo.jpeg";
   imageObj2.onload = function() {
      ctx.drawImage(imageObj2, 20.5, 0.5, 19, 19);
      //var img = c.toDataURL("image/jpeg");
      //document.write('<img src="' + img + '" width="1000" height="1000"/>');
   }
   imageObj3.src = "/js/tezzard0.jpeg";
   imageObj3.onload = function() {
      ctx.drawImage(imageObj3, 980.5, 980.5, 19, 19);
   }
   
};