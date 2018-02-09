import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter,HashRouter, Route,Link } from 'react-router-dom'
import App from './view/index/index'
import Artical from './view/artical/articalBlock'
import ArticalText from './view/artical/artical'
import SharingComponent from './view/sharingComponents/sharingComponents'
import Style from './index.less'
import "./resources/css/reset.css";

import  "jquery";
import  "toolFun.js";
render ((
    <HashRouter> 
        <div className={Style.reactContainer}>
            <Route exact path="/" component={App}/>
            <Route path="/artical" component={Artical}/>
            <Route path="/articalText/:id" component={ArticalText}/>
            <Route path="/sharingComponent" component={SharingComponent}/>
        </div>
    </HashRouter>
),document.getElementById('app'))