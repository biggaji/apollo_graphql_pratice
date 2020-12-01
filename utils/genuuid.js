const { v4 } = require('uuid');

exports.genuuid = async () => {
    return v4();
}