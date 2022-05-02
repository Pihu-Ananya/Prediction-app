Prediction1 = "";
Prediction2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera")
Webcam.attach(camera);

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri + "'> "

    });

}
console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/c6ux-7muY/model.json", model_loaded);

function model_loaded() {
    console.log("model_loaded");

}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is " + Prediction1;
    speak_data2 = "The second pridiction is" + Prediction2;

    var Utter = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(Utter);

}

function check() {
    img = document.getElementById("captured_img");
    classifier.classify(img, got_result);
}

function got_result(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        Prediction1 = results[0].label;
        Prediction2 = results[1].label;
        document.getElementById("result_1").innerHTML = Prediction1;
        document.getElementById("result_2").innerHTML = Prediction2;

        speak()
        if (Prediction1 == "happy") {
            document.getElementById("emoji_1").innerHTML = "&#128522";

        } else if (Prediction1 == "Sad") {
            document.getElementById("emoji_1").innerHTML = "&#128532;";
        }
        else if (Prediction1 == "Angry") {
            document.getElementById("emoji_1").innerHTML = "&#128545;";
        }
        if (Prediction2 == "happy") {
            document.getElementById("emoji_2").innerHTML = "&#128522";

        } else if (Prediction2 == "Sad") {
            document.getElementById("emoji_2").innerHTML = "&#128532;";
        }
        else if (Prediction2== "Angry") {
            document.getElementById("emoji_2").innerHTML = "&#128545;";
        }
    }

}