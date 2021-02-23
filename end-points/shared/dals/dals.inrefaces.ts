import {ParsingIncomeInterface, ParsingOutcomeInterface} from '../../parsing/parsing.interfaces';

export interface MainDalInterface {
    db: DbProviderInterface
    queue: QueueProviderInterface
}

export interface DbProviderInterface {
    
    /**
     * Save new parsed outcome data to DB
     * @param data: ParsingOutcomeInterface[]
     */
    saveParsedOutcomeData: (data: ParsingOutcomeInterface[]) => Promise<any>;
    
    /**
     * (Optional) Method for support test mode - setting DB test as main DB
     */
    setTestDB?: () => void;
    
    /**
     * (Optional) Method for support test mode - unsetting DB test as main DB
     */
    unsetTestDB?: () => void;
}


export interface QueueProviderInterface {
    
    /**
     * Sending message containing url to Queue
     * @param message: message to send
     */
    sendParsingMessage: (message: ParsingIncomeInterface) => Promise<any>;
}
