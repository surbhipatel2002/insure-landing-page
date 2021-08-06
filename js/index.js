function collapsechange(x) {
    x.classList.toggle("change");
    var demo = document.getElementById("xyz").classList;
    var ischange = demo.contains("change")
    if (ischange) {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("TheNav").style.overflowY = "hidden";
    } else {
        modalshow();
    }
}

function button() {
    document.getElementById("xyz").classList.toggle("change");
    modalshow();
}

function modalshow(){
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("TheNav").style.overflowY = "auto";
    document.getElementById("modal").style.display ="block";
}

function modalopenNav(z){
    var modalContain = document.getElementById("modal");
    modalContain.classList.toggle("show");
    
    var nav = modalContain.classList;
    var open = nav.contains("show")
    if(open){
        modalContain.style.display ="block";
    }else{
        modalContain.style.display ="none";
    }   
}