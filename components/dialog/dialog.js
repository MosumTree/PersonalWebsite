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

    render() {
        const _this = this; 
        const {isShow, type, title, content, confirmText, cancleText, callback, cancleCallback} = _this.props;
        return  isShow ? 
                    <div className={Style.alertMasker}>
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
                    </div>  :  null
    }
}  

export default AlertMask;