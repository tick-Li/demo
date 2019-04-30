import React,{ PureComponent, createElement } from "react";
import { HashRouter, BrowserRouter, Route, Redirect, Switch, hashHistory, NavLink } from 'react-router-dom';
import Bundle from './bundle';
import routers from "./routers";

const createComponent = (component) => () => (
	<Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <div></div>
        }
    </Bundle>
);

export default class RouterList extends React.Component {
    render() {
        return(
            <HashRouter>
                <Switch> 
                    {
                        routers.map((item,index)=>{
                            return <Route exact key={index} path={"/"+item.path} component={createComponent(item.component)} />
                        })
                    } 
                    <Redirect exact from="/" to="/home" />
                </Switch>
            </HashRouter>
        )
    }
}