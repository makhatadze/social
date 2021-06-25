import React from "react";
import {NavLink} from "react-router-dom";
import {Menu} from "antd";
import {IMyAccountSubMenu} from "../../../../Interfaces";
import {LogoutOutlined, QuestionCircleOutlined, SettingOutlined} from "@ant-design/icons";

const SubMenu: React.FC<IMyAccountSubMenu> = props => {
    const {logOut} = props;
    const {Item} = Menu;
    return (
        <Menu>
            <Item key="1" icon={<SettingOutlined />}>
                <NavLink to="/settings">
                    Settings
                </NavLink>
            </Item>
            <Item key="2" icon={<QuestionCircleOutlined />}>
                <NavLink to="/help">
                    Settings
                </NavLink>
            </Item>
            <Item key="3" onClick={() => logOut()} icon={<LogoutOutlined />}>
                <NavLink to="/help">
                    Sign Out
                </NavLink>
            </Item>
        </Menu>
    )
}

export default SubMenu;