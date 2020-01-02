import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './layout.css'
import ToolBar from "../Navigation/Toolbar/toolbar";
import SideDrawer from "../Navigation/SideDrawer/sideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    render() {
        return (
            <Aux>
                <ToolBar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout
