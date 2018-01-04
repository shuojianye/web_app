import json
from flask import Flask
app = Flask(__name__)
from flask import jsonify
from flask import request
import executor_utils as eu

@app.route('/')
def hello():
    return 'hel wod'

@app.route('/final',methods=['POST'])
def final():
    data = request.get_json()
    if 'code' not in data or 'lang' not in data:
        return 'you shoulda provde cde and lang'

    code = data['code']
    lang = data['lang']
    print("APT got called: %s in %s"%(code,lang))
    result = eu.final(code,lang)
    return jsonify(result)
    #return jsonify({'build':'build haa', 'run':'tun fromn'})    
if __name__ == '__main__':
    eu.load_image()
    app.run(debug = True)