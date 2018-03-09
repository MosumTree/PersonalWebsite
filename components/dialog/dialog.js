import React, {
    PropTypes,
    Component
} from 'react';
import Style from './dialog.less';


const EyeIcon = (props) => {  
    return (
        <svg viewBox="0 0 1024 1024" width="20" height="20" fill="#666"><defs></defs><path d="M1024 512c0 12.8-6.4 25.6-12.8 38.4-51.2 89.6-128 160-217.6 211.2S614.4 838.4 512 838.4s-198.4-25.6-288-76.8C134.4 710.4 64 640 12.8 550.4 6.4 537.6 0 524.8 0 512c0-12.8 6.4-25.6 12.8-38.4C64 384 134.4 313.6 224 262.4 313.6 211.2 409.6 185.6 512 185.6s198.4 25.6 288 76.8C889.6 313.6 960 384 1011.2 473.6 1017.6 486.4 1024 499.2 1024 512zM953.6 512c-57.6-89.6-128-160-217.6-204.8 25.6 38.4 32 83.2 32 128 0 70.4-25.6 128-76.8 179.2C640 672 582.4 697.6 512 697.6s-128-25.6-179.2-76.8C281.6 569.6 256 512 256 441.6c0-44.8 12.8-89.6 32-128C204.8 352 128 422.4 70.4 512c51.2 76.8 115.2 140.8 192 185.6C339.2 742.4 422.4 768 512 768s172.8-25.6 249.6-70.4C838.4 652.8 902.4 588.8 953.6 512zM531.2 313.6c6.4-6.4 6.4-12.8 6.4-19.2 0-6.4 0-12.8-6.4-19.2C524.8 268.8 518.4 262.4 512 262.4c-44.8 0-89.6 19.2-121.6 51.2C358.4 352 339.2 390.4 339.2 441.6c0 6.4 0 12.8 6.4 19.2 6.4 6.4 12.8 6.4 19.2 6.4 6.4 0 12.8 0 19.2-6.4C390.4 454.4 390.4 448 390.4 441.6c0-32 12.8-57.6 32-83.2C454.4 332.8 480 320 512 320 518.4 320 524.8 320 531.2 313.6z"></path></svg>
    )
}

const EyeCloseIcon = (props) => {
    return (
        <svg viewBox="0 0 1024 1024" width="20" height="20" fill="#666"><defs></defs><path d="M692.305017 486.387669c4.303003-4.372587 8.500605-8.909927 12.58155-13.619182 32.313963 13.014408 143.113465 48.397267 253.915014-23.683399 0 0-163.335019 24.693402-208.117968-45.415352 0.194428-0.387833 0.396019-0.76748 0.590448-1.156336 0 0-0.277316 0.284479-0.805342 0.817622-0.171915-0.272199-0.348947-0.542352-0.515746-0.817622l-6.086625 7.395434c-19.635199 19.301602-53.807487 57.455573-111.797225 84.190471-52.462862 24.186865-122.703623 34.045397-180.415023 33.725102-142.66935-0.796132-203.471135-79.157851-237.352803-101.889575-30.978549-16.758686-33.672914-27.944446-73.284073-9.154497-52.711526 25.00551-77.172637 88.336908-77.172637 88.336908 77.172637-31.652907 132.323725-7.499811 146.615219 2.439562 0.839111 0.613984 1.673106 1.233084 2.518357 1.838881 0.001023 0 0.008186 0.00614 0.008186 0.00614l0.001023 0c11.332093 8.116865 23.194258 15.530718 35.517935 22.248723-5.67014 32.030507-43.715641 49.421596-43.715641 49.421596 53.851489-8.357342 68.873624-20.702508 79.455633-32.452109 11.996219 4.9088 24.342408 9.215896 36.991496 12.912078-3.810792 39.07904-44.678572 67.962881-44.678572 67.962881 54.650691-9.474792 74.792427-42.987047 81.4388-59.106166 14.387685 2.756787 29.093619 4.771677 44.062542 6.03239 11.356652 31.475875-6.082532 74.785264-6.082532 74.785264 27.882024-22.267143 40.907689-59.33334 44.99375-73.224722 13.285584-0.029676 26.245757-0.51984 38.884612-1.471514 6.459109 14.147208 24.996301 50.79692 52.653197 72.882937 0 0-18.418488-35.052331-10.157337-78.076216 10.126638-1.74576 20.019962-3.832282 29.65746-6.288217 9.101285 13.409404 38.175461 45.149293 112.465444 51.92665 0 0-60.956304-19.512403-59.33948-70.27146 9.116635-4.071735 17.958-8.553817 26.508747-13.461593 14.896268 13.270235 68.733431 50.658773 195.506742 42.017976C827.150168 575.2393 715.285404 558.388517 692.305017 486.387669z"></path></svg>
    )
}
class AlertMask extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEyeOpen:false
        };
    }

    //密码弹窗：切换input类型
    switchEye(){
        const _this = this;
        _this.setState({
            isEyeOpen : !_this.state.isEyeOpen
        })
    }

    //弹窗3个优化问题：1.点击确定按钮时会有蓝色背景；2.弹窗出现时底部页面可以滚动；3.弹窗本身最好也有一个显示时的动画效果 -->优化达成
    render() {
        const _this = this; 
        const { isShow, type, title, content, confirmText, listDic, cancleText, callback, cancleCallback } = _this.props;
        const { isEyeOpen } = _this.state;

        //配置底部弹窗列表项

        //禁止touchmove的默认操作（即拖动页面）
        isShow ? document.getElementById('mask').addEventListener('touchmove',function (e) {
            e.preventDefault();  
            e.stopPropagation();  

        },false) : document.getElementById('mask').addEventListener('touchmove',function (e) {
            e.preventDefault();  
            e.stopPropagation();  
        },true);

        /* 
        弹窗组件结构：
        弹窗容器，外部跳出效果
            |
            --子弹窗，内部弹窗种类
                |
                --内部弹窗内容组件
        */

        //内部弹窗内容组件
        let maskComponent ;
        switch (type) {
            case 1:
            case 2:
                maskComponent = <p dangerouslySetInnerHTML={{ __html:content }}></p>;
                break;
            case 3:
                maskComponent = <div className={Style.input_wrap}>
                                    <div className={Style.password_input_wrapper}>
                                            <input 
                                                placeholder=" 交易密码 " 
                                                type={ isEyeOpen ? "text" : "password" }
                                                ref="buyPwdInput"
                                                // value={inputValue}
                                                // onChange={(e) => this.inputValueChange(e)}
                                            />
                                            <span onClick = { _this.switchEye.bind(_this)}>
                                                { isEyeOpen ? <EyeIcon /> : <EyeCloseIcon /> }
                                            </span>
                                        </div>
                                </div>;
                break;
            default:
                maskComponent = <p dangerouslySetInnerHTML={{ __html:content }}></p>
                break;
        }

        //子弹窗，内部弹窗种类
        let submask =   <div>
                            <h2>{title}</h2>
                            {maskComponent}
                            <div className = { Style.buttonContainer}>
                                <a href = "javascript:void(0);" className = { Style.confirm_button} onClick = { callback }>{confirmText}</a>
                                {type != 1 ?<a href = "javascript:void(0);" className = { Style.cancle_button} onClick = { cancleCallback }>{cancleText}</a>:null}
                            </div>
                        </div>;

        //弹窗容器，外部跳出效果
        let mask;
        switch (type) {
            case 1:
            case 2:
            case 3:
                mask =  <div className={isShow ? Style.innerup: Style.innerdown}>
                            { submask }
                        </div>;
                break;
            case 4:
                mask =  <div className={isShow ? Style.bottomup: Style.bottomdown}>
                            {listDic.map((item, i) => {
                                return <div className = { Style.bottom_list} key = { i }>{ item }</div>
                            })}
                            <div className = { Style.bottom_cancle} onClick = { cancleCallback } >{ cancleText }</div>
                        </div>;
                break;
            default:
                mask =  <div className={isShow ? Style.innerup: Style.innerdown}>
                            { submask }
                        </div>;
                break;
        }
        

        return  <div className={isShow ? Style.alertMasker : Style.dialog_hidden}>
                    <div className={Style.alert}>
                        {mask}
                    </div>
                </div>  
    }
}  

export default AlertMask;