import {dynamoDB} from './dynamo-db/dynmao-db.dal';
import {EnvironmentEnum} from '../shared.enums';
import {awsSqs} from './sqs/sqs.dal';

if(process.env.CURRENT_ENV == EnvironmentEnum.Local){
    dynamoDB.setTestDB();
}

export default {
    db: dynamoDB,
    queue: awsSqs
}
