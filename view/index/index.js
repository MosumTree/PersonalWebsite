import React from 'react'
import {Link} from 'react-router-dom'
import Style from './index.less';
import aniStyle from '../../resources/css/animate.min.css'
import history from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default React.createClass({
    componentWillMount(){

        $.loadJS("https://img.1234567.com.cn/com/swiper/1.0.0/swiper.min.js",function(){
			
			let mySwiper = new Swiper ('.swiper-container', {
                direction:"vertical",
                mousewheel: true,
                onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                    swiperAnimateCache(swiper); //隐藏动画元素 
                    swiperAnimate(swiper); //初始化完成开始动画
                }, 
                onSlideChangeEnd: function(swiper){ 
                    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                } 
			})

		});
    },
    jump(e){
        this.props.history.push("/artical");
    },
    render(){
        let _this = this;
        return  <div className={Style.indexContainer + " swiper-container"}>
                    <div className = {"swiper-wrapper"}>
                        <div className = {Style.indexPage+" swiper-slide"}>
                            <div className={Style.indexTitle}>
                                <strong><span>MO</span>SUM</strong>
                            </div>
                        </div>
                        <div className = {Style.indexPage+" swiper-slide"}>
                            <div className={Style.indexTitle}>
                                <strong >文章</strong>
                                <p>Artical</p>
                            </div>
                        </div>
                        <div className = {Style.indexPage+" swiper-slide"}>
                            <div className={Style.indexTitle} >
                                <strong className = {"ani"}>组件</strong>
                                <p>Components</p>
                            </div>
                        </div>
                    </div>
                </div>
    }
})