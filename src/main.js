require('babel-runtime/regenerator');
// require('react-hot-loader/patch');
require('babel-register');
require('./index.html');
require('./app');

var hello = async (args) => {
  const {a, b} = args;
  await console.log(`Webpack beyond the basics! ${a} ${b}`);

  console.log('Done');
}

hello({a: '1st param', b: '2nd param'});
