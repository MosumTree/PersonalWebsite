import React, {
    PropTypes,
    Component
} from 'react';
import Style from './dialog.less';

class AlertMask extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    //弹窗3个优化问题：1.点击确定按钮时会有蓝色背景；2.弹窗出现时底部页面可以滚动；3.弹窗本身最好也有一个显示时的动画效果
    render() {
        const _this = this; 
        const {isShow, type, title, content, confirmText, cancleText, callback, cancleCallback} = _this.props;
        // _this.preventScroll(isShow);
        return  <div className={isShow ? Style.alertMasker : Style.dialog_hidden}>
                        <div>
                            <div className={Style.alert}>
                                <div className={Style.inner}>
                                    <h2>{title}</h2>
                                    <p dangerouslySetInnerHTML={{ __html:content }}></p>
                                    <footer>
                                        <a href="javascript:void(0);" className={Style.button} htmlFor="yes" onClick={callback}>{confirmText}</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>  
    }
}  

export default AlertMask;