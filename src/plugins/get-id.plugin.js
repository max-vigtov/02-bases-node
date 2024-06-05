const { v4: uuidv4 } = require('uuid');

const getUUID = (uuid) => {
    return uuidv4(uuid);
}

module.exports = {
    getUUID,
}