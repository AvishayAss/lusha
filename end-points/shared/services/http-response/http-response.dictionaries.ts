import {eErrorResponseMessages, eHttpClientErrorCodes, eHttpServerErrorCodes} from './enums';

export const ErrorCodeMessagesDict = {
    [eHttpClientErrorCodes.NotFound]     : eErrorResponseMessages.NotFound,
    [eHttpClientErrorCodes.BadRequest]   : eErrorResponseMessages.BadRequest,
    [eHttpClientErrorCodes.NotAcceptable]: eErrorResponseMessages.NotAcceptable,
    [eHttpClientErrorCodes.Unauthorized] : eErrorResponseMessages.Unauthorized,
    
    
    [eHttpServerErrorCodes.InternalServerError]: eErrorResponseMessages.InternalServerError,
}
