
import React from "react";
import ReactDOM from "react-dom";
import {withRouter} from "react-router-dom";
import { Form, Input, Icon, Button,DatePicker, Col, Modal,TimePicker, Select, Cascader, InputNumber } from 'antd';
import  Random from "./Random";
import md5 from "blueimp-md5";
import "../../static/css/mydangdang.less";
import {register} from "../../api/person"
let uuid = 0;
const FormItem = Form.Item;
// const FormItem = Form.Item;
const Option = Select.Option;
function registerFail() {
    const modal = Modal.error({
        title: '注册失败',
        content: '请稍后重新尝试',
    });
}
class DynamicFieldSet extends React.Component {
    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        uuid++;
        form.setFieldsValue({
            keys: nextKeys,
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log(values);
                let {userName,password}=values;
                password=md5(password);
                let result = await register({
                    name:userName,
                    password:password
                })
                if(parseFloat(result.code)==0){
                    console.log(20);
                    this.props.history.push("/mydangdang");
                    return ;

                }
                console.log(21);
                registerFail();
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldValue} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');

        const formItems = keys.map((k, index) => {
            return (
                <FormItem
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    required={false}
                    key={k}
                >
                    {getFieldDecorator(`names[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: "请输入正确的验证码",
                        }],
                    })(
                        <div style={{marginBottom:"0",height:"1rem"}}>
                            <Input placeholder="请输入图形验证码" style={{ width: '40%',height:".9rem" ,marginBottom: 0 }} />
                            <div style={{position:"relative",top:"-.9rem",left:"4rem",width:"2.4rem",height:".9rem",background:"#8888",borderRadius:"3px",textAlign:"center",lineHeight:".9rem"}}>
                                <Random/>
                            </div>
                        </div>
                    )}
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                        />
                    ) : null}
                </FormItem>
            );
        });
        return (
            <Form onSubmit={this.handleSubmit} className="ant-from1" >
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', position:"absolute",top:"-.1rem",marginBottom:0,}} />} placeholder="手机号/邮箱/昵称" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)',position:"absolute",top:"-.1rem" }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>

                {formItems}
                <FormItem {...formItemLayoutWithOutLabel} >
                    <Button type=""  htmlType="submit" onClick={uuid !==1?this.add:null} style={{marginLeft:0}}>下一步</Button>
                </FormItem>
                <div className="safe">
                    <p style={{marginLeft:"20px",marginTop:"-20px"}}> 注册即表示您同意《<a href="">当当交易条款</a>》和《 <a href="">当当社区条款</a>》 </p>
                </div>
                <div className="support">
                    <ul>
                        <li>
                            <Icon type="check-circle-o" />
                            7天无理由退货
                        </li>

                        <li>
                            <Icon type="check-circle-o" />
                            支持货到付款
                        </li>
                        <li>
                            <Icon type="check-circle-o" />
                            100%正品
                        </li>
                    </ul>
                </div>
            </Form>
        );
    }
}

const WrappedDynamicFieldSet = withRouter(Form.create()(DynamicFieldSet));
export default WrappedDynamicFieldSet ;
