const app = require('./server');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Env: ${process.env.NODE_ENV || 'dev'}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM: closing server');
  server.close(() => {
    console.log('Server closed');
  });
});