import React, { Component } from    'react';
import Style                from    './input_optionbtn.less';
import PropTypes            from    'prop-types';
import TouchItem			from 	'touchItem/touchItem';

class Input_OptionBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const _this = this;
        const { title, callback, desc, flex, style } = _this.props;
        
        return   <TouchItem defaultClass={ Style.option_btn } HoverClass={Style.list_item_hover}>
                    <li className={ Style.option_btn } onClick={ callback } style = { style }>
                        <span style={ flex ? { flex : flex } : null } className = { Style.title_wrapper }>{ title }</span>
                         { desc ? <span className={ Style.desc_wrapper }>{ desc }</span> : null  } 
                        <span><i className={ Style.icon_arrow_right }></i></span>
                    </li>
                </TouchItem>;
    }

}


Input_OptionBtn.propTypes = {
    title:      PropTypes.any,
    callback:   PropTypes.func,
    desc:       PropTypes.any,
    flex:       PropTypes.any
};

Input_OptionBtn.defaultProps = {
    title:          "",
    callback:    ()=>false,
    desc:           "",
    flex:           ""
};


export default Input_OptionBtn;