
var color=["Navy","Grey","Aqua","Green","Purple","Lime"]
var i=0;
document.querySelector(".btn-click").addEventListener("click",function(){
    i= i<color.length ? ++i :0;
    document.querySelector(".bottom").style.background=color[i];
    document.querySelector(".btn-click").style.background=color[i];
    document.querySelector(".title-sub").textContent=color[i]
});



