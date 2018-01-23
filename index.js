import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter,HashRouter, Route,Link } from 'react-router-dom'
import App from './view/index/index'
import Artical from './view/artical/artical'
import Style from './index.less'
import "./resources/css/reset.css";

import  "jquery";
import  "toolFun.js";
render ((
    <HashRouter> 
        <div className={Style.reactContainer}>
            <Route exact path="/" component={App}/>
            <Route path="/artical" component={Artical}/>
        </div>
    </HashRouter>
),document.getElementById('app'))