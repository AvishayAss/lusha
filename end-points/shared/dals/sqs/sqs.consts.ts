/** Aws account ID */
export const AWS_ACCOUNT = process.env.ACCOUNT_ID;

/** Parsing SQS name */
export const PARSING_QUEUE_NAME = process.env.PARSING_QUEUE_NAME;

/** Parsing SQS url */
export const PARSING_QUEUE_URL = `https://sqs.us-east-1.amazonaws.com/${AWS_ACCOUNT}/${PARSING_QUEUE_NAME}`;
