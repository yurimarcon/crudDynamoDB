var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "AKIARLUNCMQLPBP6D4OR", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function(){

    var input = {
        "hl7_id":"1",
        "nome":"Yuri",
        "creationDate": new Date().toString()
    }

    var params = {
        TableName: "hl7",
        Item: input
    };
    docClient.put(params, function(err,data){

        if(err){
            console.log(err)
        }else{
            console.log("StausCode: 200 ")
            console.log(input)
        }

    })

}

save();