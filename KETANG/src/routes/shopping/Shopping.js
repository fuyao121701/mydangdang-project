import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../../component/NavTop'
import {Checkbox, Icon,InputNumber,BackTop} from 'antd'
import action from '../../store/action'
import List from '../../component/List'
import {removeShopCart} from '../../api/course'
import {Link} from 'react-router-dom'

let img=require('../../static/images/dangdang.png');
class Shopping extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '购物车',
            money:0.00,
        }
    }
    render(){
        return (
            <div>
                <NavTop title={this.state.title}/>
                <main className='allBox'>
                    <div  style={{paddingBottom:'1rem'}}>
                        <BackTop/>
                        <div className='shop_main'>
                            <div className='shop_title'>
                                <div className='shop_input'>
                                    <Checkbox checked={this.props.selectAll} onChange={this.props.handleSelect.bind(this,'all')}></Checkbox>
                                    <div className='shopIcon'>
                                        <em></em>
                                        <span>当当网</span></div>
                                </div>
                                <div className='shop_Right'>
                                    合计<em style={{fontStyle: 'normal', marginLeft: '.07rem'}}>{this.state.money}￥</em>
                                    <span className='accounts'>结算</span>
                                </div>
                            </div>
                            <ul className='shop_ul'>
                                {this.props.shopCart.unpay.map((item,index)=>{
                                    let {pic,name,price,pricing,id,pcs,check}=item;
                                    return <li className='shop_li' key={index}>
                                        <Checkbox onChange={this.props.handleSelect.bind(this,id)} checked={check} onClick={this.sum}></Checkbox>
                                        <Link to={{
                                            pathname: `/shopping/details`,
                                            search: `?courseId=${id}`
                                        }}>
                                            <img src={pic} alt=""
                                                 style={{display: 'inline-block',width:'2rem',height:'2rem'}}
                                                 className='shop_img'/>
                                        </Link>
                                        <div className='shop_price'>
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
                                            <div style={{marginBottom:'.2rem'}} onClick={this.sum}>
                                                <InputNumber size="small" min={1} defaultValue={1} onChange={this.handleTotal}/>
                                                <Icon
                                                    type="delete"
                                                    style={{fontSize:'.43rem',float:'right',marginRight:'.1rem'}}
                                                    onClick={this.handleRemove}/></div>
                                        </div>
                                    </li>
                                })}

                            </ul>
                        </div>
                        <div className='shop_centre'>
                            <Icon type="check-circle" style={{color: 'red'}}/>
                            <span>根据您的偏好猜您可能喜欢</span>
                        </div>
                        <List/>
                    </div>
                </main>
            </div>
        )
    }
    handleRemove=()=>{
        let selectIDList = [];
        this.props.shopCart.unpay.forEach((item)=>{
            selectIDList.push(item.id);
        });
        selectIDList = selectIDList.map(courseID=>{
            return removeShopCart(courseID);
        });
        Promise.all(selectIDList).then(()=>{
            this.props.queryUnpay();
        })
    };

    sum=(e)=>{

        var target = e.target,
            tarName = target.tagName,
            tarClass = target.className;
        let a = 0;

        if(tarClass == "ant-input-number-handler-up-inner"){
            this.props.shopCart.unpay.forEach((item,index)=>{
                if(item.check){
                    let  price =item.price.substr(1);
                    let count = parseFloat(document.getElementsByClassName("ant-input-number-input")[index].value);
                   a += parseFloat((price*count).toFixed(2));
                    // a= parseFloat(a)
                    this.setState({
                        money:a,
                    })
                }
            })


        }
        else if(tarClass == "ant-input-number-handler-down-inner"){

            this.props.shopCart.unpay.forEach((item,index)=>{
                if(item.check){
                        let  price =item.price.substr(1);
                        let count = parseFloat(document.getElementsByClassName("ant-input-number-input")[index].value);
                        a += parseFloat((price*count).toFixed(2));
                        this.setState({
                            money:a,
                        })
                }
            })


        } else if(tarClass == "ant-checkbox-input"){

            this.props.shopCart.unpay.forEach((item,index)=>{

                if(item.check){
                    let  price =item.price.substr(1);
                    let count = parseFloat(document.getElementsByClassName("ant-input-number-input")[index].value);
                    a = parseFloat((price*count).toFixed(2));
                    this.setState({
                        money:a,
                    })
                }

            })
        }

    }
}
export default connect(state => ({...state.list}), action.list)(Shopping)