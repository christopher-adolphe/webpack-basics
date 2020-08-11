require('babel-runtime/regenerator');
require('babel-register');
require('./main.css');
require('./index.html');
require('./app');

var hello = async (args) => {
  const {a, b} = args;
  await console.log(`Webpack beyond the basics! ${a} ${b}`);

  console.log('Done');
}

hello({a: '1st param', b: '2nd param'});
