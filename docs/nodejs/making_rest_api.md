# REST API

- API - Application Programming Interface
- REST - Representational state transfer
- API is a interface through which one application talk to another application.
- Web Services - are the type of APIs which are accessed through a newtwork Connection
- REST is a software architectural style(or API design Pattern) that defines a set of constraints to be used for creating Web services.
- Web services that conform to the REST architectural style, called RESTful Web Services.

- RESTful Constraints

  - Both client and Server should work Independently
  - Request Should be handled using different HTTP Methods
  - No client context is stored on the server (like Session)

- Request and Response
- Parts of the Request

  - Endpoint (route)
  - Method
  - Headers(optional)
  - Body(optional)
  - Parameters(optional)
  - Query(Optional)

- Headers

  - The additional Information that the client need to send to the Server is Sended using the Headers.Like
    - Authorization Credentials
    - Content-Type of the Body
    - User-Agent - information about the application which is sending the request

- Request Methods

  - POST - Create
  - GET - Read
  - Put - Update
  - DELETE - Delete

- HTTP Status Codes

  - Tell the Status of the Response to the client
  - Common Status Termonology
    - 200+ - means the request is Success
    - 300+ - means the request is redirected to another URL
    - 400+ - an error is generated due to Client
    - 500+ - an error is generated due to server

- Testing Tools for Routes
  - CURL
  - Postman

<!--
- Book Practical Node v2 - https://github.com/azat-co/practicalnode
- MongoDB Aggregation : https://www.youtube.com/playlist?list=PLWkguCWKqN9OwcbdYm4nUIXnA2IoXX0LI
-->
