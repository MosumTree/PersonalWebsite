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
            title:'',
            content: '',
            callback:()=>false,
            cancleCallback:()=>false,
            confirmText:'',
            cancleText:''
        }
        that = this;
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
            <Dialog { ..._this.state }></Dialog>
        )
    }
}

ReactDOM.render(<ShowDialog />, container)


export default function ShowDialogControl ({isShow = false,type = 1, title = "Title", content = "No Message", confirmText = "ok", cancleText = "cancle", callback, cancleCallback}) {

    let confirm = function(){
        that.closeView();
        if (callback) {
            callback();
        }
        
    }
    let cancle = function(){
        that.closeView();
        if (cancleCallback) {
            cancleCallback();
        }
        
    }
    that.setState({
        isShow: isShow,
        type:type,
        title:title,
        content:content,
        confirmText:confirmText,
        cancleText:confirmText,
        callback:confirm,
        cancleCallback:cancle
    })
}

export { that as ShowAlertComponent }