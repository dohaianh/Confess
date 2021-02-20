var yesbtn = document.getElementById("yesBut");
yesbtn.onclick = function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("span");
    ripples.id = "ripples"
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);
    setTimeout(()=>{
        ripples.remove()
    },500);
    document.getElementById("modalbox").style.display = "block"
};

document.getElementById("X").onclick = function(){
    document.getElementById("modalbox").style.display = "none"
}

var nobtn = document.getElementById("noBut");
function Move(){
    var posX = Math.random()* 1000-700;
    var posY = Math.random()* 300-100;
    if(window.innerWidth < 600){
        posX = Math.random()*100-Math.random()*300;
        posY = Math.random()*70 - Math.random()*200;
    }
    nobtn.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`
}

nobtn.addEventListener("mousemove" , function(){
    Move();
})
console.log(window.innerWidth)
var a = document.getElementsByClassName("a");
var b = document.getElementsByClassName("b");
console.log(a, b)
if (window.innerWidth < 600){
    document.getElementById("modal").style.width = "95%";
    document.getElementById("modal").style.left = "10px";
    document.getElementById("yesBut").style.marginRight = "10px";
    document.getElementById("yesBut").style.paddingLeft = "50px";
    document.getElementById("yesBut").style.paddingRight = "50px";
    for (var i=0; i < 2; i++){
        a[i].style.fontSize = "20px";
        b[i].style.fontSize = "10px";
    }
}
