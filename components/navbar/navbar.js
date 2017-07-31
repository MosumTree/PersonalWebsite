import React,{Component} from 'react';
import Style from './navbar.less';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
injectTapEventPlugin();
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: true,
            open: false
        }
    }
    backToIndex(){
        this.props.history.push('/');
    }
    handleToggle = () => this.setState({open: !this.state.open});
    render(){
        let _this = this;
        let isShow = _this.state.isShow;
        let title = _this.props.title;
        return isShow?
            <div>
                <div className = {Style.header}>
                    <i className ={Style.back} onClick = {_this.handleToggle}></i>
                    <p className ={Style.title}>{title}</p>
                    <i className ={Style.setting}></i>
                </div>
                <Drawer open={this.state.open} width={200} containerClassName={Style.drawer}>
                        <List>
                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                        </List>
                        <Divider />
                        <List>
                            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                        </List>
                </Drawer>
            </div>:null;
    }
}
export default Navbar;