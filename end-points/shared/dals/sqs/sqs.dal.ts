import *  as aws from 'aws-sdk';
import {SQS} from 'aws-sdk';
import {QueueProviderInterface} from '../dals.inrefaces';
import {ParsingIncomeInterface} from '../../../parsing/parsing.interfaces';
import {PARSING_QUEUE_URL} from './sqs.consts';

const sqs = new aws.SQS({
    region: 'us-east-1'
});


export const awsSqs: QueueProviderInterface = {
    
    /**
     * Sending message containing url to Queue
     * @param message: message to send
     */
    sendParsingMessage: async (message: ParsingIncomeInterface) => {
        const params: SQS.Types.SendMessageRequest = {
            MessageBody: message.url,
            QueueUrl   : PARSING_QUEUE_URL,
        }
        const resp                                 = await sqs.sendMessage(params).promise();
        return resp;
        
    }
};





