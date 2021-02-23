Lusha Assignment
=======


## Assumptions
- The Client side who makes the '/parse' API call wants to get 'OK' message immediately.
- HTML texts that already stored on DB need no update.
- To be able to work in large scales - I decided to pay the price of parsing the same data multiple times, instead of verify if it exists on DB first. because:
    1. The capacity of many DB calls at the same time is limited - can be a serious bottleneck
    2. The ability to allocate more workers to parse data if needed, giving us much more stability in very large scales 


## Deployment commands
This is a serverless based project.
To be able to deploy the project to your AWS Console do the following:
Set the following environment variables:
  ```
  AWSAccessKeyId='<YOUR_AWS_KEY_ID>'
  AWSSecretKey='<YOUR_AWS_KEY_SECRET>'
  ```

on 'serverless.yaml' file add your aws account id provider.environment.ACCOUNT_ID:
  ```
  environment:
    CURRENT_ENV: ${self:provider.stage}
    DYNAMODB_SCRAPING_TABLE: ${self:custom.scrapingTable.${self:provider.stage}}
    PARSING_SECONDARY_KEY_VALUE: DATA
    PARTITION_KEY_NAME: PK
    SECONDARY_KEY_NAME: SK
    ACCOUNT_ID: <YOUR_AWS_ACCOUNT_ID>
  ```

run the following command:
```
 npm run deploy-dev
```

1. A new DynamoDB table called 'dev-scraping' will be created
2. A new SQS called 'ParsingQueue' will be created
3. The endpoint '[POST] - https://<SOME_ID>.execute-api.us-east-1.amazonaws.com/dev/parse' will be created

To be able to debug Queue messages polling, run the following command:
```
sls logs -f handleQueueMessages -t
```


