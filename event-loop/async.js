const https = require('https');

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

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

// NodeJS core htttp module uses the libuv library to interact with the operating system
// the network operations dont use the thread pool that the libuv library creates to handle other I/O operations like those initiated with the fs or crypto Nodejs module