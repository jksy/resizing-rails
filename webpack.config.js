const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/javascript/packs/resizing.js',
  output: {
    filename: 'resizing.bundle.js',
    path: path.join(__dirname, './app/javascript/dist')
  }
};
