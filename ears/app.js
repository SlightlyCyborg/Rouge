var express = require('express');
var app = express();
var path = require('path');
//var bodyparser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: '../media/' })
var translator = require('../auditory_lobe/audio_to_text.js');
var temporal_lobe = require('../temporal_lobe/app.js');


var sys = require('sys')
var exec = require('child_process').execSync;

//app.use(bodyparser.urlencoded({extended:false}));
// respond with "hello world" when a GET request is made to the homepage
 app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, 'app.html'));
});

app.get('/recorder.js', function(req, res){

   res.sendFile(path.join(__dirname, 'recorderjs/recorder.js'));
});
app.get('/recorderWorker.js', function(req, res){

   res.sendFile(path.join(__dirname, 'recorderjs/recorderWorker.js'));
});
app.post('/audio', upload.single('wav'), function(req, res){
    //console.log(req.headers);
    console.log(req.file.path);
    exec('sox ' + req.file.path + ' -r 16k ' + req.file.path + '.wav');
    translator.speech_to_text(req.file.path + ".wav", function(words){
        temporal_lobe.understand(words);
        res.send(words);
    });
});

console.log("listening from ears");
app.listen(4001);

