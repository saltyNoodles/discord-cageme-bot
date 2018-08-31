const forever = require('forever-monitor');

const child = new forever.Monitor('./index.js', {
  max: 3,
  silent: true,
  args: []
});

child.on('exit', () => {
  console.log('index.js has exited after 3 restarts');
});

child.start();
