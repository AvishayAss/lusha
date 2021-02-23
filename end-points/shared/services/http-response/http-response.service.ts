/**
 * HttpResponseService: Provides structure for HTTP responses structure
 */
import {ErrorResponseInterface, ServerResponseInterface, SuccessResponseInterface} from './http-response.interfaces';
import {eHttpServerErrorCodes, eHttpSuccessCodes, eSuccessResponseMessages} from './enums';
import {ErrorCodeMessagesDict} from './http-response.dictionaries';

export const HttpResponseService = {
    /**
     * Return success response
     * @param data
     * @param message
     * @param statusCode
     */
    success: ({
                  data,
                  message = eSuccessResponseMessages.Ok,
                  statusCode = eHttpSuccessCodes.Ok,
              }: SuccessResponseInterface)
        : ServerResponseInterface => {
        
        const body = JSON.stringify({
            data,
            message,
            statusCode,
        }, null, 2);
        
        return {
            statusCode,
            body,
        };
    },
    
    /**
     * Return error response
     * @param message
     * @param statusCode
     */
    error: ({
                message,
                statusCode = eHttpServerErrorCodes.InternalServerError,
            }: ErrorResponseInterface)
        : ServerResponseInterface => {
        
        const body = JSON.stringify({
            message: message ? message : ErrorCodeMessagesDict[statusCode],
            statusCode,
        }, null, 2);
        
        console.error(`${message} || ${statusCode}`);
        
        return {
            statusCode,
            body,
        };
    },
};

