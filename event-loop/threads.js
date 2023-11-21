// you can modify the nmber of threads created by the libuv library to handle asynchronous I/O operations initiated in NODEjs
// The libuv library allows us to handle I/O operations - interactions ith the operation system like the file system or networking
// Some of those operations are handled by the libuv library via a threadpool qhen CPU processing is required  (like file system access or the crypto module to create hashes)
// and others are executed outside the threadpool created by the libuv library like the http network  requests 
// the example below uses the threadpool created by the libuv library

process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start);
});