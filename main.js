Prediction1="";
Prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera")
Webcam.attach(camera);

function takesnapshot (){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'> "

    });

}
console.log("ml5version" , ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/c6ux-7muY/model.json", model_loaded);
function model_loaded(){
    console.log("model_loaded");

}

function speak (){
    var synth=window.speechSynthesis;
speak_data1="The first prediction is "+Prediction1;
speak_data2="The second pridiction is"+Prediction2;

var Utter =new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(Utter);

}
 
speak()