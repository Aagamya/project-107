//https://teachablemachine.withgoogle.com/models/NOxYcuVSy/
function start_classification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/NOxYcuVSy/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("modelLoaded")
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
console.log(error)

}
else{
console.log(results)
}

}