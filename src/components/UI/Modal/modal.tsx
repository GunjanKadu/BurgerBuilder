import React from 'react';
import './modal.css'

interface modalProps {

}

const modal = (props: any) => {
    return (
        <div className="Modal">
            {props.children}
        </div>
    )
}

export default modal