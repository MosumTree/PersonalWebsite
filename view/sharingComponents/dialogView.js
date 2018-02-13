import React ,{Component}   from 'react'
import {Link}               from 'react-router-dom'
import Style                from './sharingComponents.less'
import ExampleContainer     from 'exampleContainer/exampleContainer'
import ExampleButton        from 'exampleButton/exampleButton'
import ExampleParameter     from 'exampleParameter/exampleParameter'
import ShowDialog           from 'dialog/showDialog'
export default class extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // ShowFilter(true,false);
    }
    render(){
        let _this = this;
        let alertList = [["isShow","bool","true","控制组件显示"],["showContent","string","No Message","弹窗正文"],["closeView","function","","按钮回调事件"]]
        let confirmList = [["isShow","bool","true","控制组件显示"],["showContent","string","No Message","弹窗正文"],["closeView","function","","按钮回调事件"],["isShow","bool","true","控制组件显示"],["showContent","string","No Message","弹窗正文"],["closeView","function","","按钮回调事件"]]
        let loadingList = [["isShow","bool","true","控制组件显示"],["showContent","string","加载中","弹窗正文"]]
        //过滤器列表
		let filterChoiceDic = {
            0:['C','估','估算涨幅'],
            1:['D','日','日涨幅'],
            2:['M','月','近1月'],
            3:['Q','季','近3月'],
            4:['Y','年','近1年'],
        }
        return  <div className={Style.indexContainer}>
                    <ExampleContainer title = {"AlertMask"}>
                        <div className = {Style.componentContainer}>
                            <ExampleParameter tableList = {alertList}/>
                            <ExampleButton clickCallback = {()=>ShowDialog(true)}/>
                        </div>
                    </ExampleContainer>
                </div>
        
    }
}