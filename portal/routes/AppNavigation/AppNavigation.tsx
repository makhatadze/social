import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {appRoutes} from '../routes';
import {Layout} from "antd";
import {IAppNavigation} from "../../Interfaces";

const AppNavigation: React.FC<IAppNavigation> = props => {
    const {Content, Header} = Layout;

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header>header</Header>
            <Layout className="site-layout">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12 col-md-3 col-lg-2 pr-0">
                            Navbar
                        </div>
                        <div className="col-12 col-md-9 col-xl-10 mb-5">
                            <Content>
                                <Switch>
                                    {appRoutes.map((route: any, index: number) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            children={route.component}
                                        />
                                    ))}
                                </Switch>
                            </Content>
                        </div>
                    </div>
                </div>
            </Layout>
        </Layout>
    )
}

export default AppNavigation;