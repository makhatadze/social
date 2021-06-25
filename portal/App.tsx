import React, {StrictMode} from "react";
import {BrowserRouter as Router} from 'react-router-dom';

import {connect,Provider} from "react-redux";
import {compose} from "redux";
import {Spin} from "antd";
import './App.scss';
import store from './store';
import {IApp} from "./Interfaces";
import AppNavigation from "./routes/AppNavigation";
import AuthNavigation from "./routes/AuthNavigation";
import {initializeApp} from "./store/actions/appActions";

class App extends React.Component<IApp> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <div className="d-center"><Spin size="large"/></div>
        }
        return (
            <>
                {!this.props.initialized && <div className="d-center"><Spin size="large"/></div>}
                {this.props.initialized && (
                    <div className="app">
                        {1 ? <AppNavigation/> : <AuthNavigation/>}
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose<React.ComponentType>(connect(mapStateToProps,{initializeApp}))(App)

const VitoSocialApp = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <Router>
                    <AppContainer />
                </Router>
            </Provider>
        </StrictMode>
    )
}

export default VitoSocialApp;