import React ,{Component}   from 'react'
import {Link}               from 'react-router-dom'
import Style                from './sharingComponents.less'
import ExampleContainer     from 'exampleContainer/exampleContainer'
import ExampleButton        from 'exampleButton/exampleButton'
import ExampleParameter     from 'exampleParameter/exampleParameter'
import ShowDialog           from 'dialog/showDialog'
import Button               from 'button/input_button'
import ShowFilter           from 'filterMask/showFilterMask';
export default class extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //使用时先载入弹窗但不显示
        ShowDialog({isShow: false});
        ShowFilter(true,false);
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
        let filterList = [
            ["isShow","bool","false","控制组件载入"],
            ["isExpand","bool","false","控制组件展示"],
            ["filterChoiceDic","object","{}","组件选项文字"],
            ["callback","function","()=>false","选项点击事件"],
        ]
        //过滤器列表
		//过滤器列表
		let filterChoiceDic = {
            0:['A','估','选项1'],
            1:['B','日','选项2']
        }
        return  <div className={Style.indexContainer}>
                    <ExampleContainer title = {"Dialog"}>
                        <div className = {Style.componentContainer}>
                            <ExampleParameter tableList = {dialogList}/>
                            <Button name = {'单按钮弹窗'} status = {1} type = {1} callback = { ()=>ShowDialog({isShow: true, type:1, title: '温馨提示', content: '弹窗内容'}) } />
                            <Button name = {'双按钮弹窗'} status = {1} type = {1} callback = { ()=>ShowDialog({isShow: true, type:2, title: '温馨提示', content: '弹窗内容', confirmText: '确认', cancleText: '取消'}) } />
                            <Button name = {'密码弹窗'} status = {1} type = {1} callback = { ()=>ShowDialog({isShow: true, type:3, title: '温馨提示', confirmText: '确认', cancleText: '取消'}) } />
                        </div>
                    </ExampleContainer>
                    <ExampleContainer title = {"Filter"}>
                        <div className = {Style.componentContainer}>
                            <ExampleParameter tableList = {filterList}/>
                            <Button name = {'底部弹窗'} status = {1} type = {1} callback = { ()=>{ ShowFilter(true, true, filterChoiceDic,(i)=>{ alert(i)}) } }/>
                        </div>
                    </ExampleContainer>
                </div>
        
    }
}