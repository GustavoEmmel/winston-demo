const logger = require('./logger');

logger.info('text info', {meta1: 'meta1'});
logger.warn('text warn');
logger.error('text error');
logger.debug('text debug');
logger.error(new Error('something went wrong'));

// console.log('hello');
// console.info('info');
// console.warn('warn');
// console.error('error');
// console.error(new Error('throw error'));