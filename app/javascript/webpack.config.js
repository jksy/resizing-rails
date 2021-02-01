const path = require('path');

module.exports = {
  mode: 'development',
  entry: './packs/resizing.js',
  output: {
    filename: 'resizing.bundle.js',
    path: path.join(__dirname, 'dist')
  }
};
