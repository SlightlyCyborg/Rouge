var fs = require("fs")

var atlas_shrugged = fs.readFileSync("./media/atlas_shrugged.txt", 'utf-8');

var exec = require('child_process').exec,
        child;

function getPosition(str, m, i) {
    return str.split(m, i).join(m).length;
}


var say = function(text, delta){
    
    var position = getPosition(text, ' ', delta);
    var words = text.slice(0, position);
    console.log(words);
    var child = exec('say -v vicki ' + words, function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        say(text.slice(position), delta )
    });



}

//console.log(atlas_shrugged);
say(atlas_shrugged.slice(15000), 20);



