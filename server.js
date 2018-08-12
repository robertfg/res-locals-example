/*  **********  REQUIREMENTS  **********  */
const express = require('express');
const router  = require('./routes');
const session = require('express-session');


/* ***** VARIABLES ***** */
// const hostname = '127.0.0.1';
// const port = 3000;

// Create application object
const app = express();

// Set hostname and port
app.set('hostname', process.env.HOSTNAME || '127.0.0.1');
app.set('port', process.env.PORT || 3000);


/*  **********  MIDDLEWARE  **********  */
// Doesn't work:
// app.configure = () => {
//   ...
// }

/*
    process.env gives you access to standard Windows environment variables:
      Control Panel > System and Security > System > Advanced System Settings > Advanced tab > Environment Variables

    You can run the Node command line to enter PORT and HOSTNAME as follows:

    HOSTNAME=127.0.0.1 PORT=9999 node server.js

    Only 127.###.###.### works.

    Loopback, or loop-back, refers to the routing of electronic signals, digital data streams, 
    or flows of items back to their source without intentional processing or modification.
    This is primarily a means of testing the transmission or transportation infrastructure.

    Virtual loopback interface = localhost, generally 127.0.0.1.  Implementations of the Internet Protocol Suite
    include a virtual network interface through which network applications can communicate when executing on the
    same machine.  It is implemented entirely within the operating system's networking software and passes no packets
    to any network interface controller.Any traffic that a computer program sends to a loopback IP address is simply
    and immediately passed back up the network software stack as if it had been received from another device.
*/


/*  **********  SESSION HANDLER  **********  */
app.use(session({
  secret: 'req.session.tempData',
  resave: true,
  saveUninitialized: false,
}));


/*  **********  RES.LOCALS EXAMPLE  **********  */
app.use((req, res, next) => {
  console.log('app.use');
  res.locals.sampleData = req.session.tempData;
  // res.locals.sampleData = 'Robert';
  console.log(`res.locals.sampleData: ${res.locals.sampleData}, req.session.tempData: ${req.session.tempData}`);
  next();
});


/*  **********  ROUTER COMES AFTER SESSION HANDLER AND RES.LOCALS  **********  */
app.use(router);


// Start the server
app.listen( app.get('port'), app.get('hostname'), () => {
  console.log(`Server is listening on port`, app.get('port'));
});
