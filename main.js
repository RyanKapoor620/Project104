Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function capture_img(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version=",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/A2DrDk6k7/",modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded");
}