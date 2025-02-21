const button = document.getElementById("testbutton");

function usage(event) {
    event.preventDefault();
    location.replace("../ttspage/index.html");
  } 

button.addEventListener("click",usage)

function hover(event){
    event.preventDefault();
    button.style.backgroundColor = "green";
}

const gitbutton = document.getElementById("github")

function git(event){
    event.preventDefault();
    window.open(
        "https://github.com/Rakshith12-pixel", "_blank");
}


gitbutton.addEventListener("click",git);
