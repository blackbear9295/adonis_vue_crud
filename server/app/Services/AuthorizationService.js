const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException');

class AuthorizationService {
    verifyPermission(resource, user) {
        if (!resource) {
            throw new ResourceNotExistException(); // Resource not exist
        }

        if (resource.user_id !== user.id) {
            throw new InvalidAccessException(); // Invaild Access
        }
    }
}

module.exports = new AuthorizationService();