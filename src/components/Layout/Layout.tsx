import React from 'react';
import Aux from '../../hoc/Aux';
import './layout.css'
import ToolBar from "../Navigation/Toolbar/toolbar";

const layout: React.FC = (props: any) => {
    return (
        <Aux>
            <ToolBar />>
            <main className='Content'>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout
