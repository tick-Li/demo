import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'antd';
import "./index.less";
import Route from "routers";

ReactDOM.render(
    <div>
        <Button className="test" type="primary">Primary1</Button>
        <Route />
    </div>,
    document.getElementById("app")
)