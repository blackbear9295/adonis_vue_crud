'use strict'

const { resource } = require('@adonisjs/framework/src/Route/Manager')
const { LogicalException } = require('@adonisjs/generic-exceptions')

class InvalidAccessException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    return response.status(403).json({
      message:'Invalid access to resources',
    });
  }
}

module.exports = InvalidAccessException
