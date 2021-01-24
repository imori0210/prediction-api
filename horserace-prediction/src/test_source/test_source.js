const test = function() {
  console.log('test func');
  return;
}
const a = function() {
  console.log('a');
} 

module.exports = {'testFunc': test, 'a': a};

