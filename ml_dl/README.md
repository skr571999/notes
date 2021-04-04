---
title: ML DL
---

## Machine Learning Algorithms Categories

- Supervised
  - Regression
  - Classification
- Unsupervised
  - Clustering
  - Dimensionality Reduction
- Reinforcement
- Semi-Supervised

## Introduction

### Libraries

- **Numpy** - Array
- **Pandas** - for reading data and displaying that in tabular form
- **Matplotlib** - For graphical representation of data
  - Data Visualization
  - Types of the Plot - Bar Graph, Pie Plot, Histograms, Hexagonal Bin Plot, Area Plot, Scatter Plot
- **sklearn**
  - fit Resets a Model - An important property of scikit-learn models is that calling fit will always reset everything a model previously learned.

### Data Processing

- Converts raw data into a readable format that can be interpreted, analyzed, and used for a variety of purposes.
- The collection and manipulation of items of data to produce meaningful information.

### Training and Testing

- Dividing the data into two parts one for training the model and the other part for the testing the model. In testing we comparing the predicted output of the model with the actual output present and calculate the difference between them.
- **Cost function** - This is the difference or distance between the predicted value and the actual value

### Steps of the Learning

- Defining a Problem
- Preparing Data
- Model Development
  - Selecting the Algorithms by doing the data analysis
  - Training
- Model Evaluation - Testing - Confusion Matrices
- Making some predictions

### Types of Learning

1. Supervised Learning
2. Unsupervised Learning
3. Reinforcement Learning
4. Semi Supervised Learning

## Numpy

- **Installation**: `pip install numpy`
- [https://numpy.org](https://numpy.org)

### Methods

- np.array()
- np.arange()
  - np.arange(0, 30, 5) # Create a sequence of integers from 0 to 30 with steps of 5
- np.zeros()
- np.ones() - Create a 3X4 array with all zeros
- np.empty() - creates an array whose initial content is random and depends on the state of the memory
- np.linspace(start, stop, count)
  - np.linspace(0, 5, 10)
    - Create a sequence of 10 values in range 0 to 5
- np.array.
  - .reshape() - return the reshaped array
  - .resize() - change the array itself
  - .ndim - find the dimension of the array
  - .shape - find the shape of the array(no. of the coloumn and the no. of the rows)
  - .shape = (shape)
  - .dtype - find the data type of the element
  - .dtype.name
  - .size - no. of the elements in the array
  - .itemsize - find the byte size of each element
  - dtype=
    - np.int32
    - np.float
- np.sum() - axis=0,1 - do sum of array elements
- np.add(x1, x2, out)
  - used to add two or more arrays
  - x1, x2 - two arrays
  - out - array to save the result
- np.min()
- np.max()
- np.sqrt()
- np.info(np.min) - to see the information about the method
<!-- - np.exp() -->

### Indexing, Slicing, Iterating

- 1 - Dimension
  - indexing and slicing same as normal list
- 2 - Dimension
  - [1, 2]
  - [1:, 2]
  - x[1,2,...] is equivalent to x[1,2,:,:,:],
  - x[...,3] to x[:,:,:,:,3] and
  - x[4,...,5,:] to x[4,:,:,5,:]
- properties and methods of numpy.ndarray
  - .flat
  - .ravel() - return the flattern array
  - .T - return the transpose

### Create

```py
import numpy as np

# creating a numpy array
np.array([1, 2, 3])
np.array([1, 2, 3], dtype="float")
np.array([1, 2, 3], dtype=complex)
np.array([1, 2, 3], dtype="complex")
np.array([[1, 2, 3], [4, 5, 6], [12, 13, 14]])
np.array((1, 3, 2))
[[1, 2, 3], [4, 5, 6]]
np.array("hello")
np.array(("hello"))
np.array(("hello", "hello2"))
np.array([("hello", "hello2"), ("hello3", "hello4")])
np.array([12, "hello"])

a = np.array([(1, 2, 3), (4, 5, 6000088883838380)], dtype=np.int64)

np.array([1.2, 1.3, 1.4], dtype=int)

np.arange(15).reshape(3, 5)
np.arange(15, dtype="float").reshape(3, 5)

np.array([[1, 2, 4], [5, 8, 7]])
np.full((3, 3), 6, dtype="complex")  # Create a constant value array of complex type
np.random.random((2, 2))  # Create an array with random values


# Reshaping 3X4 array to 2X2X3 array
a = np.array([[1, 2, 3, 4], [5, 2, 4, 2], [1, 2, 0, 1]])

print(a.reshape(2, 2, 3))
print(a.reshape(2, 3, 2))
a.resize(4, 4)
a.resize(1, 2)
a.resize(2, 3)


np.arange(6)  # 1d array
np.arange(12).reshape(4, 3)  # 2d array
np.arange(24).reshape(2, 3, 4)  # 3d array
np.arange(24).reshape(2, 3, 2, 2)  # 4d array
# np.set_printoptions(threshold=100)
```

### Features

```py
import numpy as np
import sys
import time

# FEATURE of numpy
# 1 - less size than list
# a = list(range(1000))
# print(sys.getsizeof(2) * len(a))

# a = np.arange(1000)
# print(a.size * a.itemsize)


# # # 2 - faster
s = 1000000
L1 = list(range(s))
L2 = list(range(s))

A1 = np.arange(s)
A2 = np.arange(s)

start = time.time()
res = [(x, y) for x, y in zip(L1, L2)]
print((time.time() - start) * 1000)

start = time.time()
res = A1 + A2
print((time.time() - start) * 1000)
```

### Methods Example

```py
import numpy as np

# max, min ,sum
a = np.array([1, 2, 3])
print(a.max())
print(a.min())
print(a.sum())
a = np.array([(1, 2, 3), (4, 5, 6)])
print(a.sum(axis=0))  # y axis addition
print(a.sum(axis=1))  # z axis addition

# suqare root
a = np.array([(1, 2, 3), (4, 5, 6)])
print(np.sqrt(a))

# standard deviation
a = np.array([(1, 2, 3), (4, 5, 6)])
print(np.std(a))


# stacking
a = np.array([(1, 2, 3), (4, 5, 6)])
b = np.array([(1, 2, 3), (4, 5, 6)])
print(np.vstack((a, b)))
print(np.hstack((a, b)))


# NOTE difference between the ravel and flattern
a = np.array([(1, 2, 3), (4, 5, 6)])
a.ravel() # convert to one row
a = np.array([[1, 2, 3], [4, 5, 6]])
a.flatten() # Flatten array

# Unary operation
# Special Functions - cosine, sine

# Universal Functions
# NumPy provides familiar mathematical functions such as sin, cos, and exp. In NumPy, these are called “universal functions”(ufunc). Within NumPy, these functions operate elementwise on an array, producing an array as output

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(np.add(a, b))
print(np.exp(a))


def f(x, y):
    return 10 * x + y


b = np.fromfunction(f, (5, 4), dtype=int)  # (function, shape)
print(b)
print(b[2, 3])
print(b[0:5, 1])
print(b[:, 1])
print(b[1:3, :])
print(b[-1])


c = np.array([[[0, 1, 2], [10, 12, 13]], [[100, 101, 102], [110, 112, 113]]])
print(c.shape)
print(c[1, ...])  # same as c[1,:,:] or c[1]
print(c[..., 2])  # same as c[:,:,2]

for row in c:
    print(row)

# Shape Manipulation
a = np.floor(10 * np.random.random((3, 4)))
print(a)
print(a.shape)
print(a.ravel())  # returns the array, flattened
print(a.reshape(6, 2))  # returns the array with a modified shape
print(a.T)  # returns the array, transposed
print(a.T.shape)
print(a.shape)


a = np.arange(15).reshape(3,5)

for i in a.flat:
    print(i)
```

### Operators

```py
import numpy as np


# slicing - 1D, 2D
a = np.array([(12, 13, 14), (14, 15, 16), (17, 18, 19)])
print(a)
print(a[0, 2])
print(a[0:, 2])
print(a[0:2, 2])

# + - * /
a = np.array([(1, 2, 3), (4, 5, 6)])
b = np.array([(1, 2, 3), (4, 5, 6)])

print(a + b)
print(a + 4)
print(a - b)
print(a * b)
print(a / b)

a = np.array([1, 2, 3, 4, 5])
print(a > 1)

a = np.array([[1, 2], [3, 4]])
b = np.array([[2, 3], [4, 4]])
print(a * b)  # elememt wize product
# Matrix product
print(a @ b)
print(a.dot(b))

# Compound Assignment operation also possible
# +=, -=, etc
```

### Other Functions

```py
# np.fromfunction()
np.fromfunction(lambda x, y: y+x, (3, 3), dtype=int)


# np.random
# np.random.randint()
np.random.randn(3)
np.random.random((2,2))


b = np.hstack((a,a,a))
np.vstack((a,a,a))

np.hsplit(b, 9)
np.vsplit(b, 9)


# Copy and Views
a = np.arange(10)

b = a
a.resize(5,2) # change happen in both a and b

# in python mutable objects are passed as references

## View or Shallow Copy

# While slicing a array  a view of it is returned
#  view method creates a new array object that looks at the same data.
c = a.view() # create a new copy of the array

a == c

a is c
a is b

c.shape = 2,5
a

# Deep copy - copy method makes a complete copy of the array and its data
d = a.copy()
d is a

c.base is a
d.base is a

d[0,0] = 111

c[0,0] = 222
a

# we can omit one of the sizes which will then be deduced automatically
np.arange(10).reshape(2,-1) # -1 means "whatever is needed"
```

## Pandas

### Use case

- Data analysis
- It can be used to read the data from the JSON file, HTML file, Clipboard, Database, etc.
- Handling Missing Data

### Pandas Data Structure

- series - 1 D, homogeneous data, size immutable, value of data mutable
- dataframe - 2 D, Heterogeneous, size mutable, data mutable
- Panel - 3D, Heterogenous, size mutable, data mutable

### Pandas Operations

- Slicing the Dataframe
- Changing the Index
- Data conversion
- Joining and Merging
- Concatenation
- Changing the Coloumn headers

### Example

```py
import pandas as pd

a = pd.Series([1,2,3,4,'hgg'])

type(a)
dir(a)
a.dtype
a.dtypes

b = pd.DataFrame({'A': [1,2,3,4], 'B': [11,22,33,44]})
type(b)
b.dtypes

pd.date_range('111', periods=6)
dates = pd.date_range(start='13/1/2019',end='12/2/2019', periods=6)
dates = pd.date_range(start='13/1/2019', periods=6)

import numpy as np

df = pd.DataFrame(np.random.randn(6,4),index=dates, columns=list('ABCD'))


df = pd.DataFrame({
    'A': [1,2,3],
    2: ['A', 'B','C'],
    3: [1,2,'A']
}, index=[2,3,4,1])

a.dtype
a.dtypes

a.to_numpy()


# pd.Series()
# pd.DataFrame()
# pd.date_rane()

# Series()
#   - dtype
#   - dtypes
#   - .to_numpy()


# DataFrame()
#   - .dtypes
#   - .to_numpy()
#   - columns=
#   - index=
#   - .describe()
#   - .head()
#   - .tail()
#   - .T


df.tail(1)
df.sort_index()
df.sort_index( ascending=False)

df.columns
df.index

# Selection
type(df.A)
df.A
df['A']

df.plot()
```

## Machine Learning

- It is the art and science of giving computer the ability to learn to make decision from data not explicitly programmed or Set of technique used to extract knowledge from available data and use that knowledge to make decisions.
- Example:
  - Web Search Engine
  - YouTube Recommendation
  - Virtual Personal Assistants - Siri, Alexa, Google Assistant
  - Filtering the Spam mails
  - Self driving Cars

### Algorithms

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
    - Association
      - Apriori
      - ECLAT Algorithm
- **Reinforcement Learning**

### Supervised

This is a process of learning from the Labeled dataset

#### Types

- **Regression**
  - is the prediction of a numeric value and often takes input as a continuous value.
- **Classification**
  - is the process of dividing the dataset into different categories or groups by adding label.

### Linear Regression

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

### Logistic Regression

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

### KNN (K Nearest Neighbor)

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

### SVM

### Support Vector Classification

- A Support Vector Machine (**SVM**) performs classification by finding the **hyperplane** that maximizes the margin between the two classes. The vectors (cases) that define the **hyperplane** are the support vectors.
- Decision Boundary - the line between two classes
- The classifier separates data points using a hyperplane with the largest amount of margin. SVM finds an optimal hyperplane which helps in classifying new data points.
- **Working of the SVM**

  1. Generate hyperplanes which segregates the classes in the best way. Left-hand side figure showing three hyperplanes black, blue and orange. Here, the blue and orange have higher classification error, but the black is separating the two classes correctly.
  2. Select the right hyperplane with the maximum segregation from the either nearest data points as shown in the right-hand side figure.

- **Dealing with non linear and inseparable planes**
  - SVM uses a **kernel** trick to transform the input space to a higher dimensional space as shown on the right. The data points are plotted on the x-axis and z-axis (Z is the squared sum of both x and y: z=x^2 +y^2). Now you can easily segregate these points using linear separation.

### Decision Tree Classification

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

### Random Forest Classification

It is a method that operate by constructing multiple decision trees during the training phase. The Decision of the majority of the trees is chosen by the random forest as the final decision.

- **Applications**
  - Object Detection
  - Used in game console to detect the body parts and recreate them in the game

### Naïve Bayes

- Naive Bayes is a statistical classification technique based on Bayes Theorem. It is one of the simplest supervised learning algorithms.

- Naive Bayes classifier assumes that the effect of a particular feature in a class is independent of other features. For example, a loan applicant is desirable or not depending on his/her income, previous loan and transaction history, age, and location. Even if these features are interdependent, these features are still considered independently. This assumption simplifies computation. This assumption is called class **conditional independence**.

- Example - Suppose we have a problem of the Weather condition and the playing sports. Here we need to calculate the player will play or not based on the weather condition. - First Approaches -
- Zero Probability Problem -
  - Suppose there is no tuple for a risky loan in the dataset, the posterior probability will be zero, and the model is unable to make a prediction. This problem is known as Zero Probability because the occurrence of the particular class is zero
  - The solution for such an issue is the Laplace Transformation(Laplacian correction). Here, you can assume that the dataset is large enough that adding one row of each class will not make a difference in the estimated probability. This will overcome the issue of probability values to zero

### 2. UNSUPERVISED LEARNING

This is a process where a model is trained using an information which is not labelled i.e. unlabeled data

- **Types**
  - Clustering - is the problem identifying to which set of categories a new observation belongs

### K Means Clustering

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

### Hierarchical Clustering

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

### 3. REINFORCEMENT LEARNING

### 4. SEMI SUPERVISED LEARNING

Semi-supervised learning is a class of machine learning tasks and techniques that also make use of unlabeled data for training – typically a small amount of labeled data with a large amount of unlabeled data. Semi-supervised learning falls between unsupervised learning and supervised learning

### Saving and loading a trained model

- Using - pickle, joblib
- STEPS:
  - dumb the model into a file
  - then load the file to a variable and use it

---

## Deep Learning

Deep learning is a particular kind of machine that is inspired by our brains cells called neurons which lead to the concept of artificial neural network.

- DL Techniques

  - ANN - Artificial Neural Networks
  - CNN - Convolutional Neural Networks
  - RNN - Recurrent Neural Networks

- **Applications -**
  - Image recognition
  - Speech recognition
  - Natural language processing
  - Audio recognition
  - Social network filtering
  - DL helps in the detection of the cancer in the human body
  - It is used to train the robots to perform the human tasks
  - Distinguishes different types of the objects, people, road signs and drive without human intervention
  - Language transition - from one language to another language

### Libraries

- Numpy
- Pandas
- Matplotlib
- sklearn
  - sklearn not support GPU
- Tensorflow

### AI vs ML vs DL

- **Artificial Intelligence:** A field of computer science that aims to make computers achieve human-style intelligence. There are many approaches to reaching this goal, including machine learning and deep learning.
- **Machine Learning:** A set of related techniques in which computers are trained to perform a particular task rather than by explicitly programming them.
  - Mathematical Models
- **Neural Network:** A construct in Machine Learning inspired by the network of neurons (nerve cells) in the biological brain. Neural networks are a fundamental part of deep learning.
- **Deep Learning:** A subfield of machine learning that uses multi-layered neural networks.
  - Deep learning Techniques - Using the Neural Network

### Layers of Deep Neural Network

- The Input Layer
- The Hidden Layer
- The Output Layer

### Terminology

- **Shallow networks** - having only one hidden layer
- **Deep neural networks** - more than two hidden layer
- **Activation Functions**
  - Step
  - Sigmoid
  - Relu - The relu function cuts off values below zero i.e remove value below zero
  - Tanh - tanh saturates to –1 for low input values and +1 for high input values
- **Neural Network architecture** - describe the way neurons are connected

### Introduction

- Traditional Machine Learning Approach - use data to extract information
- Deep learning Approach - Making the computer to extract information by making the patterns

- **History -** Neural Network Approach Exists from 1952 but why we are doing it now because we now have

  - Big Data
  - Hardware
  - Software

- Need of the Neural Network - also we can not process huge amount of the data suing the traditional approaches. But using neural network we can solve the problems.

- DL models produce much better results than normal ML networks.
- Neural networks are functions that have inputs and transformed to outputs

- **Biological Neuron vs Artificial Neuron**

### Neural network

In neural network we process information in the same way as the human brain works.

- We create neural network using such type of the algorithms so that with the use of the data our model get train in such a way that it will make the patterns so when we work over the prediction part our model will work based on the pattern it has make in the training phase and give us more accurate output.

- **Examples**

  - As a new born baby,
    - has nothing in his memory, so he don’t know how to act on certain thing like how to eat
    - But as he see others and do that steps he get trained for that steps based on the patterns he make in his mind
    - as he learn for the things he see and his parents taught

- working of the traditional systems, we have a model that is trained for identifying the dogs but if we provide an image of a dog that is not similar to the trained image, then it could not be able to identify that dog.
- But if we use the neural network then we train our model using the neural network algorithm so that it make the pattern of the attributes of the training data and based on that data it provide us the output, in identifying the dog from the image it will it will search for certain attributes and based on the pattern of the attribute values it will categories that in one of the category
- We are having image of the two types one having the cow in it and the other one is having the car
  - Now during the training of the neural network we provide one image to the network. suppose we provide a cow image then our network will create the pathways in the network for that image and adjust the weight for that input category.
  - Now we provide another image of the cow and some other pathways are created and weights are adjusted
  - Now, if we provide a image of the car for that image different synapses from the neurons the new pathways are created and the weights are adjusted - Now in the prediction if we give a image to the network it will match the weight for that image and provide us the output

### Types of Neural Network

1. **Artificial neural network**- An artificial neural network is used for all the other machine learning tasks other than related to image processing , which are generally like stock prediction, to predict whether a certain team would win a match or not based on its performance etc.

2. **Convolutional neural network**- A convolutional neural network is primarily used for tasks related to image processing like classification of images into various groups

- Types of Neural Network(On the basis of number of neurons)

1. Single Output Perceptron
2. Multiple Output Perceptron
3. Single Layer Neural Network
4. Deep Neural Network - Having Multiple hidden Layer

### Working of Neural Network

- when we give the input the neuron weights are added to the input and give to the neuron basically a neuron is a function which called activation function
- in the activation function we give input the sum of the input multiplied with the weights and adding the bias to that

- **Feed Forward**
- **Back-propagation algorithms** are a family of methods used to efficiently train artificial neural networks (ANNs) following a gradient descent approach that exploits the chain rule. The main feature of back-propagation is its iterative, recursive and efficient method for calculating the weights updates to improve the network until it is able to perform the task for which it is being trained.
  - **Error Optimization**
  - Gradient Descent
    - W0 + Δ W0
    - Learning rate - the value of the change in the Δ W0 so, that the algo will check better the change in the weights.
- **Overfitting and Underfitting**
- **Regularization** - to overcome the problem of the Overfitting

  - Technique 1 - Dropout
  - Technique 2 - Early Stopping

- How to decide the number of the layers required in the model
  - linearly Separable problems
  - Multilayer Perceptron

## Natural Language Processing

- SOURCE: https://youtu.be/5ctbvkAMQO4
- Text Mining/ Text Analysis - is the process of deriving meaningful information form the natural language text
- NLP is the part of the CS and AI which deals with the human Languages
- Applications
  - Sentimental Analysis(Facebook, Twitter Sentimental Analysis)
  - Chatbots()
  - Speech Recognition(Siri)
  - Machine Transition(Google Translate)
  - Spell Checking
  - keyword Searching
  - Information Extraction
  - Advertisement Matching
- Components of NLP
  - Natural language Understanding
  - Natural Language Generation
- STEPS of NLP
  - Tokenization
  - Stemming
  - Lemmatization
  - POS Tags
  - Named Entity Recognition
  - Chunking
- Python Library for NLP
  - NLTK
  - TextBlob

## Sentimental Analysis

is the process computationally identify and categorizing opinions form piece of text and determine whether the writer attitude towards a particular topic or the product is positive , negative or neutral
Steps

I - Tokenization
is dividing the paragraph into different set of statements and the statements are further divided into words
II - Cleaning the data
is removing the data that does not add contribute to the analysis like special characters (!, @, # etc)
III - Removing the stop words
Words that does not contribute for the analysis like the , was ,he, she, etc
IV - Classification
Doing the classification using the Supervised learning algorithm
Training the model using bag of words
Classify as positive, negative, neutral
Module used - textblob

## Computer Vision

- It is the field that deal with how the computer can be made to know what is in the image, videos and perform some tasks on that.
- SOURCE:
  - Siraj Raval (6 week Curriculum) - https://youtu.be/FSe_02FpJas
  - https://en.wikipedia.org/wiki/Computer_vision
- Application of Computer Vision(Tasks)
  - Image Segmentation
  - Object Detection
  - Image Classification
  - Object Tracking
  - Image Generation
  - Face Detection
  - Optical Character Recognition
- Python Library for Computer Vision
  - OpenCV
  - SimpleCV

## Recommendation System

- Content Based
- Collaborative Filtering
  - Memory Based
  - Model Based
- User based collaborative filtering
- Item Based Collaborative Filtering
