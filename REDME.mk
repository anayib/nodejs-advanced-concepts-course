# NodeJS Advanced Concepts

This course explains how NodeJS works under the hood. Some of the topics covered are the event loop, the libuv library multithreads operations, V8, and how OS asynchronous operations are handeled. 

## Fundamental concepts in NodeJS
* NodeJS is a <mark>run time environment</mark> that allows to run JS outside the browser. In other words it is a program that provides the correct environment to run JS outside the browser. 
* It uses the <mark>V8 engine</mark> to compile (convert) JS code into machine code and execute it. 
* The <mark>libuv library</mark> is a program that allows asynchronous non-blocking I/O operations (allows our program written in JS to interact with the operating system directly ( eg when making a network http request) or via the thread pool it creates (when using the fs or crypto nodejs module ). It is responsable to create and handle the thread pool to handle the OS operations required by the program we erite using NodeJS. 
* The <mark>thread pool</mark> is a set of threads (4 by default) created by the libuv library to process asynchronous operations delegated by node to be executed interacting with the system (file system CPU operations), which are not exected in the single thread of the event loop of NodeJS. Once the coperations are completed, the callback are queued to the event loop in NodeJS to be executed.

## Enhance NodeJS App

### Using node in cluster mode

Cluster mode is instantiating multiple processes of node tunning the same NodeJS program you have written, that way you will have as much as threads as processes as each process in Node is single thread (dont be confused with the multithread functionality of the libuv library to handle several operations at the same time using the thread pool it creeates when node requires it via the event loop based on the operation I/O needed)
### Using Worker Threads
