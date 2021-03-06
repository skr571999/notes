---
title: Introduction
---

## Terminology

- **Software** - is the set of instructions or programs that tell a computer what to do.

- **Software development** - process of Designing, Deploying and Maintaining software.

- We write programs using the high level language but the computer does not understand high level language because it understands the programs written in 0 and 1 binary called Machine code. A program written in high level language is called Source code.

- So to make computer understand the code written in high level language we need to convert it to the machine code

- To convert the Source code into machine code we use Compiler or Interpreter

- Compiler and Interpreter are the programs that convert the Source code to Machine code

- **Compiler** - takes the entire program and converts it into machine code which is stored in a file which can be directly executed by the machine. Compiled languages - C, C++

- **Interpreter** - directly executes instructions written in a programming or scripting language without previously converting them to machine code. Interpreted languages - Python, JavaScript

- Note
  - Interpreted programs run slower than the compiled programs.
  - Java programs are first compiled and then interpreted by the interpreter.

## Types of Software

- System Software
  - OS
  - Language Translators
    - Compilers
    - Assemblers
    - Interpreters
- Utility Software
- Applications Software
  - General Purpose
    - Word, Excel
  - Customized Software
    - Web Applications
    - Desktop Applications
    - Android Application

## Operating System

- It is the master program that manages how software gets to use the hardware of the computer.
- Application --> OS --> Driver --> Device

## Software Versioning

- Given a version number `MAJOR.MINOR.PATCH`, increment the:
  - `MAJOR` version when you make incompatible API changes,
  - `MINOR` version when you add functionality in a backwards-compatible manner, and
  - `PATCH` version when you make backwards-compatible bug fixes.

## Synchronous vs Asynchronous

- Synchronous - occurring at the same time.
- Asynchronous - not occurring at the same time.
- Synchronization - the action of causing a set of data or files to remain identical in more than one location.

## Web Terminology

- Website - collection of Webpages
- Webpages - a hypertext document(generally contain information) on the World Wide Web
- Hypertext is text which contains links to other texts
- `WWW` - World Wide Web
- Web Development - work involved in developing a website
- What is the `URL`
  - http://localhost:3000/login
  - `http` → Protocol
  - `localhost` → server address
  - `3000` → Port Number
  - `/login` → path
- Response Code
  - 200 - Ok
  - 400 - Bad Request
  - 401 - Un authorized
  - 404 - Not Found
  - 500 - Internal Server Error
- Cloud Computing
  - `SAAS` - Software as a Service - Example - Gmail
  - `PASS` - Platform as a Service - Ex - Heroku
  - `IASS` - Infrastructure as a Service - Ex - GCP, AWS, Azure

## Web Technologies and Tools

- Frontend Technologies
  - HTML (define structure)
  - CSS (add style)
  - JS (add behavior)
- Tools
  - Browser(Chrome)
  - Text Editor(VSCode)
- Backend Technologies
  - Programming Language (Python, JavaScript)
  - Server (software that handle the Request and Response)
  - DBMS (software to manage data)

## Web development Procedures

- **Phase - I** - Design
  - Taking Requirements
    - Purpose, Goal, Target Audience
  - Analysis, Planning
  - Sitemap, Structure
  - Design
- **Phase - II** - Development
  - Setting up Tasks like
    - Transpiling
    - Bundling
    - Minifing
    - Packaging
    - Setting Up Prettier
    - Setting Up Git Pre Commit hook
    - Splitting Small Components and Reuse them
    - Maintain Good Folder Structure
  - Development
    - Website Responsiveness Tasks
      - Start from Mobile
      - Setting up bootstrap breakpoints
    - Not to Defining Global Styles, and overriding library styles
  - Test
  - Deployment
- **Phase - III** - Maintenance

## Learning Backend

- Language
  - Module/Package System
  - Built-in Module (os, file, http, request, url, path)
  - Package Manager(npm, pip, yarn)
  - Database Communication(MongoDb, MySQL)
- Template Engine
- Architecture(MVC or MVT)
- Saving Data to Database
- Data Validation
- File Upload
- Authentication
- Making REST API
- using External Services
  - Sending Mail/SMS
- Deployment

### Important Topics

- Django cache
  - Memory Cache - fast, use RAM
  - Database Cache -
  - File System Cache
- Cron Job
- Joins
- Cookies and Session
- Access token/Refresh token - JWT Token
- MVC/MVT
- ORM
- POST vs GET
- Authentication
- Authorization
- Normalization
- Ajax
- APIs
- OOPs
- Primary Key/Foreign Key
- Views in SQL
- Indexes in SQL
- Socket
- Serialization - Converting model instance to Python data type
- Deserialization
- Signals
- CSRF -
- ACID Properties of Database
  - Atomicity
  - Consistency
  - Isolation
  - Durability

### How to Become a Good Backend Engineer (Fundamentals)

- https://youtu.be/V3ZPPPKEipA

1. Communication Protocols

- TCP, UDP
- Bi direction communication - Web socket

2. Web Servers
3. Data Base Engineering

- ACID Properties
- MYSQL
- NoSQL

4. Proxies

- Reverse proxies

5. Caching
6. Messing Systems
7. API Web Frameworks
8. Message Format
9. Security

## What is the use of the software?

- Automate the tasks
- Share information - Videos, Blogs, Books
- Entertainment - Games, Movies/Shows, Songs
- Communication

## Software Engineering Path

- Software Engineer
- Software Manager
- Software Architect

## Software Employment Types

- Full time Job
- Part time
- Contract Based
- Freelancing
- Hourly Based
