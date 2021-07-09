  
from flask import Flask, render_template, redirect, jsonify
from numpy.testing._private.utils import jiffies

#import priceLive
import pandas as pd
from flask import g

from pickle import load, loads
from pickle import dump

import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

from sklearn.feature_extraction.text import CountVectorizer
from nltk.tokenize import RegexpTokenizer

from sklearn.naive_bayes import MultinomialNB

clf=load(open("model.pkl",'rb'))
cv=load(open('vectorizer.pkl', 'rb'))


sentiment_df=pd.read_csv("static/Data/Data_project-3 - Sheet1.csv", dtype={"title":"string"})


sentiment_df=sentiment_df[sentiment_df["Sentiment"]!= 3]

app = Flask(__name__)


@app.route("/")
def home():

    return render_template("index.html")
    
@app.route("/predict/<inputstr>")
def predict(inputstr):
    print(inputstr)
    datalist=sentiment_df["title"].to_list()
    
    datalist.append(inputstr)
    print(datalist[-1])
    text_counts1= cv.transform(datalist)
    predicted= clf.predict(text_counts1[-1])
    print(predicted)
    return str(predicted[0])
    

    

if __name__ == "__main__":
    app.run(debug=True)
