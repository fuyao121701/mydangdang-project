import {combineReducers} from 'redux';
import list from './list'
import Home  from './Home'
import Classify from './Classify';

import person from "./personal";

let reducer =combineReducers ( {
    Home,
    list,
    Classify,
    person,
});
export default reducer;