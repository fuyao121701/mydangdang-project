import React, { Component } from 'react';
import '../../static/css/home.less'
import ReactSwipe from 'react-swipes'
import {Link} from 'react-router-dom'





class Dishiqi extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentDidMount() {

        this.autoTimer = setInterval(() => {
            this.leftTimer();
        }, 1000)


    }

    render() {

        let opt = {
            distance: 82, // 每次移动的距离，卡片的真实宽度
            currentPoint: 0,// 初始位置，默认从0即第一个元素开始
            autoPlay: false, // 是否开启自动播放
            swTouchstart: (ev) => {

            },
            swTouchmove: (ev) => {

            },
            swTouchend: (ev) => {
                let data = {
                    moved: ev.moved,
                    originalPoint: ev.originalPoint,
                    newPoint: ev.newPoint,
                    cancelled: ev.cancelled
                }
                // console.log(data);
                // this.setState({
                //     curCard: ev.newPoint
                // })
            }
        }



        let { hours, minutes, seconds } = this.state;

        return <div className="brand_street1">
            <div className="title1">
                <img src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg" alt="品牌街" />
            </div>
            <div className="brand_list1">
                <a className="seckilling-title" href="javascript:;">
                    <span className="seckilling-content">
                        <span className="seckill_t kuan"><span>{hours}</span></span>
                        <span className="seckill_d">时</span>
                        <span className="seckill_t"><span>{minutes}</span></span>
                        <span className="seckill_d">分</span>
                        <span className="seckill_t red"><span>{seconds}</span></span>
                        <span className="seckill_d">秒</span>
                    </span>
                </a>


                <ul className="ul_wrap1 card-swipe">
                    <ReactSwipe className="card-slide" options={opt}>

                        <li className="seckilling-box">
                            <Link to={{
                                pathname:`/shopping/details`,
                                search:`?courseId=100`
                            }}>
                                <p className="pic"><img src="http://img3m0.ddimg.cn/19/36/1346831560-1_e_11.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>FOREO LUNA mini2露娜电动毛孔清洁美容洁面仪美容仪 粉色 买一赠三（发箍+化妆棉+化妆包）咨询客服有惊喜！</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                        849
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>1280.00
                                    </span>
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li className="seckilling-box">
                            <Link to={{
                                pathname:`/shopping/details`,
                                search:`?courseId=101`
                            }}>
                                <p className="pic"><img src="http://img3m0.ddimg.cn/49/31/25265740-1_h_2.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>影响孩子一生的心灵鸡汤小学生课外阅读经典做最好的自己全8册三年级四年级必读课外书五六年级儿童读物7-8-9-10-12-15岁励志校园成长小说故事书推荐书籍</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            17.9
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>39.80
                                    </span>
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li className="seckilling-box">
                            <Link to={{
                                pathname:`/shopping/details`,
                                search:`?courseId=102`
                            }}>
                                <p className="pic"><img src="http://img3m0.ddimg.cn/97/12/1490618050-1_h_1.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>【狂暑季 满1件立享4折】美特斯邦威 条纹短袖T恤女夏装基础款简约纯棉舒适合体打底上衣</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            15
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>39.00
                                    </span>
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li className="seckilling-box">
                            <Link to={{
                                pathname:`/shopping/details`,
                                search:`?courseId=103`
                            }}>
                                <p className="pic"><img src="http://img3m8.ddimg.cn/1/14/1411621498-1_h_1.jpg"/></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>【买了都说好】推荐:★★★★★ 2018夏季新款原宿防晒衣女中长款韩版潮bf大码宽松防晒衫ulzzang时尚开衫外套</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            39.9
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>699.00
                                    </span>
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li className="seckilling-box">
                            <Link to={{
                                pathname:`/shopping/details`,
                                search:`?courseId=104`
                            }}>
                                <p className="pic"><img src="http://img3m0.ddimg.cn/4/2/1040144890-1_h_2.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>长青藤国际大奖小说书系（共4册）妖精的小孩+寻找阿加莎+宇宙最后一本书+地下121天</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            32
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>77.60
                                    </span>
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li className="seckilling-box">
                            <Link to={{
                                pathname:`/shopping/details`,
                                search:`?courseId=105`
                            }}>
                                <p className="pic"><img src="http://img3m9.ddimg.cn/80/5/410263109-1_h_2.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>当当优品 描金锤目纹茶具套装 光阴系列功夫茶具 1个闻香盖碗+2个樱花品茗杯 </p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            69
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>537.00
                                    </span>
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li className="seckilling-box">
                            <Link to={{
                                pathname:`/shopping/details`,
                                search:`?courseId=106`
                            }}>
                                <p className="pic"><img src="http://img3m9.ddimg.cn/93/26/1349740749-1_h_2.jpg" /></p>
                                <p className="name" style={{ '-webkit-box-orient': 'vertical' }}>影响孩子一生的心灵鸡汤小学生课外阅读经典做最好的自己全8册三年级四年级必读课外书五六年级儿童读物7-8-9-10-12-15岁励志校园成长小说故事书推荐书籍</p>
                                <p className="price">
                                    <span className="rob">
                                        <span className="num">
                                            <span className="iconfont icon-qianzifuhao-">￥
                                        </span>
                                            39.8
                                    </span>
                                        <span className="discount">
                                            <span className="iconfont icon-qianzifuhao-">
                                            </span>158.40
                                    </span>
                                    </span>
                                </p>
                            </Link>
                        </li>
                        <li className="seckilling-box">
                            <Link to={{
                                pathname:`/classify`
                            }} className="j_seckillMore seckill_more" ddt-pit="more">
                                <p className="pic"><img className="" src="http://img60.ddimg.cn/upload_img/00610/new_index/more.png" />
                                </p>
                            </Link>
                        </li>
                    </ReactSwipe>
                </ul>
                <ul className="style513 sty222">
                    <li>
                        <a href="javascript">
                            <img alt="" src="http://img59.ddimg.cn/14540040029369_y.jpg" />
                        </a>
                    </li>
                </ul>

            </div>


        </div>;
    }

    leftTimer = () => {
        let nowTime = new Date(),
            tarTime = new Date('2020/12/26 18:1:00'),
            diffTime = tarTime - nowTime;//获取当前时间和目标时间之间的差值（俩个时间相差的毫秒差）
        if (diffTime >= 0) {
            let hours = Math.floor(diffTime / (1000 * 60 * 60));
            diffTime = diffTime - hours * 3600000;
            let minutes = Math.floor(diffTime / (1000 * 60));
            diffTime = diffTime - minutes * 60000;
            let seconds = Math.floor(diffTime / 1000);
            hours < 10 ? hours = '0' + hours : null;
            minutes < 10 ? minutes = '0' + minutes : null;
            seconds < 10 ? seconds = '0' + seconds : null;
            this.setState({
                hours,
                minutes,
                seconds
            })
            return;
        }
        // timeSpan.innerHTML = '-- : -- : --';
        clearInterval(this.autoTimer);
    }


}
export default Dishiqi;