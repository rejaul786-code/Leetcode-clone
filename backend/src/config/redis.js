const { createClient } = require('redis');

const redisClient = createClient({
  username: 'default',
  password: 'xtvVCavkAtoZZ5QAOCyTzBC6M11QqMyi',
  socket: {
    host: 'redis-13144.c275.us-east-1-4.ec2.redns.redis-cloud.com',
    port: 13144
  }
});

module.exports = redisClient;
