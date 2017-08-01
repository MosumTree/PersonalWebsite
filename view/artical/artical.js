import React from 'react'
import Navbar from '../../components/navbar/navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Style from './artical.less'
import mdStyle from '../../resources/css/markdown.css'
import {markdown} from 'markdown'
import html from './articalFile/array.md'
export default React.createClass({
    /* 本页面要实现的目标：
    左侧侧边栏内容；
    顶部栏需不需要，和侧边栏放在一起会不会拥挤
    返回首页操作；
    回到顶部操作，页面目录；
    文章列表和打开前的预览；
    md文档从数据库读取；
    建立从前端显示到后端接口与数据的连接；
    留言或者说评论功能；
    写文章的日期显示；
     */
    render(){
        let articalContext = html;
        var a = require('./articalFile/array.md');
        return <MuiThemeProvider>
            <div>
                <Navbar title = {'文章'}/>
                <div id="container"  className={mdStyle.markdownBody} dangerouslySetInnerHTML={{__html: a}}> 
                    {/*{articalContext}*/}
                </div>
            </div>
        </MuiThemeProvider>
    }
})