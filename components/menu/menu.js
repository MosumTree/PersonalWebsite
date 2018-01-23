import React,{Component} from 'react';
import Style from './menu.less';
import PropTypes from 'prop-types';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            isExpand:0
        }
    }
    expandList(){
        const _this = this;
        let {isExpand} = _this.state;
        isExpand = isExpand != 1 ? 1 : 2;
        _this.setState({
            "isExpand":isExpand
        })
    }
    render(){
        let _this = this;
        const {isExpand} = _this.state;
        return <div className = {Style.menuContainer}>
            <div className = {isExpand == 1 ? Style.menuText + " animated fadeInRight":isExpand ? Style.menuText + " animated fadeOutRight":Style.menuTextHide}>
                <p>Articals</p>
                <p>Components</p>
            </div>
            <img src = {require('../menu/menu.png')} width = '20px' height = '20px' onClick = {_this.expandList.bind(_this)}/>
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