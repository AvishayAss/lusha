/** String format to represent timestamps*/
export const TIMESTAMPS_FORMAT                   = 'DD-MM-YYYY, HH:mm:ss';
/** Primary key name for all entities*/
export const ENTITY_IDENTIFIER_KEY: string       = 'PK';
/** Dynamo DB local configuration **/
export const DYNAMO_DB_TEST_CLIENT_CONFIGURATION = {
    region         : 'localhost',
    endpoint       : 'http://localhost:8000',
    accessKeyId    : 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
    secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
};

/** Entity status property name */
export const ENTITY_STATUS_KEY = 'entity_status';
