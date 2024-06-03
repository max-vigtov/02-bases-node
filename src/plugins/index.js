const {getUUID} = require('../plugins/gte-id.pluging');
const {getAge} = require('../plugins/get-age.plugin');
const { http } = require('../plugins/http-client.plugin');

module.exports = {
    getAge,
    getUUID,
    http
}