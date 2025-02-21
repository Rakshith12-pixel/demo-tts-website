let button = document.getElementById("back");

function goback(event){
    event.preventDefault();
    location.replace("/Users/rakshithrao/codes/html/html_retry/index.html");
  } 

button.addEventListener("click",goback);

let tokenize_button = document.getElementById("convert");
function tokenizeText() {
    let text = document.getElementById("input").value;
    let speakername = document.getElementById("speaker").value
    if (!text.trim()) {
        alert("Enter some text!");
        return;
    }
    if(!speakername){
        alert("Pls choose a speaker from the list");
        return;
    }

    fetch("http://127.0.0.1:8000/tokenize", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text ,speaker:speakername})
    })
    .then(response => response.blob())
    .then(blob => {
        let url = URL.createObjectURL(blob);

        // Create an <audio> element if it doesn't exist
        let audioElement = document.getElementById("audioPlayer");
        if (!audioElement) {
            audioElement = document.createElement("audio");
            audioElement.id = "audioPlayer";
            audioElement.controls = true;
            document.body.appendChild(audioElement);  // Append to the webpage
        }

        // Set the audio source and load the file
        audioElement.src = url;
        audioElement.load();
        audioElement.play();
    })
    .catch(error => console.error("Error:", error));

}

tokenize_button.addEventListener("click",tokenizeText)
