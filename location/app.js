var exec = require('child_process').exec;
var fs = require('fs');

var poll_location = function(){
    //WGET location
    exec('wget -qO- http://ipecho.net/plain ; echo', function(error, stdout, stderr){
        //Open file as json, save stdout to current external ip, then set poll location to fire again in 30 seconds
        fs.readFile('./data/state.json','utf8', function(err, data){
            var state_obj = JSON.parse(data);
            state_obj['external_ip'] = stdout.trim();
            //console.log(JSON.stringify(state_obj)); 
            fs.writeFile('./data/state.json',  JSON.stringify(state_obj, null, 4), function(){
                console.log('done');
            });
        });
    });
}

function start_location_poll(delay){
    setInterval(poll_location, delay);
}

module.exports.start_location_poll = start_location_poll;

if(require.main == module){
    poll_location();
}
