import * as TYPE from '../action-types'
let INIT_STATE={
        baseInfo:null,
};
export default function personal(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    let payload={};
    switch (action.type){
        case TYPE.PERSON_QUERY_BASE:
            payload=action.payload;
            parseFloat(payload.code)===0?state.baseInfo=payload.data:null;
            break
    }
    return state
}