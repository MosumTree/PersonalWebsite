import React, { Component } from 'react';
import Style from './sharingComponents.less';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    render() {
        return <MuiThemeProvider>
            <div>
                <RaisedButton
                    label="Toggle Drawer"
                    onClick={this.handleToggle}
                />
                <Drawer open={this.state.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        </MuiThemeProvider>
    }
}