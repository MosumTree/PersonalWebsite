import React, { Component } from 'react';
import Style from './sharingComponents.less';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ButtonView           from './buttonView.js';
import DialogView           from './dialogView.js';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });
    render() {
        return <Router><MuiThemeProvider>
            <div>
                <AppBar
                    title="components"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onClick={this.handleToggle}
                    style={
                        {
                            backgroundColor: '#000'
                        }
                    }
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >


                    <MenuItem onClick={this.handleClose}>app bar</MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/sharingComponent/buttonView">button</Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>tab</MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/sharingComponent/dialogView">dialog</Link>
                    </MenuItem>

                </Drawer>
                <Route exact path="/sharingComponent" component={ButtonView} />
                <Route path="/sharingComponent/buttonView" component={ButtonView} />
                <Route path="/sharingComponent/dialogView" component={DialogView} />
            </div>
        </MuiThemeProvider>
        </Router>
    }
}