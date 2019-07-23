from flask import Flask, request, jsonify;
from flask_restful import Api, Resource, reqparse;
from pymongo import MongoClient


client = MongoClient()

client = MongoClient('mongodb://localhost:27017/')

mydb = client['NoisyCricket']
app = Flask(__name__)
api = Api(app);

@app.route('/star', methods=['GET'])
def get_all_stars():
  star = mydb.organizations
  output = []
  for s in star.find():
    output.append({'Id' : s['domainURI']})
  return jsonify({'result' : output})


app.run(debug=True)
