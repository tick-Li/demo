import React from 'react';
import { NavLink } from "react-router-dom";
import { Icon, Button, Row, Col, Pagination, PageHeader, Form, Input, Checkbox } from "antd";
import "./index.less";
import img from "images/5.jpg";

class Home extends React.Component {
    componentDidMount() {
        console.log(this.refs.test)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="home" ref="test">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>

                <Button type="primary">Primary</Button>
                <NavLink to='/detail'>去detail</NavLink>
                <Icon type="step-backward" />
                {/* <img src={img}/> */}
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
export default Home = Form.create({ name: "test", validateMessages: { userName: "测试"}})(Home);