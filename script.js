const buttons = document.querySelectorAll(".keys");

function buttonClick() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            audio(this.classList[2]);
        })
    }
}

function drumKit() {
    document.addEventListener("keypress", function (e) {
        buttonKeypress(e.code);
    })
    buttonClick();
}
function buttonKeypress(event) {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].classList[1] == event) {
            audio(buttons[i].classList[2]);
            buttons[i].classList.add("active");
            setTimeout(function(){
                for(var i = 0;i < buttons.length;i++){
                    if(buttons[i].classList[3] == "active"){
                        buttons[i].classList.remove("active");
                    }
                }
            },300)
        }
    }
}

function audio(id) {
    var audio = new Audio("./assets/sounds/sounds_" + id + ".wav");
    audio.play();
}

drumKit();