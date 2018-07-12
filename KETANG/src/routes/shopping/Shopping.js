import React,{Component} from 'react';
import {connect} from 'react-redux'
import NavTop from '../../component/NavTop'
import {Checkbox, Icon,InputNumber,BackTop,Radio} from 'antd'
import action from '../../store/action'
import List from '../../component/List'
import {removeShopCart} from "../../api/course";
import {Link} from 'react-router-dom'

let img=require('../../static/images/dangdang.png');
class Shopping extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '购物车',
            compile:false,
            money:0.00,
        }
    }
    componentDidMount(){

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
                                                    <div style={{float:'left',marginTop:'.4rem'}}
                                                         onClick={this.sum}
                                                    >
                                                        <InputNumber
                                                            size="large" min={1}
                                                            defaultValue={1}
                                                            style={{width:'2.5rem'}}

                                                        />
                                                        <div><Icon
                                                            type="delete"
                                                            style={{fontSize:'.43rem',float:'right',marginTop:'.5rem'}}
                                                            onClick={this.handleRemove}
                                                        /></div>
                                                    </div>
                                                    <div
                                                        style={{float:'right',backgroundColor:'#f0f0f0',padding:'1rem .35rem',fontSize:'.3rem'}} onClick={()=>{this.setState({compile:false})}}
                                                    >完成</div>
                                                </div>)
                                        }
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
            if(item.check){
                selectIDList.push(item.id);
            }
        })
        if(selectIDList.length==0){
            alert("没有要删除的内容");
            return
        }
        selectIDList = selectIDList.map(courseID=>{
            return removeShopCart(courseID);
        })
        Promise.all(selectIDList).then(()=>{
            this.props.queryUnpay();
        })
    }
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
                  a = price*count;
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
                    a = (price*count).toFixed(2);
                    this.setState({
                        money:a,
                    })
                }
            })


        }

    }
}
export default connect(state => ({...state.list}), action.list)(Shopping)