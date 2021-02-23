import {MainDalInterface} from '../../shared/dals/dals.inrefaces';
import {ParsingOutcomeInterface, ParsingResponseInterface} from '../parsing.interfaces';
import {
    DUMMY_HTML_STRING,
    DUMMY_URLS,
    FIRST_DEPTH,
    MAX_LINKS_RECURSION_DEPTH,
    MAX_NUM_OF_LINKS
} from '../parsing.consts';

/**
 * Parsing Outcome Service
 * Handle outcome 'parsed' messages from 'Parsing Income Service'
 * @param dal : Data access layer to connect with
 */
export default (dal: MainDalInterface) => ({
    
    
    /**
     * Parsing HTML as text from given url
     * @param url: url to parse
     */
    parse: (url: string): ParsingOutcomeInterface[] => {
        return recursiveParse(url, [], FIRST_DEPTH)
    },
    
    /**
     * Add new parsed scraping data to DB
     * @param data: user data to add
     */
    saveParsedOutcomeData: async (data: ParsingOutcomeInterface[]): Promise<ParsingResponseInterface> => {
        return await dal.db.saveParsedOutcomeData(data);
    },
})

/**
 * Helper function:
 * Recursive function that parsing url & it's sub urls
 * @param url: url to parse
 * @param currentData: array of already parsed data
 * @param depth: recursion depth
 */
function recursiveParse(url: string, currentData: ParsingOutcomeInterface[], depth: number): ParsingOutcomeInterface[] {
    if (depth === MAX_LINKS_RECURSION_DEPTH) {
        return currentData;
    }
    const parsed = getDummyScrapingData(url);
    currentData.push(parsed);
    for (const link of parsed.links) {
        currentData = [...currentData, ...recursiveParse(link, currentData, depth++)];
    }
}


/**
 * Helper function:
 * Getting dummy data of 'scraping' operation
 * @param url: url to parse
 */
function getDummyScrapingData(url: string): ParsingOutcomeInterface {
    const end = Math.random() * MAX_NUM_OF_LINKS;
    return {
        url  : url,
        html : DUMMY_HTML_STRING,
        links: DUMMY_URLS.slice(0, end),
    }
}






