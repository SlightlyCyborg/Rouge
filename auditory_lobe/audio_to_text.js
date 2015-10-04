var request = require('request');
var fs = require('fs');

module.exports.speech_to_text = function(file, cb){
    var headers = {
        "Authorization":"Bearer 969337a2012d495ebe47392cbd771969",
        "ocp-apim-subscription-key": "e90add06-22ba-4548-9bff-9332072d7977"
    };

    var data = {
        v:"20150926",
        timezone : "America/New_York",
        lang : "en"
    };


    var formData = {
        request:JSON.stringify(data),
        voiceData: fs.createReadStream(file)
    }

    request.post({url:'https://api.api.ai/v1/query', formData: formData, headers:headers}, function optionalCallback(err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('Upload successful!  Server responded with:', body);
        body = JSON.parse(body);
        cb(body.result.resolvedQuery);
    });
}
