var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",//SUA REGIAO
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",//ALTERE APENAS A REGIÃO NA URL(minha região é 'us-east-2' substitua pela sua)
    "accessKeyId": "XXXXXXXXXXXXXXXXXXXXXXXXX", //SUA KEY
    "secretAccessKey": "XXXXXXXXXXXXXXXXXXXXXXXXX"//SUA SECRET KEY
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
