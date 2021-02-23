/**
 * Converter Service : In Charge of converting shared data types
 **/

export default {
    
    /**
     * Parsing Http request event to valid JS Object format
     * @param event: any - Http Request event
     * @return parsed body of Http Request
     */
    parseReqBody: (event: any): any => {
        return JSON.parse(event.body) as any;
    }
}
