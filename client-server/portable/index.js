"use strict";

module.exports = {
    validateId
};

const ID_PREFIX = "__ID_";

function validateId () {
    return typeof id == 'string' && id.indexOf(ID_PREFIX) === 0;
}