import React from 'react'
import Navbar from '../../components/navbar/navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default React.createClass({
    render(){
        return <MuiThemeProvider>
            <Navbar title = {'文章'}/>
        </MuiThemeProvider>
    }
})