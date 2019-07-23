from pymongo import MongoClient

class Mongo:
    client = MongoClient()
    client = MongoClient('mongodb://localhost:27017/')
    mydb = client['NoisyCricket']
