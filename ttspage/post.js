    document.getElementById("convert").addEventListener("click", function() {
        let text = document.getElementById("input").value;
        if (text.trim() === "") {
            alert("Please enter some text!");
            return;
        }

        // Send text to the backend
        fetch("http://127.0.0.1:5000/tts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: text })
        })
        .then(response => response.blob())  // Get audio as a blob
        .then(blob => {
            let url = URL.createObjectURL(blob);
            let audio = new Audio(url);
            audio.play();
        })
        .catch(error => console.error("Error:", error));
    });
