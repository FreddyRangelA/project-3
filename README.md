# Project-3
Scope:
  - Visualizations
  - Data Collection
# Explanation  
In this project, we took the header of Reddit posts from a user ran API that collects Reddit historical data called PushShiftAPI. We collected the data from r/PoliticalDiscussion with any mention of the name Trump. From there, we categorized the data (we only did about 1500 as time allowed with limited resources) into 0= Neutral, 1= Positive, 2= Negative, and 3= Remove Data. From there we used a machine learning Multinomial Naive Bayes algorithm to try to get a good model that would predict whether the Reddit title post was Neutral, Positive, or Negative. We were only able to get a model with 44 percent accuracy...
# Pitfalls and Learning Opportunities 
I think the data itself was firstly the biggest issue. We were working on the title which were sometimes Neutral on purpose since the reddit tries for being neutral. Secondly, we needed to develop close rules for categorizing the data since three different individuals worked on it and they had differing knowledge on politics and etc. Thirdly, we plainly needed more data. 1500 titles is not enough to train and test the model. More work needed to be done for this but we were limited in time. Thirdly, we did not put the data set through a process of lemmatization to make sure that the words would be weight accordingly but even this would probably only increase accuracy by a few percentage points.
