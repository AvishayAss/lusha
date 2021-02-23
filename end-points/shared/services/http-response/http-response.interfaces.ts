import {HttpHeaders} from 'aws-sdk/clients/iot';

export interface SuccessResponseInterface {
    data: any;
    message?: string;
    statusCode?: number;
}

export interface ErrorResponseInterface {
    message?: string;
    statusCode?: number;
}


export interface ServerResponseInterface {
    statusCode: number;
    body: string;
    headers?: HttpHeaders
    
}

export type ServerResponseType = SuccessResponseInterface | ErrorResponseInterface;
