var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",//SUA REGIAO
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",//ALTERE APENAS A REGIÃO NA URL(minha região é 'us-east-2' substitua pela sua)
    "accessKeyId": "AKIARLUNCMQLPBP6D4OR-X", //SUA KEY
    "secretAccessKey": "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-X"//SUA SECRET KEY
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "hl7",
        Key: {
            "hl7_id": "oi"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}


fetchOneByKey();