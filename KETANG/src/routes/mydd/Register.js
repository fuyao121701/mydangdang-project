import React from "react";
import {connect} from "react-redux";
import NavTop from "../../component/NavTop";
import NavHeader from '../../component/NavHeader'
import NormalLoginForm from "../../routes/mydd/NormalLoginForm";
import  WrappedDynamicFieldSet from "../../routes/mydd/Rrgis";
import {Icon} from "antd";
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "注册"
        }
    }


    render() {
        return <div>
            <NavHeader title={this.state.title}/>
            <div className="register">
                <div className="login2">
                    <WrappedDynamicFieldSet></WrappedDynamicFieldSet>
                </div>


                </div>

        </div>
    }

}
export  default  connect()(Register)