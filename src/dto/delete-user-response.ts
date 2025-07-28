export interface DeleteUserResponse {
    /**
     * ok = the user was deleted successfully
     * partiallyDeleted = some data was not deleted (e.g., if the user had associated) but doesn't require further action
     * error = an error occurred during the deletion process that needs to be fixed
     */
    responseCode: "ok" | "partiallyDeleted" | "error";
}