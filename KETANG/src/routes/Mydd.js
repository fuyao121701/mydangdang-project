import React from 'react';
import {connect} from 'react-redux'
import {Switch,Route,Redirect} from 'react-router-dom'

import {checkLogin} from '../api/person'
import Mydangdang from "../routes/mydd/Mydangdang";
import MydangdangUser  from "./mydd/MydangdangUser";
import Login from "./mydd/Login";
import Register from "./mydd/Register";

class Person extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            isLogin:false,
            h:false,
        }
    }
    //验证是否登录
    async componentWillMount(){
        console.log(3);
        let result=await checkLogin(),
            isLogin=parseFloat(result.code)===0?true:false;
        console.log(isLogin);
        this.setState({isLogin})
    }
   //路由切换重新验证是否登录

    async componentWillReceiveProps() {
        console.log(2);
        let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
        console.log(isLogin);
        this.setState({isLogin,h:!this.state.h});
    }
    render(){
        console.log(1);
        return <section>
            <Switch>
                <Route path="/mydangdang/mydangdangUser" render={()=>{
                    if(this.state.isLogin) return <MydangdangUser/> ; return <Mydangdang/>;
                }}/>

                <Route path="/mydangdang/login" component={Login}/>
                <Route path="/mydangdang/register" component={Register}/>
                <Redirect from="/mydangdang" to="/mydangdang/mydangdangUser"/>

            </Switch>
        </section>
    }
}
export default connect()(Person);