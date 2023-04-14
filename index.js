var on=true;
function popDown(){
    if(on===true){
     document.getElementById("tools2").classList.add("show");
     on=false;
    }
}
window.addEventListener("click",function(){
    if(on===false){
        document.getElementById("tools2").classList.remove("show");
        on=true;
    }
})
function active(){
   let link = document.getElementById("links2");
   link.style.backgroundColor="black";
   link.style.color="white";
   console.log(document.getElementsByClassName("link1").href);
}
//***************************************************************************
//navigation BAR
function secondNav(){
    if(window.scrollY>=508){
        document.querySelector("#navigation2").classList.remove("galleryNav");
        document.querySelector("#navigation2").classList.add("fixed-top");
    }
    else if(window.scrollY<=508){
        document.querySelector("#navigation2").classList.add("galleryNav");
        document.querySelector("#navigation2").classList.remove("fixed-top");
    }
}
window.addEventListener("scroll",secondNav)