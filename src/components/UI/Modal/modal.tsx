import React, { Component } from 'react';
import './modal.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/backdrop';

interface modalProps {

}

class Modal extends Component<any> {
    shouldComponentUpdate(nextProps: any, nextState: any) {
        return (nextProps.show !== this.props.show)
    }

    componentDidUpdate() {
        console.log("[Modal] Updated")
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;