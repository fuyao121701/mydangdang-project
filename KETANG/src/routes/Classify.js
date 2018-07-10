import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Icon,Input,Tabs} from 'antd'
import '../static/css/classify.less'
import Swiper from '../component/Swiper'
import BookShow from "../component/BookShow";
import action from "../store/action";

const TabPane = Tabs.TabPane;
class Classify extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataImg:[],
            bookList:[]
        }

    }
    componentWillMount(){

    }
    async componentDidMount(){
        this.props.queryBanner();
        this.props.queryList();
        // 获取左侧列表
        this.props.queryListName();
    }
    back = () => {
        this.props.history.goBack();
    }
    render() {
        console.log(this.props.listname);
        return <div>
            <div className="headerNavBox">
                <div className="classWrapper">
                    <Icon type="left" style={{"marginLeft":"10px"}} className="icon" onClick={this.back}/>
                     <Input  placeholder="搜索商品/店铺/种类" prefix={<Icon type='search'/>}  className='inputBox' style={{width:"70%",marginLeft:".6rem"}}  />
                    <Icon type="ellipsis" className="icon" style={{position:"fixed",right:".3rem"}}/>
                </div>
            </div>
            <main className='allBox mainContent'>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition="left"
                    style={{ height: "100%" }}
                >
                    {this.props.listname.map((item,index)=>(
                        <TabPane tab={item.name} key={index}>
                            <Swiper dataImg = {this.props.banner}/>
                            <div className="tabCarder">
                                <div>
                                    <div>
                                        <p>进入当当商城</p>
                                        <p>低至2.9折</p>
                                    </div>
                                    <Icon type="right"/>
                                </div>
                                {item.id % 2 ==0 ? (
                                    <div>
                                        <div>
                                            <p>进入当当商城</p>
                                            <p>低至2.9折</p>
                                        </div>
                                        <Icon type="right"/>
                                    </div>
                                ):''}
                            </div>
                            <BookShow bookList = {this.props.list} title="榜单" size="3"/>
                            <BookShow bookList = {this.props.list} title="中小学教辅" size="4" subTitle="畅销榜"/>
                            <BookShow bookList = {this.props.list} title="小说" size="3" subTitle="畅销榜"/>
                            <BookShow bookList = {this.props.list} title="文学" size="4" subTitle="畅销榜"/>
                        </TabPane>
                    ))}
                </Tabs>
            </main>
        </div>

    }
}

export default withRouter(connect(state => ({ ...state.Classify }), action.Classify)(Classify))