import {APIGatewayProxyHandler} from 'aws-lambda';


import 'source-map-support/register';
import {HttpResponseService} from '../../shared/services/http-response/http-response.service';


/**
 * Getting bactch of messages from Sqs and parse the data
 * @param event
 * @param _context
 * @return: List of UserModelInterface
 */
// @ts-ignore
export const handleParsingQueueMessages: APIGatewayProxyHandler = async (event, _context) => {
    try {
        
        console.log(event)
        
    } catch (e) {
        return HttpResponseService.error(e);
    }
};
