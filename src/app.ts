import { buildLogger } from "./plugins/logger.plugin";

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Esto algo malo') 

