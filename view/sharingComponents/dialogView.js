import React ,{Component}   from 'react'
import {Link}               from 'react-router-dom'
import Style                from './sharingComponents.less'
import ExampleContainer     from 'exampleContainer/exampleContainer'
import ExampleButton        from 'exampleButton/exampleButton'
import ExampleParameter     from 'exampleParameter/exampleParameter'
import ShowDialog           from 'dialog/showDialog'
import Button               from 'button/input_button'
export default class extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //使用时先载入弹窗但不显示
        // ShowDialog({isShow: false});
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
		let listDic = {
        }
        return  <div className={Style.indexContainer}>
                    <ExampleContainer title = {"Dialog"}>
                        <div className = {Style.componentContainer}>
                            <ExampleParameter tableList = {dialogList}/>
                            <Button name = {'单按钮弹窗'} status = {1} type = {1} callback = { ()=>ShowDialog({isShow: true, type:1, title: '温馨提示', content: '弹窗内容'}) } />
                            <Button name = {'双按钮弹窗'} status = {1} type = {1} callback = { ()=>ShowDialog({isShow: true, type:2, title: '温馨提示', content: '弹窗内容', confirmText: '确认', cancleText: '取消'}) } />
                            <Button name = {'密码弹窗'} status = {1} type = {1} callback = { ()=>ShowDialog({isShow: true, type:3, title: '温馨提示', confirmText: '确认', cancleText: '取消'}) } />
                            <Button name = {'底部弹窗'} status = {1} type = {1} callback = { ()=>ShowDialog({isShow: true, type:4}) } />
                        </div>
                    </ExampleContainer>
                </div>
        
    }
}