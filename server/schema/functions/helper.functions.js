const _ = require('lodash');

const resolveCollection = (id, collection) => _.find(collection, {id});

module.exports = { resolveCollection };