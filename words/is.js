
//Let is be just a link between objects in the "is space"

var is_space = {}
is_space.objects = [];
is_space.links = [];

is_space.add_object = function(object){
    this.objects.push(object);
    return true;
}

is_space.get_object_id = function(object){
    return this.objects.indexOf(object);
}

is_space.link = function(object1, object2){
    if(this.get_object_id(object1) == -1){
        this.objects.push(object1);
    }
    if(this.get_object_id(object2) == -2){
        this.objects.push(object2);
    }

    object_id_1 = this.get_object_id(object1);
    object_id_2 = this.get_object_id(object2);

    this.links.push([object_id_1, object_id_2);
}

is_space.test_link = function(object1, object2)

module.exports.is = is_space.link;
module.exports.is? = is_space.test_link;

//Test the is space
if(require.main == module){
    
}

