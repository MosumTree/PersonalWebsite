import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Style from './index.less';
import aniStyle from '../../resources/css/animate.min.css'
import history from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'menu/menu';
export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            isIn:0
        }
    }
    componentWillMount(){

        $.loadJS("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper.min.js",function(){
			let slide;
			let mySwiper = new Swiper ('.swiper-container', {
                direction:"vertical",
                mousewheel: true,
                on:{
                    init:function(swiper){
                        slide=this.slides.eq(0);
                        slide.addClass('ani-slide');
                    },
                    transitionStart: function(){
                        for(let i=0;i<this.slides.length;i++){
                            slide=this.slides.eq(i);
                            slide.removeClass('ani-slide');
                        }
                    },
                    transitionEnd: function(){
                        slide=this.slides.eq(this.activeIndex);
                        slide.addClass('ani-slide');
                        
                    },
                }
			})

		});
    }
    jump(e){
        this.props.history.push("/artical");
    }
    render(){
        let _this = this;
        return  <div className={Style.indexContainer + " swiper-container"}>
                    <div className = {"swiper-wrapper"}>
                        <div className = {Style.indexPage+" swiper-slide"}>
                            <div className={Style.indexTitle}>
                                <strong><span>MO</span>SUM</strong>
                            </div>
                            <Menu isShow = {true}/>
                        </div>
                        <div className = {Style.indexPage+" swiper-slide"}>
                            <div className={Style.indexTitle}>
                                <strong >文章</strong>
                                <p>Articals</p>
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
}