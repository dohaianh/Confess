var yesbtn = document.getElementById("yesBut");
yesbtn.onclick = function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    console.log(x, y)
    let ripples = document.createElement("span");
    ripples.id = "ripples"
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);
    setTimeout(()=>{
        ripples.remove()
    },500);
    // document.getElementById("modalbox").style.display = "block"
};

document.getElementById("X").onclick = function(){
    document.getElementById("modalbox").style.display = "none"
}

var nobtn = document.getElementById("noBut");
function Move(){
    var posX = Math.random()* 1000-700;
    var posY = Math.random()* 300-100;
    nobtn.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`
}

nobtn.addEventListener("mousemove" , function(){
    Move();
})

