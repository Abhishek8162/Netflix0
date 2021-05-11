imgs=[
    "src/Death-Note.jpg",

    "https://www.soda.com/wp-content/uploads/2020/04/harry-potter-streaming-guide.jpg"
,"src/dbz.jpg",

"src/infinity.jpg"
,"src/opm.jpg"
 
];

var index = 0;
setInterval (function(){
  if (index === imgs.length) {
    index = 0;
  }
  document.getElementById("image1").src = imgs[index];


  if(index>=imgs.length-1)
  {
  document.getElementById("image2").src = imgs[index+1-imgs.length];
  }
else
{
  document.getElementById("image2").src = imgs[index+1];
}


if(index>=imgs.length-2)
{
document.getElementById("image3").src = imgs[index+2-imgs.length];
}
else
{
document.getElementById("image3").src = imgs[index+2];
}




  index++;
} , 2000);

function clickimg(clicked_id){
   
   
if(document.getElementById(clicked_id).getAttribute("src")=="src/Death-Note.jpg")
{
    
window.location.href = "downloads/dn.html" ; 
}
   
else if(document.getElementById(clicked_id).getAttribute("src")=="https://www.soda.com/wp-content/uploads/2020/04/harry-potter-streaming-guide.jpg")
{
    
window.location.href = "downloads/hp.html" ; 
}
else if(document.getElementById(clicked_id).getAttribute("src")=="src/infinity.jpg")
{
    
window.location.href = "downloads/inf.html" ; 
}
  
else if(document.getElementById(clicked_id).getAttribute("src")=="src/dbz.jpg")
{
    
window.location.href = "downloads/dbz.html" ; 
}

  
else if(document.getElementById(clicked_id).getAttribute("src")=="src/opm.jpg")
{
    
window.location.href = "downloads/opm.html" ; 
}



else{
window.location.href = "home.html" ; 

}

}


 