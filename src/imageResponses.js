const fs = require('fs'); // file system module

const dankmemes = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getMemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankmemes);
  response.end();
};

module.exports = {
  getMemes,
};
