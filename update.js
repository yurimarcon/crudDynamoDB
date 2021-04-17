var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "AKIARLUNCMQLPBP6D4OR", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let update = function(){

    var params = {
        TableName: "hl7",
        Key:{
            "hl7_id":"3"
        },
        UpdateExpression: "set nome = :nome",
        ExpressionAttributeValues:{
            ":nome" :"João" 
        },
        ReturnValues:"UPDATED_NEW"
    };
    docClient.update(params, function(err,data){

        if(err){
            console.log(err)
        }else{
            console.log({
                "StausCode": "200",
                data
            })
        }

    })

}

update();