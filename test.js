const assert = require('assert');
const mean = require('./index')

assert.strictEqual(mean([1,2,3,4]), 2.5,'Average of 1,2,3,4 does not equal 2.5')

assert.strictEqual(mean([1.1,2.3,3.1,4]), 2.5,'Average is of 1.1,2.3,3.1,4 does not equal 2.5')

