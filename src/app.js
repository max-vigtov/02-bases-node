const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Esto algo malo') 