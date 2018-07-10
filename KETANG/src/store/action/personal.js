import * as TYPE from '../action-types'
import {queryInfo} from '../../api/person'



let personal={
    queryBaseInfo(){
        return {
            type:TYPE.PERSON_QUERY_BASE,
            payload:queryInfo()
        }
    }
};
export default personal