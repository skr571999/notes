# Deep Learning

Deep learning is a particular kind of machine that is inspired by our brains cells called neurons which lead to the concept of artificial neural network.

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

## Libraries

- Numpy
- Pandas
- Matplotlib
- sklearn
  - sklearn not support GPU
- Tensorflow

## AI vs ML vs DL

- **Artificial Intelligence:** A field of computer science that aims to make computers achieve human-style intelligence. There are many approaches to reaching this goal, including machine learning and deep learning.
- **Machine Learning:** A set of related techniques in which computers are trained to perform a particular task rather than by explicitly programming them.
  - Mathematical Models
- **Neural Network:** A construct in Machine Learning inspired by the network of neurons (nerve cells) in the biological brain. Neural networks are a fundamental part of deep learning.
- **Deep Learning:** A subfield of machine learning that uses multi-layered neural networks.
  - Deep learning Techniques - Using the Neural Network

## Layers of Deep Neural Network

- The Input Layer
- The Hidden Layer
- The Output Layer

## Terminology

- **Shallow networks** - having only one hidden layer
- **Deep neural networks** - more than two hidden layer
- **Activation Functions**
  - Step
  - Sigmoid
  - Relu - The relu function cuts off values below zero i.e remove value below zero
  - Tanh - tanh saturates to –1 for low input values and +1 for high input values
- **Neural Network architecture** - describe the way neurons are connected

## Introduction

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

## Neural network

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

## Types of Neural Network

1. **Artificial neural network**- An artificial neural network is used for all the other machine learning tasks other than related to image processing , which are generally like stock prediction, to predict whether a certain team would win a match or not based on its performance etc.

2. **Convolutional neural network**- A convolutional neural network is primarily used for tasks related to image processing like classification of images into various groups

- Types of Neural Network(On the basis of number of neurons)

1. Single Output Perceptron
2. Multiple Output Perceptron
3. Single Layer Neural Network
4. Deep Neural Network - Having Multiple hidden Layer

## Working of Neural Network

- when we give the input the neuron weights are added to the input and give to the neuron basically a neuron is a function which called activation function
- in the activation function we give input the sum of the input multiplied with the weights and adding the bias to that

- **Feed Forward**
- **Backpropagation algorithms** are a family of methods used to efficiently train artificial neural networks (ANNs) following a gradient descent approach that exploits the chain rule. The main feature of backpropagation is its iterative, recursive and efficient method for calculating the weights updates to improve the network until it is able to perform the task for which it is being trained.
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

## Tensorflow
