import React from "react";
import {Avatar, Dropdown, Button} from "antd";
import {UserOutlined} from '@ant-design/icons';
import styles from './MyAccount.module.scss';
import SubMenu from "./SubMenu";
import {IMyAccount} from "../../../Interfaces";


const MyAccount: React.FC<IMyAccount> = props => {
    const {logOut, myProfile} = props;

    return (
        <div className={`${styles.wrapper} no-border`}>
            <Dropdown overlay={<SubMenu logOut={logOut} />}>
                <Button style={{height: 40}}>
                    <div className={styles.inner}>
                        <span className={`${styles.login} mr-2`}>
                            {!myProfile.length ? myProfile.name : 'Loading...'}
                        </span>
                        <Avatar icon={<UserOutlined />} />
                    </div>
                </Button>
            </Dropdown>
        </div>
    )
}

export default MyAccount;