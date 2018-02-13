import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dialog from './dialog'


let that = null
const container = document.createElement('div')
document.body.appendChild(container)

class ShowDialog extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            content: '',
            callbcack:()=>false,
            buttonName:'确定'
        }
        that = this
    }
    
    componentWillUnmount() {
        document.removeChild(container)
    }

    closeView(){
        that.setState({
            isShow: false
        });
    }

    render() {
        const _this = this;
        return(
            <Dialog isShow={this.state.isShow} showContent={this.state.content} buttonName={this.state.buttonName} closeView={this.state.callback}></Dialog>
        )
    }
}

ReactDOM.render(<ShowDialog />, container)


export default function ShowDialogControl (isShow,msg,callback,btName) {

    let callback1 = function(){
        that.closeView();
        if (callback) {
            callback();
        }
        
    }

    that.setState({
        isShow: isShow || false,
        content: msg || "网络不给力（N003）",
        buttonName:btName||"确定",
        callback:callback1
    })
}

export { that as ShowAlertComponent }