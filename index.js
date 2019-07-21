const math = require('@useless-javascript-modules/math')
const sum = require('@useless-javascript-modules/sum')

module.exports = function mean(terms){
    return  math('divide',sum(terms),terms.length)
}
