import React,{Component} from 'react';
import Style from './menu.less';
import PropTypes from 'prop-types';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            isExpand:false
        }
    }
    render(){
        let _this = this;
        return <div className = {Style.menuContainer}>
            <img src = '../menu/menu.png' />
        </div>
    }
}
Menu.PropTypes = {
    isShow:     PropTypes.bool,
    list:       PropTypes.array,
    callBack:   PropTypes.func
}
Menu.defaultProps = {
    isShow:     false,
    list:       ["item1","item2","item3"],
    callBack:   ()=>{}
}
export default Menu;