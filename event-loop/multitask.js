/*
The following is an example of multitasking with nodejs
All the tasks are executed using the libuv library
The http request without using the threadpool created by libuv
while the file system access and the hashes generation using the fs and crypto NodeJS modules respectively
use the threadpool instantiated by the libuv library. Depending on the configuration of the number of threads
for the pool with process.env.UV_THREADPOOL_SIZE = ,the operations using the threads (fs, crypto) will take different time to be done
*/

process.env.UV_THREADPOOL_SIZE = 1;

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash:', Date.now() - start);
  });
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS:', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();