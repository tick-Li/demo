import React from 'react';
import { NavLink } from "react-router-dom";
import { Menu, Dropdown, Icon } from 'antd';

export default class Home extends React.Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <NavLink to='/home'>回到home</NavLink>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        Hover me <Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        )
    }
}