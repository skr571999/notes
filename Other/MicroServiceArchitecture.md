---
title: Micro Service Architecture
---

## Monolithic vs MicroService

- Moving from Monoliths to Micro-Services - GauravSen
  - https://youtu.be/rckfN7xFig0

Monolithic

- Difficult to deploy big applications
- Scalability

  - When we scale the application server we need to scale whole app instead in MicroServices we can just scale the module that is needed

- MicroServices talk to each other by HTTP, gRPC

MicroServices

- Advantages
  - Deployment Flexibility
  - Technology Flexibility
    - we can develop different MicroService in different languages as well
  - Can be scaled Separately
- Disadvantages
  - Deployment/Architecture complicity

MicroServices Architecture

- Contract
- Router
- Simplify Deployment
- Communication
- Logging

Points to Remember for MicroService

- Single Source of Truth
  - dedicated data store for each MicroService
- Condense Business responsibilities to be at single place
- Initial Infrastructure cost is high

- MESSAGE BROKER - A message broker is an architectural pattern for message validation, transformation, and routing. It mediates communication among applications, minimizing the mutual awareness that applications should have of each other in order to be able to exchange messages, effectively implementing decoupling.

- Message queue architecture - A message queue is a form of asynchronous service-to-service communication used in serverless and micro-services architectures. Messages are stored on the queue until they are processed and deleted. Each message is processed only once, by a single consumer.

- Django-Flask Micro-service App
  - https://www.youtube.com/watch?v=ddrucr_aAzA&ab_channel=ScalableScripts
  - https://github.com/scalablescripts/python-microservices

## References

- https://www.fullstackpython.com/microservices.html
- https://www.youtube.com/watch?v=7rkeORD4jSw&ab_channel=IBMCloud
- Cloud AMQP - Console - https://customer.cloudamqp.com/instance
