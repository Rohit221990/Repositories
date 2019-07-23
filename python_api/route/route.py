from flask import Flask, request, jsonify;
from flask_restful import Api, Resource, reqparse;
from mongo import Mongo

app = Flask(__name__)

def get_all_stars():
    client = MongoClient()
    client = MongoClient('mongodb://localhost:27017/')
    mydb = client['NoisyCricket']
    # star = mongo.mydb;
    star = mydb.organizations
    output = []
    for s in star.find():
        output.append({'Id' : s['domainURI']})
    return jsonify({'result' : output})
