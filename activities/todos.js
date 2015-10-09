var request = require('request');
var mouth = require('../mouth/app.js');

var get_todos = function(){
    console.log('getting todo list');
    request('http://localhost:2020/api/todos', function (error, response, body) {
        if (!error && (response.statusCode == 200 || response.statusCode == 304)) {
                body = JSON.parse(body);
                if(body.length > 0){
                    var todo = body[0]['text'];
                    mouth.speak(todo) // Show the HTML for the Google homepage.
                }
                else{
                    mouth.speak('you have no more todos');
                }
        }
        else{
            console.log('error getting todo list');
            console.log(error);
        }
    });
}

var remove_todo = function(){
    request('http://localhost:2020/api/todos', function (error, response, body) {
        if (!error && (response.statusCode == 200 || response.statusCode == 304)) {
                body = JSON.parse(body);
                if(body.length > 0){
                    var todo_id = body[0]['_id'];
                    request.del('http://localhost:2020/api/todos/' + todo_id , function (error, response, body) {
                        if(!error){
                            mouth.speak('I checked off the to do item');
                        }
                        else{
                            mouth.speak('I encountered while tryingt to use the to do api');
                        }
                    });

                }
                else{
                    mouth.speak('you have no more todos');
                }
        }
        else{
            console.log('error getting todo list');
            console.log(error);
        }
    });

}

module.exports.get_todos = get_todos;
module.exports.remove_todo = remove_todo;

if(require.main === module) {
    //get_todos();
    remove_todo();
}
