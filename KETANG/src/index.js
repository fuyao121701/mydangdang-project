/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

/*REDUX STORE*/
import {Provider} from 'react-redux';
import store from './store/index';

/*ANTD*/
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*IMPORT CSS*/
import './static/css/reset.min.css';
import './static/css/common.less';


import NavBottom from './component/NavBottom'
import Home from "./routes/Home";
import Classify from "./routes/Classify";


import Mydd from "./routes/Mydd"

import Shopping_one from "./routes/Shopping_one";

/*RENDER*/
render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/classify' component={Classify}/>

                    <Route path='/mydangdang' component={Mydd}/>


                    <Route path='/shopping' component={Shopping_one}/>

                    <Redirect to='/home'/>
                </Switch>
                <NavBottom/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);