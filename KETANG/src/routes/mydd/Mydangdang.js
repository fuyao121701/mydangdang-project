import React,{Component} from 'react';
import {connect} from 'react-redux';
import NavTop from '../../component/NavTop'
import NavHeader from '../../component/NavHeader'
import {withRouter, NavLink,Link} from 'react-router-dom';
import {Icon,Button} from 'antd';
import Mydd_child  from "../../routes/mydd/Mydd_child";
import "../../static/css/mydangdang.less"

import {route} from "react-router-dom";
let img = require("../../static/images/user.png");

class Mydangdang extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            title:'我的当当',
            img1:"http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png",
            name1:"会员中心"
        }


    }

    render(){
        return (
            <div>
                <NavHeader title={this.state.title}/>
                 <main className='allBox'>
                    <div>
                        <div className="heard" >
                            <div style={{marginTop:".8rem",width:"2.5rem",height:".8rem",lineHeight:".8rem",position:"absolute",border:"1px solid #fff",borderRadius:".4rem",fontSize:".4rem",textAlign:"center",marginLeft:"2.3rem",}}>
                                <NavLink to="/mydangdang/login" style={{color:"#FFF"}}>登录/</NavLink>
                                <NavLink to="/mydangdang/register" style={{color:"#FFF"}}>注册</NavLink>
                            </div>
                        </div>
                        <div className="heade-nav">
                             <NavLink to='/home'>
                                 <div className="div1">
                                     <p>0</p>
                                     <span>收藏的商品</span>
                                 </div>
                            </NavLink>
                            <NavLink to='/classify'>
                                <div>
                                    <p>0</p>
                                    <span>关注的店铺</span>
                                </div>
                            </NavLink>
                            <NavLink to='/login'>
                                <div>
                                    <p>0</p>
                                    <span>我的足迹</span>
                                </div>
                            </NavLink>
                        </div>
                        <div className="indent">
                            <div className="indent_1">
                                <a href="">
                                <div className="indent_img">
                                    <img src="http://img63.ddimg.cn/upload_img/00487/11111/wd-012-1.png" alt=""/>
                                </div>
                                我的订单

                                    <span>查看全部购买商品</span>

                                </a>
                            </div>

                            <nav>
                                <div className="heade-nav1">
                                    <NavLink to='/home'>
                                        <Icon type="red-envelope" />
                                        <span>待付款</span>
                                    </NavLink>
                                    <NavLink to='/classify'>
                                        <Icon type="bars"/>
                                        <span>待收货</span>
                                    </NavLink>
                                    <NavLink to='/shopping'>
                                        <Icon type="shopping-cart" />
                                        <span>退换货</span>
                                    </NavLink>
                                </div>
                            </nav>


                            <div className="bg">
                                <div className="indent_1">

                                <a href="">
                                    <div className="indent_img">
                                        <img src="http://img61.ddimg.cn/upload_img/00528/000/vip-1521514865.png" alt=""/>
                                    </div>
                                    会员中心
                                    <Icon type="right" />

                                </a>
                            </div></div>
                            <Mydd_child> </Mydd_child>
                            <div className="bg">
                                <div className="indent_1">

                                    <a href="">
                                        <div className="indent_img">
                                            <img src="http://img62.ddimg.cn/upload_img/00626/sxt03/LOGO-1530603069.jpg" alt=""/>
                                        </div>
                                        得力文具超级品牌日满100减50
                                        <Icon type="right" />

                                    </a>
                                </div>
                                <div className="indent_1">

                                    <a href="">
                                        <div className="indent_img">
                                            <img src="http://img61.ddimg.cn/upload_img/00705/yhj/wzl-jian-4.11.jpg" alt=""/>
                                        </div>
                                        悠悠夏日，读书正好，30万图书，每满100减40
                                        <Icon type="right" />

                                    </a>
                                </div>
                                <div className="indent_1">

                                    <a href="">
                                        <div className="indent_img">
                                            <img src="http://img60.ddimg.cn/upload_img/00451/zr/161216-yundong-12.jpg" alt=""/>
                                        </div>
                                        探路者童装清仓，每满100减50
                                        <Icon type="right" />

                                    </a>
                                </div>
                                <div className="indent_1">

                                    <a href="">
                                        <div className="indent_img">
                                            <img src="http://img61.ddimg.cn/upload_img/00705/yhj/wzl-jian-4.11.jpg" alt=""/>
                                        </div>
                                        暑假阅读，中小学辅导，满99减50
                                        <Icon type="right" />

                                    </a>
                                </div>
                                <div className="indent_1">

                                    <a href="">
                                        <div className="indent_img">
                                            <img src="http://img60.ddimg.cn/upload_img/00451/zr/161216-yundong-12.jpg" alt=""/>
                                        </div>
                                        欧莱雅清凉一夏，限时抢仍有折上折
                                        <Icon type="right" />

                                    </a>
                                </div>
                            </div>


                            <div className="indent_1">
                                <a href="">
                                    <div className="indent_img">
                                        <img src="http://img60.ddimg.cn/upload_img/00487/11111/wd-012-07.png" alt=""/>
                                    </div>
                                    客服反馈
                                    <Icon type="right" />
                                </a>
                            </div>

                            <div className="indent_1" style={{height:"1rem"}}>
                                <a href="">
                                    <div className="indent_img">
                                        <img src="http://img62.ddimg.cn/upload_img/00626/sxt03/LOGO-1530603069.jpg" alt=""/>
                                    </div>
                                    得力文具超级品牌日满100减50
                                    <Icon type="right" />

                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
export default withRouter(connect()(Mydangdang))