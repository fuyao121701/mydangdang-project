import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Icon,Input,Tabs} from 'antd'
import '../static/css/classify.less'
import Swiper from '../component/Swiper'
import BookShow from "../component/BookShow";
import action from "../store/action";
import TitleListShow from "../component/TitleListShow";

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
    onChangeTabs = () => {
        let ele = document.querySelector(".ant-tabs-content");
        ele.scrollTop = 0
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
                    onChange={this.onChangeTabs}
                >
                    {this.props.listname.map((item,index)=>(
                        <TabPane tab={item.name} key={index}>
                            <Swiper dataImg = {this.props.banner}/>
                            <div className="tabCarder">
                                <div>
                                    <div>
                                        <p>进入当当商城</p>
                                        <p>{item.id % 2 ==0 ? "低至2.9折" : "精选绘本、科普、文学等0-14岁适读读物"}</p>
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
                            {/*第一页*/}
                            {item.id % 3 == 1 ?
                            <div>
                                <BookShow bookList = {this.props.list} title="榜单" size="3"/>
                                <TitleListShow title="中小学教辅" subTitle="畅销榜" titleList={["中小学阅读","工具书","语文作文","小学一年级","小学二年级","展开"]}/>
                                <TitleListShow title="小说" subTitle="畅销榜" titleList={["社会","侦探/悬疑/推理","情感","世界名著","历史","展开"]}/>
                            </div> : null}
                            {/*第二页*/}
                            {item.id % 3 == 0 ?
                                <div>
                                    <BookShow bookList = {this.props.list} title="榜单" size="6"/>
                                    <TitleListShow title="热门书单"  titleList={["凯迪克奖作品合集","2018年各地暑期阅读推荐书目","让孩子学会躲避危险 儿童安全教育看这里"]}/>
                                    <TitleListShow title="小说" subTitle="畅销榜" titleList={["社会","侦探/悬疑/推理","情感","世界名著","历史","展开"]}/>
                                </div> : null}
                            {item.id % 3 == 2 ?
                                <div>
                                    <BookShow bookList = {this.props.list} title="榜单" size="16"/>
                                    <BookShow bookList = {this.props.list} title="人文社科" size="20"/>
                                    <BookShow bookList = {this.props.list} title="励志" size="10"/>
                                </div> : null}
                            <BookShow bookList = {this.props.list} title="文学" size="4" subTitle="畅销榜"/>
                        </TabPane>
                    ))}
                </Tabs>
            </main>
        </div>

    }
}

export default withRouter(connect(state => ({ ...state.Classify }), action.Classify)(Classify))