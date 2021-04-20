from pprint import pprint
import boto3
import time

from datetime import datetime

def put_movie(id, name, dynamodb=None):
    

    
    if not dynamodb:
        
        dynamodb = boto3.resource(
            'dynamodb',
            endpoint_url="http://dynamodb.us-east-2.amazonaws.com",
            region_name='us-east-2',
            aws_access_key_id = 'XXXXXXXXXXXXXXXXXXXXXXXX',
            aws_secret_access_key = 'XXXXXXXXXXXXXXXXXXXXXXXXX'
        )

    table = dynamodb.Table('hl7')
    response = table.put_item(
       Item={
            "hl7_id"        : id,
            "nome"          : name,
            "creationDate"  : datetime.now().strftime("%d-%m-%Y"),
            "creationHour"  : datetime.now().strftime("%H:%M:%S")
        }
    )
    return response

if __name__ == '__main__':
    movie_resp = put_movie(str(time.time()*1000.0), 'Gamora', 0)
    print("Put movie succeeded:")
    pprint(movie_resp, sort_dicts=False)
