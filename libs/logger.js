const chalk = require('chalk');
const moment = require('moment');

/**
 * Module for logging in the terminal with a timestamp
 * @param {String} content - Content of the log
 * @param {String} [type = log] - Type of log that we are going to print.
 */
exports.log = (content, type = 'log') => {
  const timestamp = `[${moment().format('MMMM Do YYYY, HH:mm:ss')}]`;
  switch (type) {
    case 'log':
      return console.log(
        `${timestamp} - ${chalk.bgCyan.black(type.toUpperCase())} ${content}`,
      );

    case 'warn':
      return console.log(
        `${timestamp} - ${chalk.bgYellow.black(type.toUpperCase())} ${content}`,
      );

    case 'error':
      return console.log(
        `${timestamp} - ${chalk.bgRed.black(type.toUpperCase())} ${content}`,
      );

    case 'cmd':
      return console.log(
        `${timestamp} - ${chalk.bgWhite.black(type.toUpperCase())} ${content}`,
      );

    case 'db':
      return console.log(
        `${timestamp} - ${chalk.bgMagenta.black(type.toUpperCase())} ${content}`,
      );

    default:
      throw new TypeError('Logger only acepts log, warn, error, db & cmd as parameters');
  }
};

/**
 * Module for showing errors in the terminal with a timestamp
 * @param {String} content - Content of the log
 * @param {String} [type = error] - Type of log that we are going to print.
 */
exports.error = (...args) => this.log(...args, 'error');

/**
 * Module for showing warnings in the terminal with a timestamp
 * @param {String} content - Content of the log
 * @param {String} [type = warn] - Type of log that we are going to print.
 */
exports.warn = (...args) => this.log(...args, 'warn');

/**
 * Module for commands in the terminal with a timestamp
 * @param {String} content - Content of the log
 * @param {String} [type = cmd] - Type of log that we are going to print.
 */
exports.cmd = (...args) => this.log(...args, 'cmd');

/**
 * Module for commands in the terminal with a timestamp
 * @param {String} content - Content of the log
 * @param {String} [type = cmd] - Type of log that we are going to print.
 */
exports.db = (...args) => this.log(...args, 'db');
