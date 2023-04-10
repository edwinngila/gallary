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