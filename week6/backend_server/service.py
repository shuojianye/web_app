import json
from bson.json_util import dumps
import os
import sys


from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer


#imprt utils packages

sys.path.append(os.path.join(os.path.dirname(__file__),'utils'))
import mongodb_client
SERVER_HOST = 'localhost'
SERVER_PORT = 4040

def add(num1, num2):
    """Test method"""
    print("Add is called with %d and %d" % (num1, num2))
    return num1 + num2

def get_one_news():
    print("get one news caleed")
    news = mongodb_client.get_db()['week6_demos_news'].find_one()
    return json.loads(dumps(news))

RPC_SERVER = SimpleJSONRPCServer((SERVER_HOST, SERVER_PORT))
RPC_SERVER.register_function(add, 'add')
RPC_SERVER.register_function(get_one_news, 'get_one_news')


print("Starting RPC server on %s:%d" % (SERVER_HOST, SERVER_PORT))

RPC_SERVER.serve_forever()