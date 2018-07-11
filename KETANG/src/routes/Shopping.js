import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../component/NavTop'
import {Checkbox, Icon,InputNumber} from 'antd'
import action from '../store/action'
import '../static/css/shopping.less'
import List from '../component/List'
import {Link} from 'react-router-dom';
import {removeShopCart,payShopCart}  from "../api/course";

let img=require('../static/images/dangdang.png');
let img1=require('../static/images/img.jpg');
class Shopping extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '购物车',
            compile:false
        }
    }

    handleBit=()=>{
        if (this.state.compile) return;
        this.setState({compile:true})
    };
    render(){
        return (
            <div>
                <NavTop title={this.state.title}/>
                <main className='allBox'>
                    <div className='shop_main'>
                        <div className='shop_title'>
                            <div className='shop_input'>
                                {/*<Checkbox onChange={this.props.handleSelect.bind(this,"all")} checked={this.props.selectAll}></Checkbox>*/}
                                <Checkbox checked={this.props.selectAll} onChange={this.props.handleSelect.bind(this,"all")}/>
                                <div className='shopIcon'>

                                    <em></em>
                                    <span>当当网</span></div>
                            </div>
                            <div className='shop_Right'>
                                合计<em style={{fontStyle: 'normal', marginLeft: '.07rem'}}>0.00</em>
                                <span className='accounts'>结算</span>
                            </div>
                        </div>
                        <ul className='shop_ul'>
                            {
                                this.props.shopCart.unpay.map((item,index)=>{
                                    let {pic,name,price,pricing,id,pcs,check} = item;
                                    return   <li className='shop_li' key={index}>
                                        <Checkbox onChange={this.props.handleSelect.bind(this,id)} checked={check}></Checkbox>
                                        <Link to={{
                                            pathname: `/shopping/details`,
                                            search: `?courseId=${id}`
                                        }}>
                                            <img src={pic} alt=""
                                                 style={{display: 'inline-block',width:'2rem',height:'2rem'}}
                                                 className='shop_img'/>
                                        </Link>
                                        {
                                            !this.state.compile?(<div className='shop_price'>
                                                <Link to={{
                                                    pathname: `/shopping/details`,
                                                    search: `?courseId=${id}`
                                                }}>
                                                    <p>{name}</p>
                                                </Link>
                                                <span style={{color: '#ff2832'}}>{price}</span>
                                                <span
                                                    style={{textDecoration: 'line-through',color: '#b8b8b8'}}
                                                    className='shop_pic'>{pricing}</span>
                                                <div style={{marginBottom:'.2rem'}}>
                                                    <span>X{pcs}</span>
                                                    <Icon type="edit"
                                                          onClick={this.handleBit}
                                                          style={{fontSize:'.4rem'}}/></div>
                                            </div>)
                                                :(<div style={{width:'100%'}}>
                                                <div style={{float:'left',marginTop:'.4rem'}}>
                                                    <InputNumber
                                                        size="large" min={1}
                                                        defaultValue={1}
                                                        style={{width:'2.5rem'}}/>
                                                    <div><Icon
                                                        type="delete"
                                                        style={{fontSize:'.43rem',float:'right',marginTop:'.5rem'}}/></div>
                                                </div>
                                                <div
                                                    style={{float:'right',backgroundColor:'#f0f0f0',padding:'1rem .35rem',fontSize:'.3rem'}} onClick={()=>{this.setState({compile:false})}}
                                                >完成</div>
                                            </div>)
                                        }
                                    </li>

                                })
                            }

                        </ul>
                    </div>
                    <div className='shop_centre'>
                        <Icon type="check-circle" style={{color: 'red'}}/>
                        <span>根据您的偏好猜您可能喜欢</span>
                    </div>
                    <List/>
                </main>
            </div>
        )
    }
    handleRemove = () =>{


    }
}
export default connect(state => ({...state.list}), action.list)(Shopping)