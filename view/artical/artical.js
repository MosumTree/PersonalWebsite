import React from 'react'
import Navbar from '../../components/navbar/navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Style from './artical.less'
import mdStyle from '../../resources/css/markdown.css'
import {markdown} from 'markdown'
import html from './articalFile/array.md'
export default React.createClass({
    
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