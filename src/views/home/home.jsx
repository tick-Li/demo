import React from 'react';
import { NavLink } from "react-router-dom";
import { Icon,Button,Row, Col,Pagination,PageHeader } from "antd";
import "./index.less";
import img from "images/5.jpg";

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Button type="primary">Primary</Button>
                <NavLink to='/detail'>去detail</NavLink>
                <Icon type="step-backward" />
                <img src={img}/>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Pagination defaultCurrent={1} total={50} />
                <PageHeader
                    onBack={() => null}
                    title="Title"
                    subTitle="This is a subtitle"
                />
            </div>
        )
    }
}