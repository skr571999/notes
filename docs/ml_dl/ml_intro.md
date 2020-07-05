# Machine Learning

- It is the art and science of giving computer the ability to learn to make decision from data not explicitly programmed or Set of technique used to extract knowledge from available data and use that knowledge to make decisions.
- Example:
  - Web Search Engine
  - Youtube Recommendation
  - Virtual Personal Assistants - Siri, Alexa, Google Assistant
  - Filtering the Spam mails
  - Self driving Cars

## Algorithims

- **Supervised**
  - Regression
    - Linear Regression(single, multiple)
  - Classification
    - Logistic Regression
    - KNN
    - Support Vector Classification
    - Decision Tree Classification
    - Random Forest Classification
    - Naïve Bayes
- **Unsupervised**
  - Clustering
    - K - means Clustering
    - Hierarchical Clustering

## Supervised

This is a process of learning from the Labeled dataset

### Types

- **Regression**
  - is the prediction of a numeric value and often takes input as a continuous value.
- **Classification**
  - is the process of dividing the dataset into different categories or groups by adding label.

## Linear Regression

Linear regression is a statistical approach for modelling relationship between a dependent variable with a given set of independent variables.

- **Y = MX + C**
- here
  - y is dependent variable
  - x is independent variable
  - m is the slope
  - c is the intercept

**Five basic steps for implementing linear regression using SCIKIT lab:**

1. Import the packages and classes you need.
2. Provide data to work with and eventually do appropriate transformations.
3. Create a regression model and fit it with existing data.
4. Check the results of model fitting to know whether the model is satisfactory.
5. Apply the model for predictions.

```py
import numpy as np
from sklearn.linear import LinearRegression
from matplotlib import pyplot as plt

x = np.array([5, 15, 25, 35, 45, 55]).reshape((-1, 1))
y = np.array([5, 20, 14, 32, 22, 38])
plt.scatter(x, y, label="Data 1", color="k", s=25, marker="o")

model = LinearRegression().fit(x, y)

y_pred = model.predict(x)
y_pred = model.intercept + model.coef * x
plt.plot(y_pred, x, color="green")

x_new = np.arange(5).reshape((-1, 1))
y_new = model.predict(x_new)
#plt.scatter(x_new, y_new, label="Google", color="k", s=25, marker="o")
#plt.plot(y_new, x_new, color="blue")
print(y_new)

plt.xlabel("X")
plt.ylabel("Y")
plt.title("Linear Regression")
plt.legend()
plt.show()
```

- Multi value Linear Regression

## Logistic Regression

It is a method for predicting binary classes. It computes the probability of an event occurrence.

- Sigmoid Function
- **Types of Logistic Regression**:

  - Binary Logistic Regression: The target variable has only two possible outcomes such as Spam or Not Spam, Cancer or No Cancer.
  - Multinomial Logistic Regression: The target variable has three or more nominal categories such as predicting the type of Wine.
  - Example - spam mail detection, Cancer detection

- Difference between linear and Logistic Regression
- **Implementing linear regression using sklearn-**

```py
import pandas as pd
from matplotlib import pyplot as plt

df = pd.read_csv("insurance_data.csv")
plt.scatter(df.age, df.bought_insurance, color="k", marker="o")
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(
    df[["age"]], df.bought_insurance, test_size=0.1
)
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(X_train, Y_train)

Y_test_new = model.predict(X_test)
plt.plot(X_test, Y_test_new, color='red')

plt.xlabel("Age")
plt.ylabel("Insurece")
plt.title("Logistic Regression")
plt.legend()
plt.show()
```

## KNN (K Nearest Neighbor)

K nearest neighbors or KNN Algorithm is a simple algorithm which uses the entire dataset in its training phase. Whenever a prediction is required for an unseen data instance, it searches through the entire training dataset for k-most similar instances and the data with the most similar instance is finally returned as the prediction.

- K == no. of the nearest neighbours
- The process of calculating the value of the K is called **parameter tuning**.
- Euclidean distance
- Hamming distance
- Manhattan distance
- How to calculate the value of the K
  - Data scientists choose as an odd number if the number of classes is even.
  - check by generating the model on different values of k and check their performance
- When not to use the KNN
- Applications
  - Recommendation in shopping websites - if we search a product then using this algorithm we can get the list of all the products that are come to the neighbour of the search product
  - Content search in document - same as the above algorithm search of the match content and separate them.

## SVM

## Support Vector Classification

- A Support Vector Machine (**SVM**) performs classification by finding the **hyperplane** that maximizes the margin between the two classes. The vectors (cases) that define the **hyperplane** are the support vectors.
- Decision Boundary - the line between two classes
- The classifier separates data points using a hyperplane with the largest amount of margin. SVM finds an optimal hyperplane which helps in classifying new data points.
- **Working of the SVM**

  1. Generate hyperplanes which segregates the classes in the best way. Left-hand side figure showing three hyperplanes black, blue and orange. Here, the blue and orange have higher classification error, but the black is separating the two classes correctly.
  2. Select the right hyperplane with the maximum segregation from the either nearest data points as shown in the right-hand side figure.

- **Dealing with non linear and inseparable planes**
  - SVM uses a **kernel** trick to transform the input space to a higher dimensional space as shown on the right. The data points are plotted on the x-axis and z-axis (Z is the squared sum of both x and y: z=x^2 +y^2). Now you can easily segregate these points using linear separation.

## Decision Tree Classification

- Decision tree - is a graphical representation of all the possible solutions to a decision based on certain conditions.
- Terminology
  - Leaf Node - node that cannot be further divided
  - Splitting - dividing a node into sub node based on some condition
  - Branch - formed by splitting the node
  - Parent Node
  - Child Node
- **How does the Decision Tree algorithm work?**
  1. Select the best attribute using Attribute Selection Measures(ASM) to split the records.
  2. Make that attribute a decision node and breaks the dataset into smaller subsets.
  3. Starts tree building by repeating this process recursively for each child until one of the condition will match:
     - All the tuples belong to the same attribute value.
     - There are no more remaining attributes.
     - There are no more instances.
- **Attribute Selection Measures**
  - Information Gain - we use the approach that give us high information gain
  - Entropy - the measure of the randomness
  - Gain Ratio
  - Gini index
- In **decision trees**, **overfitting** occurs when the **tree** is designed so as to perfectly fit all samples in the training data set. ... In short, a **decision tree** is **overfitted** if it gives highly accurate output on training data, but low accurate output on test data.

## Random Forest Classification

It is a method that operate by constructing multiple decision trees during the training phase. The Decision of the majority of the trees is chosen by the random forest as the final decision.

- **Applications**
  - Object Detection
  - Used in game console to detect the body parts and recreate them in the game

## Naïve Bayes

- Naive Bayes is a statistical classification technique based on Bayes Theorem. It is one of the simplest supervised learning algorithms.

- Naive Bayes classifier assumes that the effect of a particular feature in a class is independent of other features. For example, a loan applicant is desirable or not depending on his/her income, previous loan and transaction history, age, and location. Even if these features are interdependent, these features are still considered independently. This assumption simplifies computation. This assumption is called class **conditional independence**.

- Example - Suppose we have a problem of the Weather condition and the playing sports. Here we need to calculate the player will play or not based on the weather condition. - First Approaches -
- Zero Probability Problem -
  - Suppose there is no tuple for a risky loan in the dataset, the posterior probability will be zero, and the model is unable to make a prediction. This problem is known as Zero Probability because the occurrence of the particular class is zero
  - The solution for such an issue is the Laplace Transformation(Laplacian correction). Here, you can assume that the dataset is large enough that adding one row of each class will not make a difference in the estimated probability. This will overcome the issue of probability values to zero

## 2. UNSUPERVISED LEARNING

This is a process where a model is trained using an information which is not labelled i.e. unlabeled data

- **Types**
  - Clustering - is the problem identifying to which set of categories a new observation belongs

## K Means Clustering

- We are given a data set of items, with certain features, and values for these features (like a vector). The task is to categorize those items into groups. To achieve this, we will use the k Means algorithm.
- Example - Facebook tag
- Clustering - is the process of dividing the datasets into groups, consisting of similar data-points. So data points in the same cluster is similar and in different is dissimilar
  - Example - Items arranged in the mall are arranged into the categories
  - Application
    - In recommendations system - Amazon shop, Netflix (movie recommendation), flickr (photo’s recommendation)
- Types
  - Exclusive clustering
  - Overlapping Clustering - data points belong to multiple clusters
- K means - is a clustering algorithm whose main goal is to group similar elements or data points into cluster using the mean distance between the data points.
  - K - represents the number of the clusters

## Hierarchical Clustering

- hierarchical clustering groups together the data points with similar characteristics.
- Dendrogram - It is a diagram representing a tree. This diagrammatic representation is frequently used in different contexts in hierarchical clustering, it illustrates the arrangement of the clusters produced by the corresponding analyses of the data.
- Types

  - **Agglomerative** - here data points are clustered using a bottom-up approach starting with individual data points - **Steps to Perform Agglomerative Hierarchical Clustering**
    1. At the start, treat each data point as one cluster. Therefore, the number of clusters at the start will be K, while K is an integer representing the number of data points.
    2. Form a cluster by joining the two closest data points resulting in K-1 clusters.
    3. Form more clusters by joining the two closest clusters resulting in K-2 clusters.
    4. Repeat the above three steps until one big cluster is formed.
    5. Once single cluster is formed, [dendrograms](https://en.wikipedia.org/wiki/Dendrogram) are used to divide into multiple clusters depending upon the problem.
  - **Divisive** - here top-down approach is followed where all the data points are treated as one big cluster and the clustering process involves dividing the one big cluster into several small clusters.

- There are different ways to find distance between the clusters. The distance itself can be Euclidean or Manhattan distance. Following are some of the options to measure distance between two clusters:
  1. Measure the distance between the closes points of two clusters.
  2. Measure the distance between the farthest points of two clusters.
  3. Measure the distance between the centroids of two clusters.
  4. Measure the distance between all possible combination of points between the two clusters and take the mean.

## 3. REINFORCEMENT LEARNING

## 4. SEMI SUPERVISED LEARNING

Semi-supervised learning is a class of machine learning tasks and techniques that also make use of unlabeled data for training – typically a small amount of labeled data with a large amount of unlabeled data. Semi-supervised learning falls between unsupervised learning and supervised learning

## Saving and loading a trained model

- Using - pickle, joblib
- STEPS:
  - dumb the model into a file
  - then load the file to a variable and use it
