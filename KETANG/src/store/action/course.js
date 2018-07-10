import * as TYPES from '../action-types';
import {queryBanner, queryList,addShopCart,queryShopCart} from '../../api/course';

let course = {
    queryBanner() {
        return async dispatch => {
            let bannerData = await queryBanner();
            dispatch({
                type: TYPES.COURSE_QUERY_BANNER,
                bannerData
            });
        }
    },
    queryList(payload = {}) {
        let {limit = 10, page = 1, type = 'all', flag = 'push'} = payload;
        return async dispatch => {
            let result = await queryList({
                limit,
                page,
                type
            });
            dispatch({
                type: TYPES.COURSE_QUERY_LIST,
                result,
                flag,
                courseType: type
            });
        }
    },
    queryUnpay(){
        return async dispatch=>{
            let result=await queryShopCart(0);
            dispatch({type:TYPES.COURSE_UNPAY,result})
        }
    },
    handleSelect(mode){
        //mode:all全选/全不选 id:
        return {
            type:TYPES.COURSE_HANDLE,
            mode
        }
    }

};
export default course;