module.exports.understand = function(words){
    if(words.indexOf("favorite book") > -1 ){
        require('../activities/atlas_shrugged.js');
    }
    if(words.indexOf('to do list') > -1){
        var todo = require('../activities/todos.js');
        if(words.indexOf('remove') > -1){
            todo.remove_todo();
        }
        else{
            todo.get_todos();
        }
    }
}
