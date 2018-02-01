import React,{Component} from 'react';
import Style from './artical.less'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
export default class extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return <MuiThemeProvider>
            <div className = { Style.articals_block }>
                <Link to={`/articalText/1`} className = { Style.block_link }>
                        <Card>
                            <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                            avatar="resources/img/example.jpg"
                            />
                            <CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                            >
                            <img src="resources/img/example.jpg" alt="" />
                            </CardMedia>
                            {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            </CardText>
                            <CardActions>
                                {/* <FlatButton label="Action1" />
                                <FlatButton label="Action2" /> */}
                            </CardActions>
                        </Card>
                </Link>
            </div>
        </MuiThemeProvider>
    }
}
