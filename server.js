const app = require('./app');
const PORT = 3000;

if(!module.parent) {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  process.on('SIGINT', function() {
    console.log(
      'SIGINT Interrupt signal detected and exiting node process now.'
    );
      server.close();
  });
}




module.exports = app;
``