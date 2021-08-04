function collapsechange(x) {
    x.classList.toggle("change");
    var demo = document.getElementById("xyz").classList;
    var ischange = demo.contains("change")
    if (ischange) {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("TheNav").style.overflowY = "hidden";
    } else {
        modalshow()
    }
}

function button() {
    document.getElementById("xyz").classList.toggle("change");
    modalshow()
    document.getElementById("myModal").modal('show');
}

function modalbutton() {
    $('#myModal').modal('hide');
    document.getElementById("TheNav").style.overflowY = "auto";
}

function modalshow(){
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("TheNav").style.overflowY = "auto";
}