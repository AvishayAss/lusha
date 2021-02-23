/** Main table name on DB*/
export const MAIN_TABLE_NAME = process.env.DYNAMODB_SCRAPING_TABLE;

/** PK of main table */
export const PARTITION_KEY_NAME = process.env.PARTITION_KEY_NAME;

/** SK of main table */
export const SECONDARY_KEY_NAME = process.env.SECONDARY_KEY_NAME;

/** SK of main table */
export const PARSING_SECONDARY_KEY_VALUE = process.env.PARSING_SECONDARY_KEY_VALUE;
