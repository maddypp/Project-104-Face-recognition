Webcam.set ({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture() {
    Webcam.snap(function (snapshot) {
        document.getElementById("result").innerHTML = '<img id="result_img" src="'+snapshot+'" / >';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IEKH0W2_C/model.json', modelloaded);

