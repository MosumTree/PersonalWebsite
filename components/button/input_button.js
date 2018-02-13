import React, { Component } from 'react';
import StyleClass           from './input_button.less';
import PropTypes            from 'prop-types';


class input_button extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };



    render() {
        const { isShow,name,callback,status,type,style } = this.props;
        let tempClass = "";

        switch(type + ""){
            case "1":
                tempClass = status == 1 ? StyleClass.button : StyleClass.button + " " + StyleClass.unable;
                break;
            case "2":
                tempClass = status == 1 ? StyleClass.white_button : StyleClass.white_button + " " + StyleClass.unable;
                break;
            case "3":
                tempClass = status == 1 ? StyleClass.button_orange : StyleClass.button_orange + " " + StyleClass.unable;
                break;
        }

        return  isShow ? <span onClick={ status == 1 ?callback:null } className={ tempClass } style = { style }>{ name }</span>: null;
    }
}


    input_button.propTypes = {
        name:           PropTypes.string,
        status:         PropTypes.number,
        callback:       PropTypes.func,
        type:           PropTypes.number,
        isShow:         PropTypes.bool,
        style:          PropTypes.object
    };

    input_button.defaultProps = {
        name:           "按钮",
        status:         1,
        isShow:         true,
        type:           1,
        callback:       ()=>false,
        style:          {}
    };


export default input_button;