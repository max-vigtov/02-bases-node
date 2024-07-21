import { getPokemonById } from "./js-foundation/06-promises";
import { buildLogger } from "./plugins/logger.plugin";

const logger = buildLogger('app.js');

getPokemonById(1);