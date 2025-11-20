from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

data = pd.read_csv("backend\my_dataframe.csv")
current_index = 0

@app.route("/get_data")
def get_data():
    global current_index
    
    if current_index < len(data):
        row = data.iloc[current_index].to_dict()
        print(row)
        current_index += 1
    else:
        row = {"message": "No more data"}

    return jsonify(row)

if __name__ == "__main__":
    app.run(debug=True)
