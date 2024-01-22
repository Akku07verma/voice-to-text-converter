
/*var btn = document.getElementById("btn");

btn.addEventListener("click", (ea) => {
    btn.classList.add("fade");

    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.addEventListener("result", (e) => {
        const transcript = e.results[0][0].transcript;
        document.getElementById("text").value = transcript;
        btn.classList.remove("fade");
    });

    recognition.start();
});*/


var btn = document.getElementById("btn");

btn.addEventListener("click", (ea) => {
    btn.classList.add("fade");

    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.addEventListener("result", (e) => {
        const transcript = e.results[0][0].transcript;
        document.getElementById("text").value = transcript;
        btn.classList.remove("fade");
    });

    recognition.addEventListener("end", () => {
        // Handle the end of recognition, you can add additional logic here if needed
    });

    recognition.addEventListener("error", (err) => {
        console.error("Speech recognition error:", err.error);
        btn.classList.remove("fade");
    });

    recognition.start();
});