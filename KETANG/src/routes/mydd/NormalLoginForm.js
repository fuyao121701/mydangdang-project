import { Form, Icon, Input, Button, Checkbox,Modal } from 'antd';
import {connect} from "react-redux";
 import React from "react";
 import ReactDOM from "react-dom";
 import md5 from "blueimp-md5";
 import {NavLink,Link,withRouter} from "react-router-dom"
 import {login} from "../../api/person";
 import  action from "../../store/action";
const FormItem = Form.Item;
function loginFail() {
    const modal = Modal.error({
        title: '登录失败',
        content: '请稍后重新尝试',
    });
}
 class NormalLoginForm extends React.Component {
    constructor(props,context){
         super(props,context);

     }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {

                let {userName,password}=values;
                password=md5(password);
                let result=await login({
                    name:userName,
                    password:password
                });
                console.log(password);
                if(parseFloat(result.code)===0){
                    console.log(this.props.queryBaseInfo);
                     // this.props.queryBaseInfo();
                    //登录成功后重新获取已购买的信息，存储到redux中(this.props.queryPay();)
                    //  this.props.queryPay();
                    this.props.history.push("/mydangdang");
                    return
                }
                loginFail()
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号/邮箱/昵称" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <Button type="" htmlType="submit" className="login-form-button" style={{fontSize:".4rem"}}>
                   登录
                </Button>
                <div>
                    <a className="login-form-forgot" href="">找回密码</a>

                    <NavLink to="/mydangdang/register">
                        <Icon type="arrow-right" />
                        注册</NavLink>
                </div>
            </Form>
        );
    }
}

let WrappedNormalLoginForm =withRouter(Form.create(null,{...action.person,...action.list})(NormalLoginForm));
export default WrappedNormalLoginForm;

