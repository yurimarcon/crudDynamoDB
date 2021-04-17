const AWS = require('aws-sdk')
AWS.config.update({
    region: 'us-east-2'
});
const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'hl7';
const hl7Path = '/hl7';

export.handler = async function(event){
    console.log('Request event: ', event);
    let response:
    switch(true){
        case event.httpMethod === 'GET' && event.path === hl7Path:
            response = buildResponse(200);
            break;
        case event.httpMethod === 'GET' && event.path === hl7Path:
            response = await saveproduct(JSON.parse(event.body));
            break;
    }
}

function buildResponse(statusCode, body){
    return{
        stausCode: statusCode,
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}
function saveproduct(requestBody){
    const params = {
        TableName: dynamodbTableName,
        Item: requestBody
    }
    return await dynamodb.put(params).promisse().then(()=>{
        const body = {
            Oparetion: 'SAVE',
            Message: 'SUCCESS',
            Item: requestBody
        }
        return buildResponse(200,body);
    },(error)=>{
        console.error('Error to save object. ' error)
    })
}