import *  as aws from 'aws-sdk';
import {DbProviderInterface} from '../dals.inrefaces';
import {DYNAMO_DB_TEST_CLIENT_CONFIGURATION} from '../../shared.consts';
import {DocumentClient} from 'aws-sdk/lib/dynamodb/document_client';
import {MAIN_TABLE_NAME, PARSING_SECONDARY_KEY_VALUE, PARTITION_KEY_NAME, SECONDARY_KEY_NAME} from './dynamo-db.consts';
import {ParsingOutcomeInterface} from '../../../parsing/parsing.interfaces';

let db = new aws.DynamoDB.DocumentClient({
    region: 'us-east-1'
});


export const dynamoDB: DbProviderInterface = {
    
    /**
     * Save given parsed data only if not exist
     * @param data: array of parsed data to save
     */
    saveParsedOutcomeData: async (data: ParsingOutcomeInterface[]) => {
        const params = buildParsedCreateParamsObj(data);
        const resp   = await db.batchWrite(params).promise();
        return resp;
        
    },
    
    
    setTestDB  : () => {
        db = new aws.DynamoDB.DocumentClient(DYNAMO_DB_TEST_CLIENT_CONFIGURATION);
    },
    /**
     * Replacing current dynamo client configuration (for testing mode) with empty config
     * e.g - Can be replaced with 'localhost' dynamoDB
     */
    unsetTestDB: () => {
        db = new aws.DynamoDB.DocumentClient();
    }
};


/**
 * Helper function to build 'POST' operation params object
 * @param data - array of data to store
 */
function buildParsedCreateParamsObj(data: ParsingOutcomeInterface[]): DocumentClient.BatchWriteItemInput {
    const params: DocumentClient.BatchWriteItemInput = {
        RequestItems: {
            [MAIN_TABLE_NAME]: [
                {
                    PutRequest: {
                        Item: data
                    }
                }
            ],
        }
    };
    
    for (const item of data) {
        item[PARTITION_KEY_NAME] = item.url;
        item[SECONDARY_KEY_NAME] = PARSING_SECONDARY_KEY_VALUE;
        params.RequestItems[MAIN_TABLE_NAME].push({
            PutRequest: {
                Item: item
            }
        })
    }
    
    return params
}






