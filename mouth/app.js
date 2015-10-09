var fs = require('fs');
var exec = require('child_process').exec,
        child;

var speak = function(text){
    var state = JSON.parse(fs.readFileSync('./data/state.json'));
    var approved_ips = JSON.parse(fs.readFileSync('./data/approved_ips.json'));
    if(approved_ips['mouth'].indexOf(state['external_ip']) > -1) {
        var child = exec('say -v vicki ' + text, function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
    }
    else{
        console.log(text);
    }
}


module.exports.speak = speak
