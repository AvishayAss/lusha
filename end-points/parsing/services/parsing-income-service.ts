import {MainDalInterface} from '../../shared/dals/dals.inrefaces';
import {ParsingIncomeInterface} from '../parsing.interfaces';

export default (dal: MainDalInterface) => ({
    
    /**
     * Handler for income url message
     * Passing message data to the queue
     * @param message
     */
    handleIncomeUrl: async (message: ParsingIncomeInterface): Promise<any> => {
        return await dal.queue.sendParsingMessage(message);
    },
    
})






