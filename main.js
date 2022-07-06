var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    recognition.start();

}

recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if(content == "selfie"){
        speak();
    }
}

function speak(){

    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your gorgeous selfie now"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

   
    setTimeout(function(){

        img_id = "selfie1";
        takesnapshot();
        speak_data = "Taking your selfie in next 10 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    },5000);

    setTimeout(function(){

        img_id = "selfie2";
        takesnapshot();
        speak_data = "Taking your selfie in next 15 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    },10000);

    setTimeout(function(){

        img_id = "selfie3";
        takesnapshot();
        
        
    },15000);
    
   
}

Webcam.set({
    width:360,
    height:300,
    image_format : 'png',
    png_quality:90

})

camera = document.getElementById("camera");

function takesnapshot(){

    console.log(img_id);

    Webcam.snap(function (data_uri){
        if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id = "selfie1" src ="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML = '<img id = "selfie2" src ="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML = '<img id = "selfie3" src ="'+data_uri+'"/>';
        }
    
    
    
    
       
    })
    
}

