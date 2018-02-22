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
        //使用时先载入弹窗但不显示
        ShowDialog({isShow: false});
    }
    render(){
        let _this = this;
        let dialogList = [
            ["isShow","bool","true","控制组件显示"],
            ["type","number","1","弹窗类型"],
            ["title","string","Title","弹窗标题"],
            ["content","string","No Message","弹窗正文"],
            ["confirmText","string","ok","确认按钮文本"],
            ["cancleText","string","cancle","取消按钮文本"],
            ["callback","function","()=>false","确认按钮回调事件"],
            ["cancleCallback","function","()=>false","取消按钮回调事件"]
        ]
        //过滤器列表
		let filterChoiceDic = {
            0:['C','估','估算涨幅'],
            1:['D','日','日涨幅'],
            2:['M','月','近1月'],
            3:['Q','季','近3月'],
            4:['Y','年','近1年'],
        }
        return  <div className={Style.indexContainer}>
                    <ExampleContainer title = {"Dialog"}>
                        <div className = {Style.componentContainer}>
                            <ExampleParameter tableList = {dialogList}/>
                            <ExampleButton clickCallback = {()=>ShowDialog({isShow: true, title: '温馨提示', content: '弹窗内容'})}/>
                        </div>
                    </ExampleContainer>
                </div>
        
    }
}