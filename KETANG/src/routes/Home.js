import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Icon, Input, Carousel, BackTop } from 'antd';
import '../static/css/home.less'
import action from '../store/action/index'
import Dishiqi from './Homes/dishiqi'
import Quality from './Homes/quality'
import Yifu from './Homes/yifu'
import Liats from '../component/List'
import Footersss from './Homes/footersss'

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '首页',
        }
    }


    async componentDidMount() {
        let { queryBanner, bannerData, queryBanner3, bannerData3, } = this.props;

        if (!bannerData || bannerData.length === 0) {
            queryBanner();
        }

        if (!bannerData3 || bannerData3.length === 0) {
            queryBanner3();
        }


    }

    render() {
        let { bannerData, bannerData3 } = this.props;

        return <div>
            <header className='headerNavBox'>
                <div className='homeBox'>
                    <div className='baseBox'>
                        <h1 className='logo'>当当</h1>
                        <div>
                            <Input placeholder="百丽童鞋" prefix={<Icon type='search' />} className='inputBox' />
                        </div>
                        <Icon className='icon' type='menu-fold' />
                    </div>
                </div>
            </header>

            <main className='allBox'>
                <BackTop/>
                <Carousel autoplay autoplaySpeed={2000}>
                    <div><img src="http://img63.ddimg.cn/ddreader/dangebook/6y20y6z1242-366.jpg" alt="" /></div>
                    <div><img src="http://img63.ddimg.cn/upload_img/00702/B/1242x366_dl_20180629-1530512215.jpg" alt="" /></div>
                    <div><img src="http://img60.ddimg.cn/upload_img/00609/mao/b0628banner1242366-1530524637.jpg" alt="" /></div>
                    <div><img src="http://img63.ddimg.cn/upload_img/00702/J/1242x366_lyx_0702-1530516279.jpg" alt="" /></div>
                </Carousel>

                <div className="ify">
                    <ul>
                        <li><Link to='/classify'><img src="http://img62.ddimg.cn/upload_img/00528/0000/1-00-1528978871.png" alt="" /></Link></li>
                        <li><Link to='/classify'><img src="http://img62.ddimg.cn/upload_img/00528/0000/2-00-1528978871.png" alt="" /></Link></li>
                        <li><Link to='/classify'><img src="http://img60.ddimg.cn/upload_img/00528/0000/3-00-1528978871.png" alt="" /></Link></li>
                        <li><Link to='/mydangdang'><img src="http://img60.ddimg.cn/upload_img/00528/0000/4-00-1528978871.png" alt="" /></Link></li>
                        <li><Link to='/classify'><img src="http://img62.ddimg.cn/upload_img/00528/0000/000-1530273800.png" alt="" /></Link></li>
                    </ul>
                </div>
                <div className='journalism'>
                    <div className="ddkx_icon">
                        <img src="http://img60.ddimg.cn/upload_img/00709/789065/123.png" alt="" />
                    </div>
                    {bannerData && bannerData.length !== 0 ? (<Carousel vertical  dots='false' autoplay autoplaySpeed={1000}>
                        {bannerData.map((item, index) => {
                            let { name, pic } = item;
                            return <div key={index}><a href="javascript:;">
                                <span className="ddkx_title_label_wrap">热卖</span>
                                <span className="ddkx_text">{item.name}</span>
                            </a></div>;
                        })}
                    </Carousel>) : ''}


                    <a href="javascript:;" className="ddkx_more">更多</a>

                </div>


                <div className="brand_street">
                    <div className="title">
                        <img src="http://img61.ddimg.cn/upload_img/00528/000000/biaoti-101-1523330132.jpg" alt="品牌街" />
                    </div>
                    <div className="brand_list">
                        <ul className="ul_wrap">
                            {bannerData3 && bannerData3.length !== 0 ? (<Carousel autoplay autoplaySpeed={3300}>
                                {bannerData3.map((item, index) => {

                                    return <li key={index}>
                                        {
                                            item.map((itte, index) => {
                                                return <dl key={index}>
                                                    <dd>
                                                        <a href="javascript:;"><img src={itte.pic} alt="" /></a>
                                                    </dd>
                                                </dl>
                                            })
                                        }
                                    </li>;
                                })}
                            </Carousel>) : ''}
                        </ul>
                    </div>

                </div>


                <Dishiqi></Dishiqi>
                <Quality></Quality>
                <section className="style503"></section>
                <Yifu></Yifu>

                <Liats/>

                <Footersss></Footersss>

                <div style={{ height: "1rem" }}></div>
            </main>
        </div>

    }




}
export default connect(state => ({ ...state.Home }), action.Home)(Home)