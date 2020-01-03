import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './layout.css'
import ToolBar from "../Navigation/Toolbar/toolbar";
import SideDrawer from "../Navigation/SideDrawer/sideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerToggleHandler = () => {
        this.setState({ showSideDrawer: !this.state.showSideDrawer })
    }

    render() {
        return (
            <Aux>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout
