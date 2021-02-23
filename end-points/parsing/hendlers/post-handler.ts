import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {HttpResponseService} from '../../shared/services/http-response/http-response.service';
import converterService from '../../shared/services/converter/converter.service';
import mainDal from '../../shared/dals/main.dal';
import parsingIncomeService from '../services/parsing-income-service';

/**
 * Handling '/parse' endpoint
 * Parsing url to HTML text
 * Actually send the url to the queue
 * @param event
 * @param _context
 */
export const handleParseUrl: APIGatewayProxyHandler = async (event, _context) => {
    try {
        // Get request params / body
        const data = converterService.parseReqBody(event);
        // Writing data into DB
        await parsingIncomeService(mainDal).handleIncomeUrl(data);
        
        // Returns success response - Message sent to the queue
        return HttpResponseService.success({data});
        
    } catch (e) {
        return HttpResponseService.error(e);
    }
    
};
