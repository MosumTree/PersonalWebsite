import React ,{Component}   from 'react'
import {Link}               from 'react-router-dom'
import Style                from './sharingComponents.less'
import Button               from 'button/input_button'
import OptionBt             from 'optionbtn/input_optionbtn'
import ExampleContainer     from 'exampleContainer/exampleContainer'
import ExampleButton        from 'exampleButton/exampleButton'
import ExampleParameter     from 'exampleParameter/exampleParameter'

export default class extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let _this = this;
        let buttonList = [["isShow","bool","true","控制组件显示"],["name","string","","按钮文字"],["callback","function","()=>false","点击事件"],["status","number","1","1为可点击，2为不可点击，背景呈灰色"],["type","number",1,"提供几种默认样式，也可通过style自定义样式"],["style","object","","自定义样式"]]
        let optionBtList = [["title","string","","按钮左侧标题"],["callback","function","()=>false","点击事件"],["flex","string","1","控制左侧标题占按钮的比例，1为左右1:1"],["desc","any","","右侧区域填充内容,可以直接填充标签元素"],["style","object","","自定义样式"]]
        return  <div className={Style.indexContainer}>
                    <ExampleContainer title = {"Button"}>
                        <div className = {Style.componentContainer}>
                            <ExampleParameter tableList = {buttonList}/>
                            <Button name = {'button'} status = {1} type = {1} callback = {()=>{ alert('hello') } }/>
                            <Button name = {'button'} status = {1} type = {2}/>
                            <Button name = {'button'} status = {2} type = {3} style = { {background : "#444444",color:'#fff'}}/>
                        </div>
                    </ExampleContainer>
                    <ExampleContainer title = {"OptionBt"}>
                        <div className = {Style.componentContainer}>
                            <ExampleParameter tableList = {optionBtList}/>
                            <OptionBt flex = {"0.8"} title={<span>所在地区</span>} desc={<span>上海</span>} />
                        </div>
                    </ExampleContainer>
                </div>
        
    }
}